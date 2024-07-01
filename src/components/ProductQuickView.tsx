import React, { FC } from "react";
import ButtonPrimary from "../shared/Button/ButtonPrimary";
import LikeButton from "../components/LikeButton";
import { StarIcon } from "@heroicons/react/24/solid";
import BagIcon from "../components/BagIcon";
import NcInputNumber from "../components/NcInputNumber";
import { Product } from "../data/data";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "../components/IconDiscount";
import Prices from "../components/Prices";
import toast from "react-hot-toast";
import detail1JPG from "../assets/PRODUCT DETAIL/1-product-pic-1.jpg";
import detail2JPG from "../assets/PRODUCT DETAIL/1-product-pic-2.jpg";
import detail3JPG from "../assets/PRODUCT DETAIL/1-product-pic-3.jpg";
import NotifyAddTocart from "./NotifyAddTocart";
import AccordionInfo from "../containers/ProductDetailPage/AccordionInfo";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../store/shopping-cart-context";
import AppProductChip from "./AppProductChip/AppProductChip";

export interface ProductQuickViewProps {
  className?: string;
  product: Product;
}

const ProductQuickView: FC<ProductQuickViewProps> = ({
  product,
  className = "",
}) => {
  const { id, name, image, price, sizes, variants, status, allOfSizes } =
    product;
  const LIST_IMAGES_DEMO = [image, detail2JPG, detail3JPG];
  const { addItemToCartWithQuantity } = useShoppingCartContext();
  const [variantActive, setVariantActive] = React.useState(0);
  const [sizeSelected, setSizeSelected] = React.useState(sizes ? sizes[0] : "");
  const [quantitySelected, setQuantitySelected] = React.useState(1);
  const [buyingOption, setBuyingOption] = React.useState({
    id: 1,
    label: "One Time",
  });
  const [quantityOption, setQuantityOption] = React.useState({
    id: 1,
    label: "100 g",
  });

  const addToCart = () => {
    notifyAddTocart();
    addItemToCartWithQuantity(product, quantitySelected);
  };

  const notifyAddTocart = () => {
    toast.custom(
      (t) => (
        <NotifyAddTocart
          productImage={image}
          qualitySelected={quantitySelected}
          show={t.visible}
          sizeSelected={sizeSelected}
          variantActive={variantActive}
        />
      ),
      { position: "top-right", id: "nc-product-notify", duration: 3000 }
    );
  };

  const renderVariants = () => {
    if (!variants || !variants.length) {
      return null;
    }

    return (
      <div>
        <label htmlFor="">
          <span className="text-sm font-medium">
            Color:
            <span className="ml-1 font-semibold">
              {variants[variantActive].name}
            </span>
          </span>
        </label>
        <div className="flex mt-2.5">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative flex-1 max-w-[75px] h-10 rounded-full border-2 cursor-pointer ${
                variantActive === index
                  ? "border-primary-6000 dark:border-primary-500"
                  : "border-transparent"
              }`}
            >
              <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                <img
                  src={variant.thumbnail}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSizeList = () => {
    if (!allOfSizes || !sizes || !sizes.length) {
      return null;
    }
    return (
      <div>
        <div className="flex justify-between font-medium text-sm">
          <label htmlFor="">
            <span className="">
              Size:
              <span className="ml-1 font-semibold">{sizeSelected}</span>
            </span>
          </label>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="##"
            className="text-primary-6000 hover:text-primary-500"
          >
            See sizing chart
          </a>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-2.5">
          {allOfSizes.map((size, index) => {
            const isActive = size === sizeSelected;
            const sizeOutStock = !sizes.includes(size);
            return (
              <div
                key={index}
                className={`relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
                text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 ${
                  sizeOutStock
                    ? "text-opacity-20 dark:text-opacity-20 cursor-not-allowed"
                    : "cursor-pointer"
                } ${
                  isActive
                    ? "bg-primary-6000 border-primary-6000 text-white hover:bg-primary-6000"
                    : "border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                }`}
                onClick={() => {
                  if (sizeOutStock) {
                    return;
                  }
                  setSizeSelected(size);
                }}
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderStatus = () => {
    if (!status) {
      return null;
    }
    const CLASSES =
      "absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 text-slate-900 dark:text-slate-300";
    if (status === "New in") {
      return (
        <div className={CLASSES}>
          <SparklesIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "50% Discount") {
      return (
        <div className={CLASSES}>
          <IconDiscount className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "Sold Out") {
      return (
        <div className={CLASSES}>
          <NoSymbolIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    if (status === "limited edition") {
      return (
        <div className={CLASSES}>
          <ClockIcon className="w-3.5 h-3.5" />
          <span className="ml-1 leading-none">{status}</span>
        </div>
      );
    }
    return null;
  };

  const renderSectionContent = () => {
    const quantityOptions = [
      { id: 1, label: "100 g" },
      { id: 2, label: "200 g" },
    ];

    const buyingOptions = [
      { id: 1, label: "One Time" },
      { id: 2, label: "6 Months" },
      { id: 3, label: "1 Year" },
    ];
    return (
      <div className="space-y-8">
        {/* ---------- 1 HEADING ----------  */}
        <div>
          <h2 className="text-2xl font-semibold hover:text-primary-6000 transition-colors">
            <Link to={"/product-detail/" + id}>{name}</Link>
          </h2>

          <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
            {/* <div className="flex text-xl font-semibold">
              <h4>Rs.{price.toFixed(2)}</h4>
            </div> */}
            <Prices
              contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
              price={price}
            />

            {/* <div className="h-6 border-l border-slate-300 dark:border-slate-700"></div> */}

            <div className="flex items-center">
              {/* <Link
                to="/product-detail"
                className="flex items-center text-sm font-medium"
              >
                <StarIcon className="w-5 h-5 pb-[1px] text-yellow-400" />
                <div className="ml-1.5 flex">
                  <span>4.9</span>
                  <span className="block mx-2">·</span>
                  <span className="text-slate-600 dark:text-slate-400 underline">
                    142 reviews
                  </span>
                </div>
              </Link> */}
              {/* <span className="hidden sm:block mx-2.5">·</span>
              <div className="hidden sm:flex items-center text-sm">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span className="ml-1 leading-none">{status}</span>
              </div> */}
            </div>
          </div>
        </div>

        <AppProductChip
          label="Select Quantity"
          items={quantityOptions}
          selectedItem={quantityOption}
          onItemChange={setQuantityOption}
        />
        {/* <AppProductChip
          label="Buying Option"
          items={buyingOptions}
          selectedItem={buyingOption}
          onItemChange={setBuyingOption}
        /> */}

        {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}
        {/* <div className="">{renderVariants()}</div>
        <div className="">{renderSizeList()}</div> */}

        {/* <div>
          <h4 className="text-sm font-semibold">Select Quantity</h4>
          <ul className="flex gap-3 my-3">
            {["100 g", "200 g"].map((item) => (
              <li key={item}>
                <span className="bg-white-100 border-2 border-primary-900 text-green-800 text-md font-medium me-2 px-3.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Buying Option</h4>
          <ul className="flex gap-3 my-3">
            {["One time", "6 Months", "1 Year"].map((item) => (
              <li key={item}>
                <span className="bg-white-100 border-2 border-primary-900 text-green-800 text-md font-medium me-2 px-3.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div> */}

        {}

        {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
        <div className="flex space-x-3.5">
          <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
            <NcInputNumber
              defaultValue={quantitySelected}
              onChange={setQuantitySelected}
            />
          </div>
          <ButtonPrimary className="flex-1 flex-shrink-0" onClick={addToCart}>
            <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
            <span className="ml-3">Add to cart</span>
          </ButtonPrimary>
        </div>

        {/*  */}
        <hr className=" border-slate-200 dark:border-slate-700"></hr>
        {/*  */}

        {/* ---------- 5 ----------  */}
        <AccordionInfo
          data={[
            {
              name: "Product Info",
              content:
                "A miraculous combination of herbs in pal podi magically clears sore throat, sinus headache, running nose, sneezing, improves vision and clears the discolourization of facial skin",
            },
            {
              name: `Benefits of ${name}`,
              content: `<ul class="list-disc list-inside leading-7">
            <li>Essential to control plaque of teeth</li>
            <li>
             Removes odour from teeth
            </li>
            <li>
              Brushing your teeth twice a day is good for health
            </li>
            <li>
              Enhances immunity
            </li>
          </ul>`,
            },
            {
              name: `How to Use?`,
              content: `<ul class="list-disc list-inside leading-7">
            <li>Essential to control plaque of teeth</li>
            <li>
             Removes odour from teeth
            </li>
            <li>
              Brushing your teeth twice a day is good for health
            </li>
            <li>
              Enhances immunity
            </li>
          </ul>`,
            },
            {
              name: `Suitable For`,
              content: `<ul class="list-disc list-inside leading-7">
            <li>Essential to control plaque of teeth</li>
            <li>
             Removes odour from teeth
            </li>
            <li>
              Brushing your teeth twice a day is good for health
            </li>
            <li>
              Enhances immunity
            </li>
          </ul>`,
            },
          ]}
        />
      </div>
    );
  };

  return (
    <div className={`nc-ProductQuickView ${className}`}>
      {/* MAIn */}
      <div className="lg:flex">
        {/* CONTENT */}
        <div className="w-full lg:w-[50%] ">
          {/* HEADING */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-16">
              <img
                src={LIST_IMAGES_DEMO[0]}
                className="w-full rounded-xl object-cover"
                alt="product detail 1"
              />
            </div>

            {/* STATUS */}
            {renderStatus()}
            {/* META FAVORITES */}
            <LikeButton className="absolute right-3 top-3 " />
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-5 xl:mt-5">
            {[LIST_IMAGES_DEMO[1], LIST_IMAGES_DEMO[2]].map((item, index) => {
              return (
                <div key={index} className="aspect-w-3 aspect-h-4">
                  <img
                    src={item}
                    className="w-full rounded-xl object-cover"
                    alt="product detail 1"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-full lg:w-[50%] pt-6 lg:pt-0 lg:pl-7 xl:pl-8">
          {renderSectionContent()}
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
