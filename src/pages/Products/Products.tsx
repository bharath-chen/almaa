import ProductCard from "../../components/ProductCard";
import SidebarFilters from "../../containers/SidebarFilters";
import { FC, useEffect, useState } from "react";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import Chip from "./Chip/Chip";
import productService from "../../services/product-service";
import { Product } from "../../models/product";
import { CanceledError } from "axios";
import { hideLoader, showLoader } from "../../features/loader/loaderSlice";
import { SortOrder } from "../../models/sort-order";
import sortProductsService from "../../services/sort-products-service";
import { useAppDispatch } from "../../hooks/hooks";

interface Props {
  className?: string;
}

const Products: FC<Props> = ({ className = "" }) => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [selectedSortOrder, setSelectedSortOrder] = useState<SortOrder>();

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
  }, [selectedSortOrder?.value]);

  const handleSortingProducts = (selectedSort: SortOrder) => {
    setSelectedSortOrder(selectedSort);
  };

  return (
    <div
      className={`nc-PageCollection2 ${className}`}
      data-nc-id="PageCollection2"
    >
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          <main>
            {/* LOOP ITEMS */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 xl:w-1/4 pr-4">
                <SidebarFilters
                  selectedSortOrder={selectedSortOrder}
                  onSort={handleSortingProducts}
                />
              </div>
              <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
              <div className="flex-1 ">
                <Chip
                  name="Powders"
                  onClick={() => {
                    console.log("Clicked");
                  }}
                />
                <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
                  {products.map((item, index) => (
                    <ProductCard
                      data={item}
                      // onLike={() => handleLike(item.id)}
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
