import { NoSymbolIcon, CheckIcon } from "@heroicons/react/24/outline";
import NcInputNumber from "../../components/NcInputNumber";
import Prices from "../../components/Prices";
import { Product } from "../../models/product";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Label from "../../components/Label/Label";
import Select from "../../shared/Select/Select";
import cartService from "../../services/cart-service";
import { RootState } from "../../state/store";
import { useEffect, useState } from "react";
import deliveryChargeService from "../../services/delivery-charge-service";
import {
  removeFromCart,
  updateCartQuantity,
  selectCartTotal,
} from "../../features/cart/cartSlice"; // Adjust the import path as needed
import { states } from "../../data/states";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.auth);
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const subTotal = useAppSelector(selectCartTotal);
  console.log(subTotal);
  const [form, setForm] = useState({ state: "" });
  const [shippingEstimate, setShippingEstimate] = useState<number>();

  const renderStatusSoldout = () => (
    <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      <NoSymbolIcon className="w-3.5 h-3.5" />
      <span className="ml-1 leading-none">Sold Out</span>
    </div>
  );

  const renderStatusInstock = () => (
    <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      <CheckIcon className="w-3.5 h-3.5" />
      <span className="ml-1 leading-none">In Stock</span>
    </div>
  );

  const renderProduct = (
    item: Product & { quantity: number },
    index: number
  ) => {
    const {
      product_id,
      product_image1,
      selling_price,
      product_name,
      quantity,
      suitablefor,
    } = item;

    console.log(item);

    return (
      <div
        key={index}
        className="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0"
      >
        <div className="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={product_image1}
            alt={product_name}
            className="h-full w-full object-contain object-center"
          />
          <Link
            to={"/product-detail/" + product_id}
            className="absolute inset-0"
          ></Link>
        </div>

        <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div className="flex-[1.5] ">
                <h3 className="text-base font-semibold">
                  <Link to={"/product-detail/" + product_id}>
                    {product_name}
                  </Link>
                </h3>
                <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                  <p
                    className={`text-sm text-slate-500 dark:text-slate-400 mt-1`}
                  >
                    {suitablefor}
                  </p>
                </div>

                <div className="mt-3 flex justify-between w-full sm:hidden relative">
                  <select
                    name="qty"
                    id="qty"
                    className="form-select text-sm rounded-md py-1 border-slate-200 dark:border-slate-700 relative z-10 dark:bg-slate-800"
                    onChange={(e) => {
                      const newQuantity = +e.target.value;
                      if (newQuantity > 0) {
                        dispatch(
                          updateCartQuantity({
                            product_id,
                            quantity: newQuantity,
                          })
                        );
                      }
                    }}
                    value={quantity}
                  >
                    {[...Array(7).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <Prices
                    contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                    price={+selling_price}
                  />
                </div>
              </div>

              <div className="hidden sm:block text-center relative">
                <NcInputNumber
                  defaultValue={quantity}
                  onChange={(value) =>
                    dispatch(
                      updateCartQuantity({ product_id, quantity: value })
                    )
                  }
                  className="relative z-10"
                />
              </div>

              <div className="hidden flex-1 sm:flex justify-end">
                <Prices price={+selling_price} className="mt-0.5" />
              </div>
            </div>
          </div>

          <div className="flex mt-auto pt-4 items-end justify-between text-sm">
            {renderStatusInstock()}

            <a
              onClick={() => dispatch(removeFromCart(product_id))}
              className="cursor-pointer relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm"
            >
              <span>Remove</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const handleCheckout = () => {
    interface AddCartRequest {
      gofor: string;
      cust_id: string;
      product_details: { product_id: string; quantity: string }[];
    }

    const payload: AddCartRequest = {
      gofor: "addcart",
      cust_id: user.customer_id,
      product_details: cartItems.map((p) => ({
        product_id: p.product_id,
        quantity: p.quantity.toString(),
      })),
    };

    cartService.create<AddCartRequest>(payload).then((res) => {
      console.log(res);
      navigate("/checkout", {
        state: {
          shippingEstimate,
        },
      });
    });
  };

  useEffect(() => {
    if (form.state) {
      const { request } = deliveryChargeService.get<string, { state: string }>({
        state: form.state,
      });

      request.then((res) => {
        if (res.data) {
          setShippingEstimate(+res.data);
        }
      });
    } else {
      setShippingEstimate(null);
    }
  }, [form]);

  return (
    <div className="nc-CartPage">
      <main className="container py-16 lg:pb-28 lg:pt-20">
        <div className="mb-12 sm:mb-16">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Shopping Cart
          </h2>
          <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
            <Link to={"/"} className="">
              Homepage
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <Link to={"/products"} className="">
              Products
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <span className="underline">Shopping Cart</span>
          </div>
        </div>
        {cartItems.length <= 0 && (
          <p className="text-md font-semibold text-center">
            No Items were added in the cart
          </p>
        )}

        {cartItems.length > 0 && (
          <>
            <hr className="border-slate-200 dark:border-slate-700 my-10 xl:my-12" />

            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[60%]">
                {cartItems.map(renderProduct)}
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-[40%]">
                <h4 className="mb-5 text-lg font-semibold">Order Summary</h4>
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-3">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹ {subTotal.toFixed(2)}</span>
                </div>
                {/* <div className="flex justify-between py-4">
                  <span>Tax estimate</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    ₹24.90
                  </span>
                </div> */}
                {shippingEstimate && (
                  <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-3 mt-2">
                    <span>Shipping Estimate</span>
                    <span className="font-semibold">
                      ₹ {shippingEstimate.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="max-w-lg py-3">
                  <Label className="text-sm">State</Label>
                  <Select
                    className="mt-1.5 mb-3"
                    value={form.state}
                    onChange={(e) =>
                      setForm({ ...form, state: e.target.value })
                    }
                  >
                    <option value=""></option>
                    {states.map((state) => (
                      <option key={state.label} value={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </Select>
                  {/* <Label className="text-sm">Pincode</Label>
                      <Input
                        className="mt-1.5"
                        type={"text"}
                        value={form.pinCode}
                        onChange={(e) =>
                          setForm({ ...form, pinCode: e.target.value })
                        }
                      /> */}
                </div>
                <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
                  <span>Order total</span>
                  <span>
                    {/* + 24.9 */}₹
                    {(subTotal + (shippingEstimate || 0)).toFixed(2)}
                  </span>
                </div>
                <ButtonPrimary onClick={handleCheckout} className="mt-8 w-full">
                  Proceed to Checkout
                </ButtonPrimary>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;
