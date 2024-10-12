import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import CommonLayout from "./CommonLayout";
import {
  fetchWishlist,
  removeItemFromWishlistAndUpdate,
} from "../../features/wishlist/wishlistSlice";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/product";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";

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
            Wishlist: Keep Track of What You Love
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {!items?.productdetail?.length ? (
            <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Your Wishlist is Empty!
              </h3>
              <p className="text-gray-500 mb-4">
                Looks like you haven't saved any products yet. Start adding
                items to your wishlist!
              </p>
              <ButtonPrimary
                onClick={() => {
                  /* Redirect to product page or search */
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Browse Products
              </ButtonPrimary>
            </div>
          ) : (
            items.productdetail.length > 0 &&
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
              })
          )}
        </div>
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
