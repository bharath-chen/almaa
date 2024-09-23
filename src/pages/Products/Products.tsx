import ProductCard from "../../components/ProductCard";
import SidebarFilters, { Filters } from "../../containers/SidebarFilters";
import { FC, useEffect, useState } from "react";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import Chip from "./Chip/Chip";
import productService from "../../services/product-service";
import { Product } from "../../models/product";
import { CanceledError } from "axios";
import { hideLoader, showLoader } from "../../features/loader/loaderSlice";
import { SortOrder } from "../../models/sort-order";
import sortProductsService from "../../services/sort-products-service";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import { Alert } from "../../shared/Alert/Alert";
import { useLocation } from "react-router-dom";
import { NavItemType } from "../../shared/Navigation/NavigationItem";
import subcategoryService from "../../services/subcategory-service";
import { type SubCategory } from "../../models/subCategory";
import filterProductsService from "../../services/filter-products-service";

interface Props {
  className?: string;
}

const Products: FC<Props> = ({ className = "" }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<NavItemType>();
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [selectedSortOrder, setSelectedSortOrder] = useState<SortOrder>();
  const [selectedFilter, setSelectedFilter] = useState<Filters>({
    nat_of_prod: [],
    herb_type: false,
    is_nutraceutical: false,
    pres_req: false,
  });
  const [close, setClose] = useState(false);
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.wishlist);

  const getSubCategories = () => {
    const { request } = subcategoryService.getAll<
      SubCategory,
      { category_id: string }
    >({
      category_id: location.state.item.id,
    });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        setSubCategories(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        dispatch(hideLoader());
        console.log(error);
      });
  };

  const getProductsByCategory = () => {
    dispatch(showLoader());

    const { request } = productService.getAll<Product, { category_id: string }>(
      { category_id: location.state.item.id }
    );

    request
      .then((res) => {
        dispatch(hideLoader());
        setProducts(res.data);
      })
      .catch((err) => {
        dispatch(hideLoader());
        setError(err.message);
      });
  };

  const getProductsBySubCategory = (subCategoryId: string) => {
    dispatch(showLoader());

    const { request } = productService.getAll<
      Product,
      { subcategory_id: string }
    >({ subcategory_id: subCategoryId });

    request
      .then((res) => {
        dispatch(hideLoader());
        setProducts(res.data);
      })
      .catch((err) => {
        dispatch(hideLoader());
        setError(err.message);
      });
  };

  useEffect(() => {
    setSelectedCategory(location.state ? location.state?.item : []);

    if (location.state?.item) {
      getSubCategories();
      getProductsByCategory();
    }
  }, [location.state]);

  // Products
  useEffect(() => {
    const { request, cancel } = productService.getAll<Product>();

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        setProducts(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch(hideLoader());
        setError(err.message);
      });

    return () => cancel();
  }, []);

  useEffect(() => {
    if (selectedSortOrder?.value) {
      const { request } = sortProductsService.getAll<
        Product,
        { sortBy: string }
      >({ sortBy: selectedSortOrder.value });

      dispatch(showLoader());

      request
        .then((res) => {
          dispatch(hideLoader());
          setProducts(res.data);
        })
        .catch((err) => {
          dispatch(hideLoader());
          setError(err.message);
        });
    }
  }, [selectedSortOrder?.value, selectedFilter]);

  useEffect(() => {
    if (
      selectedFilter.nat_of_prod.length > 0 ||
      selectedFilter.herb_type ||
      selectedFilter.pres_req ||
      selectedFilter.is_nutraceutical
    ) {
      const obj = {
        nat_of_prod: selectedFilter.nat_of_prod.join(","),
        is_nutraceutical: 1,
        pres_req: 1,
        herb_type: "Single",
      };

      if (selectedFilter.nat_of_prod.length === 0) delete obj.nat_of_prod;

      if (!selectedFilter.is_nutraceutical) delete obj.is_nutraceutical;

      if (!selectedFilter.pres_req) delete obj.pres_req;

      if (!selectedFilter.herb_type) delete obj.herb_type;

      const { request } = filterProductsService.getAll<
        Product,
        | {
            nat_of_prod?: string;
            herb_type?: string;
            pres_req?: number;
            is_nutraceutical?: number;
          }
        | {}
      >(obj);

      dispatch(showLoader());

      request
        .then((res) => {
          dispatch(hideLoader());
          setProducts(res.data);
        })
        .catch((err) => {
          dispatch(hideLoader());
          setError(err.message);
        });
    }
  }, [selectedFilter]);

  const handleSortingProducts = (selectedSort: SortOrder) => {
    setSelectedSortOrder(selectedSort);
  };

  const handleFilterChange = (filter: Filters) => {
    setSelectedFilter(filter);
  };

  const handleLike = (id: string) => {
    const updatedProducts = [...products].map((p) =>
      p.product_id === id ? { ...p, isLiked: (p.isLiked = !p.isLiked) } : p
    );
    const product = updatedProducts.find((p) => p.product_id === id);

    if (product.isLiked) dispatch(addItemToWishlist(product.product_id));
    else dispatch(removeItemFromWishlist(product.product_id));

    setProducts(updatedProducts);
  };

  const handleClose = () => {
    setClose(!close);
  };

  const handleSelectedChip = (item: SubCategory) => {
    getProductsBySubCategory(item.subcategory_id);
    setSelectedSubCategory(item);
  };

  return (
    <div
      className={`nc-PageCollection2 ${className}`}
      data-nc-id="PageCollection2"
    >
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {wishlist.success && (
            <Alert type="success" onClose={handleClose}>
              {wishlist.success}
            </Alert>
          )}
          <main>
            {/* LOOP ITEMS */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 xl:w-1/4 pr-4">
                <SidebarFilters
                  selectedSortOrder={selectedSortOrder}
                  onSort={handleSortingProducts}
                  selectedFilter={selectedFilter}
                  onFilterChange={handleFilterChange}
                />
              </div>
              <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
              <div className="flex-1 ">
                <div className="flex flex-row">
                  {subCategories.map((item) => (
                    <Chip
                      active={
                        item.subcategory_id ===
                        selectedSubCategory?.subcategory_id
                      }
                      key={item.subcategory_id}
                      id={item.subcategory_id}
                      name={item.subcat_name}
                      onClick={() => handleSelectedChip(item)}
                    />
                  ))}
                </div>
                <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
                  {products.length > 0 &&
                    products.map((item, index) => (
                      <ProductCard
                        data={item}
                        onLike={() => handleLike(item.product_id)}
                        key={index}
                      />
                    ))}
                  {/* {prod} */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </div>
  );
};

export default Products;
