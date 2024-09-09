import Label from "../../components/Label/Label";
import NcInputNumber from "../../components/NcInputNumber";
import Prices from "../../components/Prices";
// import { Product } from "../../data/data";
import { Product } from "../../models/product";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import Input from "../../shared/Input/Input";
import ContactInfo from "./ContactInfo";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";
import { useShoppingCartContext } from "../../store/shopping-cart-context";
import AppOfferCodes, {
  OfferCode,
} from "../../components/AppOfferCodes/AppOfferCodes";
import useViewAddressess from "../../hooks/useViewAddress";
import { Address } from "../../models/address";
import useViewCart, { CartDetailPayload } from "../../hooks/useViewCart";
import orderService from "../../services/order-service";
import { CartDetail } from "../../models/cartDetail";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../state/store";
import addressService from "../../services/address-service";

const CheckoutPage = () => {
  const {
    cart,
    setCartItems,
    totalPrice,
    removeItemFromCart,
    updateQuantity,
    orderPlaced,
  } = useShoppingCartContext();

  const { cartDetails, setCartDetails } = useViewCart();
  const { addressList, setAddressList } = useViewAddressess();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    const productDetails: Product[] =
      cartDetails && cartDetails.productDetail.length > 0
        ? cartDetails.productDetail
            .filter((p) => p)
            .map((p, index) => ({
              ...p,
              qty: +cartDetails.cartDetail[index].quantity,
            }))
        : [];

    setCartItems(productDetails);
  }, [cartDetails]);

  const [tabActive, setTabActive] = useState<
    "ContactInfo" | "ShippingAddress" | "PaymentMethod"
  >("ShippingAddress");

  const [offerCodes, setOfferCodes] = useState<OfferCode[]>([
    {
      id: 1,
      code: "CODE10",
      description: "Get 10% discount on purchase",
      discount: 10,
    },
    {
      id: 2,
      code: "CODE20",
      description: "Get 20% discount on purchase",
      discount: 20,
    },
    {
      id: 3,
      code: "CODE30",
      description: "Get 30% discount on purchase",
      discount: 30,
    },
  ]);

  const [offerCode, setOfferCode] = useState<string>("");
  const [discountCodeError, setDiscountCodeError] = useState<string>("");
  const [offerCodeApplied, setOfferCodeApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const applyOfferCode = (code: string) => {
    const validCode = offerCodes.find((o) => o.code === code);

    if (!validCode) {
      setDiscountCodeError("Oops! Invalid Discount Code");
      setOfferCodeApplied(false);
      setDiscount(0);
      return;
    }

    setDiscountCodeError(null);
    setOfferCode(validCode.code);
    setOfferCodeApplied(true);
    setDiscount(validCode.discount);
  };

  const removeOfferCode = () => {
    setDiscountCodeError("");
    setOfferCode("");
    setOfferCodeApplied(false);
    setDiscount(0);
  };

  const handleOfferCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.toLocaleUpperCase();
    setDiscountCodeError("");
    setOfferCode(code);
  };

  const calculateDiscount = (originalPrice: number, discountPercentage = 0) => {
    // if (
    //   originalPrice <= 0 ||
    //   discountPercentage < 0 ||
    //   discountPercentage > 100
    // ) {
    //   return "Invalid input. Please provide valid values.";
    // }

    if (discountPercentage === 0) {
      return {
        discountAmount: 0.0,
        discountedPrice: originalPrice.toFixed(2),
      };
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return {
      discountAmount: discountAmount.toFixed(2),
      discountedPrice: discountedPrice.toFixed(2),
    };
  };

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const renderProduct = (item: Product, index: number) => {
    const {
      product_id,
      product_image1,
      selling_price,
      product_name,
      quantity,
      qty,
    } = item;

    if (!item) return;

    return (
      <div key={index} className="relative flex py-7 first:pt-0 last:pb-0">
        <div className="relative h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={product_image1}
            alt={product_name}
            className="h-full w-full object-contain object-center"
          />
          <Link to="/product-detail" className="absolute inset-0"></Link>
        </div>

        <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div className="flex-[1.5] ">
                <h3 className="text-base font-semibold">
                  <Link to="/product-detail">{product_name}</Link>
                </h3>
                <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.35 1.94995L9.69 3.28992"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.07 11.92L17.19 11.26"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 22H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>{`Black`}</span>
                  </div>
                  <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 9V3H15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 15V21H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L13.5 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 13.5L3 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* <span>{item.sizes[0]}</span> */}
                  </div>
                </div>

                <div className="mt-3 flex justify-between w-full sm:hidden relative">
                  <select
                    name="qty"
                    id="qty"
                    className="form-select text-sm rounded-md py-1 border-slate-200 dark:border-slate-700 relative z-10 dark:bg-slate-800 "
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <Prices
                    contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                    price={+selling_price}
                  />
                </div>
              </div>

              <div className="hidden flex-1 sm:flex justify-end">
                <Prices price={+selling_price} className="mt-0.5" />
              </div>
            </div>
          </div>

          <div className="flex mt-auto pt-4 items-end justify-between text-sm">
            <div className="hidden sm:block text-center relative">
              <NcInputNumber
                defaultValue={+qty || +quantity}
                onChange={(value) => updateQuantity(+product_id, value)}
                className="relative z-10"
              />
            </div>

            <a
              className="cursor-pointer relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm "
              onClick={() => removeItemFromCart(+product_id)}
            >
              <span>Remove</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const renderLeft = () => {
    return (
      <div className="space-y-8">
        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo
            isActive={tabActive === "ContactInfo"}
            onOpenActive={() => {
              setTabActive("ContactInfo");
              handleScrollToEl("ContactInfo");
            }}
            onCloseActive={() => {
              setTabActive("ShippingAddress");
              handleScrollToEl("ShippingAddress");
            }}
          />
        </div>

        <div id="ShippingAddress" className="scroll-mt-24">
          <button
            onClick={handleAddAddress}
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl sm:!px-7 shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 mb-4"
          >
            Add Address
          </button>
          {addressList.map((address, index) => (
            <ShippingAddress
              address={address}
              key={index}
              isActive={tabActive === "ShippingAddress"}
              onOpenActive={() => {
                setTabActive("ShippingAddress");
                handleScrollToEl("ShippingAddress");
              }}
              onCloseActive={() => {
                setTabActive("PaymentMethod");
                handleScrollToEl("PaymentMethod");
              }}
            />
          ))}
        </div>

        <div id="PaymentMethod" className="scroll-mt-24">
          <PaymentMethod
            isActive={tabActive === "PaymentMethod"}
            onOpenActive={() => {
              setTabActive("PaymentMethod");
              handleScrollToEl("PaymentMethod");
            }}
            onCloseActive={() => setTabActive("PaymentMethod")}
          />
        </div>
      </div>
    );
  };

  const handleAddAddress = () => {
    if (addressList.length <= 5) {
      const list = [...addressList];
      list.push({} as Address);
      setAddressList(list);
    }
  };

  const addAddress = () => {
    //     "gofor" : "addaddress",
    // "customer_id": "1",
    // "doorno": "81",
    // "street": "Balamurugan Garden",
    // "location": "Thoraipakkam",
    // "pincode": "600097",
    // "city": "Chennai",
    // "state": "TamilNadu",
    // "primary_use": "1",
    // "recently_use": "0"
    // addressService.create<{
    //   gofor: string;
    //   customer_id: string;
    //   doorno: string;
    //   street: string;
    //   location: string;
    //   pincode: string;
    //   city: string;
    //   state: string;
    //   primary_use: string;
    //   recently_use: string;
    // }>();
  };

  const handleConfirmOrder = () => {
    interface CreateOrderPayload {
      gofor: string;
      customer_id: string;
      invoice_amount: string;
      product_details: { product_id: string; quantity: string }[];
    }

    const payload: CreateOrderPayload = {
      gofor: "createorders",
      customer_id: user.customer_id,
      invoice_amount: totalPrice.toString(),
      product_details: cart.map((c) => ({
        product_id: c.product.product_id,
        quantity: c.quantity.toString(),
      })),
    };

    orderService.create<CreateOrderPayload>(payload).then((res) => {
      orderPlaced();
      navigate("/account-my-order");
    });
  };

  return (
    <div className="nc-CheckoutPage">
      {/* <Helmet>
        <title>Checkout || Ciseco Ecommerce Template</title>
      </Helmet> */}

      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            Checkout
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
            <span className="underline">Checkout</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{renderLeft()}</div>

          <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>

          <div className="w-full lg:w-[36%] ">
            <h3 className="text-lg font-semibold">Order summary</h3>
            <div className="mt-8 divide-y divide-slate-200/70 dark:divide-slate-700 ">
              {cart && cart.length <= 0 && (
                <>
                  <p className="text-md font-semibold text-center">
                    No Items were added in the cart
                  </p>
                  <ButtonPrimary href="/products" className="mt-8 w-full">
                    Back To Products
                  </ButtonPrimary>
                </>
              )}
              {cart &&
                cart.length > 0 &&
                cart.map((item, index) => {
                  return renderProduct(
                    {
                      ...item.product,
                    },
                    index
                  );
                })}
            </div>

            {cart.length > 0 && (
              <>
                <div className="mt-10 pt-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-slate-700 ">
                  <div>
                    <Label className="text-sm my-3">Discount code</Label>

                    {offerCodeApplied && (
                      <div className="flex mt-1.5 py-4 px-4 justify-between w-full border border-2 rounded-lg border-slate-200 bg-slate-200">
                        <span className="text-md ">
                          <span className="text-primary-900 font-semibold pr-2">
                            '{offerCode}' applied successfully!
                          </span>
                        </span>
                        <button type="button" onClick={removeOfferCode}>
                          <svg
                            className="w-6 h-6 text-primary-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                    {!offerCodeApplied && (
                      <div className="flex mt-1.5">
                        <Input
                          sizeClass="h-10 px-4 py-3"
                          className="flex-1 uppercase"
                          value={offerCode}
                          onChange={handleOfferCodeChange}
                        />
                        <button
                          disabled={!offerCode}
                          onClick={() => applyOfferCode(offerCode)}
                          className={
                            "text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-2xl px-4 ml-3 font-medium text-sm bg-neutral-200/70 dark:bg-neutral-700 dark:hover:bg-neutral-800 w-24 flex justify-center items-center transition-colors " +
                            (!offerCode
                              ? "bg-neutral-50 cursor-not-allowed"
                              : "bg-neutral-100 cursor-pointer hover:bg-neutral-100")
                          }
                        >
                          Apply
                        </button>
                      </div>
                    )}
                    {discountCodeError && (
                      <p className="pl-3 mt-2 text-red-600">
                        {discountCodeError}
                      </p>
                    )}
                  </div>

                  {!offerCodeApplied && (
                    <AppOfferCodes
                      offerCodes={offerCodes}
                      onApply={applyOfferCode}
                    />
                  )}

                  <div className="mt-4 flex justify-between py-2.5">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">
                      ₹{totalPrice.toFixed(2)}
                    </span>
                  </div>
                  {location.state?.shippingEstimate && (
                    <div className="flex justify-between py-2.5">
                      <span>Shipping estimate</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-200">
                        ₹{location.state?.shippingEstimate.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between py-2.5">
                    <span>Tax estimate</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">
                      ₹24.90
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
                    <span>Order total</span>
                    <span>
                      ₹
                      {(
                        +calculateDiscount(totalPrice, discount)
                          .discountedPrice +
                        ((location.state?.shippingEstimate || 0) + 24.9)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
                <ButtonPrimary
                  onClick={handleConfirmOrder}
                  className="mt-8 w-full"
                >
                  Confirm order
                </ButtonPrimary>
                <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
                  <p className="block relative pl-5">
                    <svg
                      className="w-4 h-4 absolute -left-1 top-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8V13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9945 16H12.0035"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Learn more{` `}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="##"
                      className="text-slate-900 dark:text-slate-200 underline font-medium"
                    >
                      Taxes
                    </a>
                    <span>
                      {` `}and{` `}
                    </span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="##"
                      className="text-slate-900 dark:text-slate-200 underline font-medium"
                    >
                      Shipping
                    </a>
                    {` `} infomation
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
