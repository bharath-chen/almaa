import ProductCard from "../../components/ProductCard";
import SidebarFilters from "../../containers/SidebarFilters";
import { FC, useEffect, useState } from "react";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import productService, { Product } from "../../services/product-service";
import { CanceledError } from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../state/actions/loaderActions";

interface Props {
  className?: string;
}

const Products: FC<Props> = ({ className = "" }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

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

  const handleRemoveFilter = () => {
    console.log("remove filter");
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
                <SidebarFilters />
              </div>
              <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
              <div className="flex-1 ">
                <CategoriesFilter
                  name="Powders"
                  count={12}
                  removeFilter={handleRemoveFilter}
                />
                {/* <div className="bg-gradient-to-r inline-block from-primary-500 via-primary-600 to-primary-700 py-4 px-6 rounded-md mb-10 text-white shadow-lg">
                  <h2 className="text-2xl font-bold">Category: Powders (12)</h2>
                </div> */}
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
