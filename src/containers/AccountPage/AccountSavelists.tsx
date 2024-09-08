// import ProductCard from "../../components/ProductCard";
// import { PRODUCTS } from "../../data/data";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";
import { fetchWishlist } from "../../features/wishlist/wishlistSlice";
import ProductCard from "../../components/ProductCard";

const AccountSavelists = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [items.wishlist.length]);

  const renderSection1 = () => {
    return (
      <div className="space-y-10 sm:space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            List of saved products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {!items.productdetail.length && (
            <h3 className="text-center">No wishlist added!</h3>
          )}
          {items.productdetail.map((p) => {
            p.isLiked = true;
            return <ProductCard key={p.product_id} data={p} />;
          })}
        </div>
        {/* <div className="flex !mt-20 justify-center items-center">
          <ButtonSecondary loading>Show me more</ButtonSecondary>
        </div> */}
      </div>
    );
  };

  return (
    <div>
      <CommonLayout>{renderSection1()}</CommonLayout>
    </div>
  );
};

export default AccountSavelists;
