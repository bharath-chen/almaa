import ProductCard from "../../components/ProductCard";
import SectionPromo1 from "../../components/SectionPromo1";
import SidebarFilters from "../../containers/SidebarFilters";
import SectionSliderCollections from "../../components/SectionSliderLargeProduct";
import productsService from "../../service/products-service";
import { FC, useEffect, useState } from "react";
import { Product } from "../../data/data";

interface Props {
  className?: string;
}

const Products: FC<Props> = ({ className = "" }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsService.getAllProducts());
  }, []);

  return (
    <div
      className={`nc-PageCollection2 ${className}`}
      data-nc-id="PageCollection2"
    >
      {/* <Helmet>
            <title>Category || Ciseco Ecommerce Template</title>
          </Helmet> */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          {/* <div className="max-w-screen-sm">
                <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  Man collection
                </h2>
                <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
                  We not only help you design exceptional products, but also make it
                  easy for you to share your designs with more like-minded people.
                </span>
              </div>
    
              <hr className="border-slate-200 dark:border-slate-700" /> */}
          <main>
            {/* LOOP ITEMS */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 xl:w-1/4 pr-4">
                <SidebarFilters />
              </div>
              <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
              <div className="flex-1 ">
                <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
                  {products.map((item, index) => (
                    <ProductCard data={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* === SECTION 5 === */}
        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}

        {/* <SectionSliderCollections /> */}
        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}

        {/* SUBCRIBES */}
        {/* <SectionPromo1 /> */}
      </div>
    </div>
  );
};

export default Products;
