import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import CommonLayout from "./CommonLayout";
import {
  fetchWishlist,
  removeItemFromWishlistAndUpdate,
} from "../../features/wishlist/wishlistSlice";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/product";

const AccountSavelists = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);

  const handleRemoveItemFromWishList = (productId: string) => {
    dispatch(removeItemFromWishlistAndUpdate(productId));
  };

  const renderSection1 = () => {
    return (
      <div className="space-y-10 sm:space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            List of saved products
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {!items?.productdetail?.length && (
            <h3 className="text-center">No wishlist added!</h3>
          )}
          {items.productdetail.length > 0 &&
            items?.productdetail
              ?.filter(
                (obj, index, self) =>
                  index ===
                  self.findIndex((t) => t.product_id === obj.product_id)
              )
              .map((p: Product, index: number) => {
                const updatedProduct = { ...p, isLiked: true };
                return (
                  <ProductCard
                    key={updatedProduct.product_id + index}
                    data={updatedProduct}
                    isLiked={updatedProduct.isLiked}
                    onLike={() =>
                      handleRemoveItemFromWishList(updatedProduct.product_id)
                    }
                  />
                );
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
