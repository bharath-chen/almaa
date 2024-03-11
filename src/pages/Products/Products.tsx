import ProductCard from "../../components/ProductCard";
import SidebarFilters from "../../containers/SidebarFilters";
import productsService from "../../services/products-service";
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

  const handleLike = (productId: number) => {
    setProducts((products) =>
      products.map((p) =>
        p.id === productId ? { ...p, liked: (p.liked = !p.liked) } : p
      )
    );
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
                <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
                  {products.map((item, index) => (
                    <ProductCard
                      data={item}
                      onLike={() => handleLike(item.id)}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
