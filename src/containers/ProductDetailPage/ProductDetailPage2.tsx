import React, { FC, useState } from "react";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import NcImage from "../../shared/NcImage/NcImage";
import LikeSaveBtns from "./LikeSaveBtns";
import ModalPhotos from "./ModalPhotos";
import ReviewItem from "../../components/ReviewItem";
import IconDiscount from "../../components/IconDiscount";
import NcInputNumber from "../../components/NcInputNumber";
import BagIcon from "../../components/BagIcon";
import AccordionInfo from "./AccordionInfo";
import Policy from "./Policy";
import toast from "react-hot-toast";
import { StarIcon } from "@heroicons/react/24/solid";
import SectionSliderProductCard from "../../components/SectionSliderProductCard";
import ModalViewAllReviews from "./ModalViewAllReviews";
import NotifyAddTocart from "../../components/NotifyAddTocart";
import { Link, useParams } from "react-router-dom";
import productsService from "../../services/products-service";
import product1Img from "../../assets/PRODUCT DETAIL/1-product-pic-1.jpg";
import product2Img from "../../assets/PRODUCT DETAIL/1-product-pic-2.jpg";
import product3Img from "../../assets/PRODUCT DETAIL/1-product-pic-3.jpg";
import product4Img from "../../assets/PRODUCT DETAIL/1-product-pic-4.jpg";
import AppProductChip from "../../components/AppProductChip/AppProductChip";
import { useShoppingCartContext } from "../../store/shopping-cart-context";
import benefitsImage from "../../assets/PRODUCT DETAIL/2-benefits.png";
import faqImg from "../../assets/PRODUCT DETAIL/7-FAQ.jpg";
import ingredient1 from "../../assets/PRODUCT DETAIL/3-ingredient-1.jpg";
import ingredient2 from "../../assets/PRODUCT DETAIL/3-ingredient-2.jpg";
import ingredient3 from "../../assets/PRODUCT DETAIL/3-ingredient-3.jpg";
import ingredient4 from "../../assets/PRODUCT DETAIL/3-ingredient-4.jpg";
import Expert from "../../assets/PRODUCT DETAIL/4-Expert.jpg";
import video from "../../assets/PRODUCT DETAIL/5-video.jpg";
import videoIcon from "../../assets/PRODUCT DETAIL/5-video-icon.png";
import AppSlider from "../../components/AppSlider/AppSlider";
import Heading from "../../components/Heading/Heading";

export interface ProductDetailPage2Props {
  className?: string;
}

const ProductDetailPage2: FC<ProductDetailPage2Props> = ({
  className = "",
}) => {
  const { id } = useParams();
  const relatedProducts = productsService
    .getAllProducts()
    .filter((_, i) => i < 8 && i > 2);
  const product = productsService.getProduct(+id);
  const { name, sizes, variants, status, allOfSizes, price, image } = product;
  const LIST_IMAGES_DEMO: string[] = [
    product1Img,
    product2Img,
    product3Img,
    product4Img,
  ];
  const ingredients = [
    {
      id: 1,
      title: "Vengaram",
      shortDesc: "Strengthens gums",
      src: ingredient1,
    },
    {
      id: 2,
      title: "Milagu",
      shortDesc: "Anti Immunity Property",
      src: ingredient2,
    },
    {
      id: 3,
      title: "Induppu",
      shortDesc: "Controls Teeth Erosion",
      src: ingredient3,
    },
    {
      id: 4,
      title: "Kaluppu",
      shortDesc: "Cleanse & Anti fungal",
      src: ingredient4,
    },
  ];
  const [buyingOption, setBuyingOption] = React.useState({
    id: 1,
    label: "One Time",
  });
  const [quantityOption, setQuantityOption] = React.useState({
    id: 1,
    label: "100 g",
  });
  const { addItemToCartWithQuantity } = useShoppingCartContext();
  const [variantActive, setVariantActive] = React.useState(0);
  const [sizeSelected, setSizeSelected] = React.useState(sizes ? sizes[0] : "");
  const [quantitySelected, setQuantitySelected] = React.useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] =
    useState(false);
  const [openFocusIndex, setOpenFocusIndex] = useState(0);

  const handleOpenModal = (index: number) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };

  const handleCloseModal = () => setIsOpen(false);

  const addToCart = () => {
    notifyAddTocart();
    addItemToCartWithQuantity(product, quantitySelected);
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
        <div className="flex mt-3">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer ${
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
        <div className="grid grid-cols-4 gap-2 mt-3">
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
      "text-sm flex items-center text-slate-700 text-slate-900 dark:text-slate-300";
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

  const renderSectionSidebar = () => {
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
      <div className="listingSectionSidebar__wrap lg:shadow-lg">
        <div className="space-y-7 lg:space-y-8">
          {/* PRICE */}
          <div className="">
            {/* ---------- 1 HEADING ----------  */}
            <div className="flex items-center justify-between space-x-5">
              <div className="flex text-2xl font-semibold">
                Rs.{price.toFixed(2)}
              </div>

              <a
                href="#reviews"
                className="flex items-center text-sm font-medium"
              >
                <div className="">
                  <StarIcon className="w-5 h-5 pb-[1px] text-orange-400" />
                </div>
                <span className="ml-1.5 flex">
                  <span>4.9 </span>
                  <span className="mx-1.5">·</span>
                  <span className="text-slate-700 dark:text-slate-400 underline">
                    142 reviews
                  </span>
                </span>
              </a>
            </div>

            {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}
            <div className="mt-6 space-y-7 lg:space-y-8">
              <div className="">{renderVariants()}</div>
              <div className="">{renderSizeList()}</div>
            </div>
          </div>

          {/* QUANTITY OPTION */}
          <AppProductChip
            label="Select Quantity"
            items={quantityOptions}
            selectedItem={quantityOption}
            onItemChange={setQuantityOption}
          />

          {/* BUYING OPTION */}
          {/* <AppProductChip
            label="Buying Option"
            items={buyingOptions}
            selectedItem={buyingOption}
            onItemChange={setBuyingOption}
          /> */}

          <div className="my-2">
            <h4 className="text-sm font-semibold">Buying Option</h4>

            <div className="grid grid-cols-2 gap-4 desktop:gap-6 desktop:flex desktop:flex-col">
              <div className="cursor-pointer h-full">
                <fieldset className="flex flex-col justify-end rounded relative overflow-hidden h-full p-4 desktop:p-6 bg-green-100 border border-green-400">
                  <legend className="max-w-fit">
                    <p className="text-green-800 text-lg font-bold mt-1">
                      29% off
                    </p>
                  </legend>
                  <div className="flex flex-col gap-2">
                    <div className="pt-2">
                      <p className="text-base text-gray-700 leading-5 desktop:leading-6">
                        100g x Pack of 1
                      </p>
                    </div>
                    <div className="flex items-end gap-2 pb-2 desktop:pb-3">
                      <div>
                        <p className="text-xl text-gray-900 leading-6 font-bold">
                          ₹244
                        </p>
                      </div>
                      <div>
                        <p className="text-base text-gray-500 line-through leading-5">
                          ₹342
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start text-gray-700 text-sm desktop:text-base">
                    ₹2.44/g
                  </div>
                </fieldset>
              </div>

              <div className="cursor-pointer h-full">
                <fieldset className="flex flex-col justify-end rounded relative overflow-hidden h-full p-4 desktop:p-6 border border-gray-300 bg-white">
                  <legend className="max-w-fit">
                    <p className="text-green-800 text-lg font-bold mt-1">
                      31% off
                    </p>
                  </legend>
                  <div className="flex flex-col gap-2">
                    <div className="pt-2">
                      <p className="text-base text-gray-700 leading-5 desktop:leading-6">
                        100g x Pack of 2
                      </p>
                    </div>
                    <div className="flex items-end gap-2 pb-2 desktop:pb-3">
                      <div>
                        <p className="text-xl text-gray-900 leading-6 font-bold">
                          ₹473
                        </p>
                      </div>
                      <div>
                        <p className="text-base text-gray-500 line-through leading-5">
                          ₹684
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start text-gray-700 text-sm desktop:text-base">
                    ₹2.37/g
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

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

          {/* SUM */}
          <div className="hidden sm:flex flex-col space-y-4 ">
            <p className="text-md text-slate-500 dark:text-slate-300">
              Free shipping above ₹2000
            </p>
            <p className="text-md text-slate-500 dark:text-slate-300">
              Cash on delivery available at ₹50 COD Charges
            </p>
            {/* <div className="space-y-2.5">
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span className="flex">
                  <span>{`Rs.${price.toFixed(2)}  `}</span>
                  <span className="mx-2">x</span>
                  <span>{`${quantitySelected} `}</span>
                </span>

                <span>{`$${(price * quantitySelected).toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300">
                <span>Tax estimate</span>
                <span>$0</span>
              </div>
            </div>
            <div className="border-b border-slate-200 dark:border-slate-700"></div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{`$${(price * quantitySelected).toFixed(2)}`}</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  };

  const renderSection1 = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">{name}</h2>
          <div className="flex items-center mt-4 sm:mt-5">
            <a
              href="#reviews"
              className="hidden sm:flex items-center text-sm font-medium "
            >
              <div className="">
                <StarIcon className="w-5 h-5 pb-[1px] text-slate-800 dark:text-slate-200" />
              </div>
              <span className="ml-1.5">
                <span>4.9</span>
                <span className="mx-1.5">·</span>
                <span className="text-slate-700 dark:text-slate-400 underline">
                  142 reviews
                </span>
              </span>
            </a>
            <span className="hidden sm:block mx-2.5">·</span>
            {renderStatus()}

            <div className="ml-auto">
              <LikeSaveBtns />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="block lg:hidden">{renderSectionSidebar()}</div>

        {/*  */}
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
        {/*  */}
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
          panelClassName="p-4 pt-3.5 text-slate-600 text-base dark:text-slate-300 leading-7"
        />
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap !border-b-0 !pb-0">
        <h2 className="text-3xl font-semibold">Product details</h2>
        {/* <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div> */}
        <div className="prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl">
          <p className="text-slate-700 font-normal">
            Apart from usual tooth cleansing, the palpodi is indicated to treat
            45 types of tooth disorders. A miraculous combinations of herbs in
            pal podi magically clears sore throat, sinus, headache, running
            nose, sneezing, improves vision and clears the discolouration of
            facial skin.
          </p>
          <ul className="list-inside leading-7">
            <li>Essential to control plaque of teeth</li>
            <li>Removes odour from teeth</li>
            <li>Brushing your teeth twice a day is good for health</li>
            <li>Enhances Immunity</li>
          </ul>
        </div>
        {/* ---------- 6 ----------  */}
      </div>
    );
  };

  const renderReviews = () => {
    return (
      <div id="reviews" className="scroll-mt-[150px]">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold flex items-center">
          <StarIcon className="w-7 h-7 mb-0.5" />
          <span className="ml-1.5"> 4,87 · 142 Reviews</span>
        </h2>

        {/* comment */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
            <ReviewItem />
            <ReviewItem
              data={{
                comment: `I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. 
                  If you’re unsure which hoodie to pick.`,
                date: "December 22, 2021",
                name: "Stiven Hokinhs",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. 
                Now that it’s colder, my husband wears his all the time. I wear hoodies all the time. `,
                date: "August 15, 2022",
                name: "Gropishta keo",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `Before buying this, I didn't really know how I would tell a "high quality" sweatshirt, but after opening, I was very impressed. 
                The material is super soft and comfortable and the sweatshirt also has a good weight to it.`,
                date: "December 12, 2022",
                name: "Dahon Stiven",
                starPoint: 5,
              }}
            />
          </div>

          <ButtonSecondary
            onClick={() => setIsOpenModalViewAllReviews(true)}
            className="mt-10 border border-slate-300 dark:border-slate-700 "
          >
            Show me all 142 reviews
          </ButtonSecondary>
        </div>
      </div>
    );
  };

  const renderExperts = (item) => {
    return (
      <div
        key={item.id}
        className="bg-slate-100 rounded-3xl grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-4 py-6 px-10 mb-20"
      >
        <div>
          <img
            className="sm:w-full md:w-56 h-auto rounded-2xl"
            src={item.src}
            alt={item.name}
          />
        </div>
        <div className="col-span-3">
          <h3 className="md:text-lg lg:text-2xl font-semibold pt-2">
            {item.name}
          </h3>
          <h4 className="text-zinc-500 font-medium mt-1 mb-2">
            {item.profession}
          </h4>
          <p className="text-sm md:text-md lg:text-lg text-black leading-7">
            {item.content}
          </p>
        </div>
      </div>
    );
  };

  const renderIngredients = (item) => {
    return (
      <div key={item.id}>
        <img className="rounded-2xl " src={item.src} alt={item.title} />
        <div className="grid justify-items-stretch">
          <h5 className="font-semibold justify-self-center text-dark-900 dark:text-white text-2xl mt-2">
            {item.title}
          </h5>
          <p className="justify-self-center text-sm font-semibold text-slate-500 dark:text-white">
            {item.shortDesc}
          </p>
        </div>
      </div>
    );
  };

  const expertTalkItems = [
    {
      id: 1,
      src: Expert,
      name: "Dr.Manikandan B.A.M.S",
      profession: "Ayurveda Doctor, General Medicine",
      content:
        "Was going through post partum hair fall, I was so depressed as no oils were showing result. This was my final hope & honestly it stands true to its benefits. Was going through post partum hair fall, I was so depressed as no oils were showing result. Was going through post partum hair fall, I was so depressed as no oils were showing result. This was my final hope & honestly it stands true to its benefits. Was going through post partum hair fall, I was so depressed as no oils were showing result.",
    },
    {
      id: 2,
      src: Expert,
      name: "Dr.Manikandan B.A.M.S",
      profession: "Ayurveda Doctor, General Medicine",
      content:
        "Was going through post partum hair fall, I was so depressed as no oils were showing result. This was my final hope & honestly it stands true to its benefits. Was going through post partum hair fall, I was so depressed as no oils were showing result. Was going through post partum hair fall, I was so depressed as no oils were showing result. This was my final hope & honestly it stands true to its benefits. Was going through post partum hair fall, I was so depressed as no oils were showing result.",
    },
    {
      id: 3,
      src: Expert,
      name: "Dr.Manikandan B.A.M.S",
      profession: "Ayurveda Doctor, General Medicine",
      content:
        "Was going through post partum hair fall, I was so depressed as no oils were showing result. This was my final hope & honestly it stands true to its benefits. Was going through post partum hair fall, I was so depressed as no oils were showing result. Was going through post partum hair fall, I was so depressed as no oils were showing result. This was my final hope & honestly it stands true to its benefits. Was going through post partum hair fall, I was so depressed as no oils were showing result.",
    },
  ];

  const expertSlideGlideOptions: Glide.Options | any = {
    perView: 1,
    gap: 32,
    bound: true,
    breakpoints: {
      1280: {
        gap: 28,
        perView: 1,
      },
      1279: {
        gap: 20,
        perView: 1,
      },
      1023: {
        gap: 20,
        perView: 1,
      },
      768: {
        gap: 20,
        perView: 1,
      },
      500: {
        gap: 20,
        perView: 1,
      },
    },
  };

  return (
    <div
      className={`ListingDetailPage nc-ProductDetailPage2 ${className}`}
      data-nc-id="ProductDetailPage2"
    >
      {/* SINGLE HEADER */}
      <>
        <header className="container mt-8 sm:mt-10">
          <div className="relative ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
              <div
                className="col-span-2 md:col-span-1 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(0)}
              >
                <NcImage
                  containerClassName="aspect-w-6 aspect-h-8 lg:aspect-h-8 md:absolute md:inset-0"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl"
                  src={LIST_IMAGES_DEMO[0]}
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-40 transition-opacity"></div>
              </div>

              <div
                className="col-span-1 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(1)}
              >
                <NcImage
                  containerClassName="aspect-w-6 aspect-h-8 lg:aspect-h-8"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl"
                  src={LIST_IMAGES_DEMO[1]}
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-40 transition-opacity"></div>
              </div>

              <div
                className="col-span-1 row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
                onClick={() => handleOpenModal(2)}
              >
                <NcImage
                  containerClassName="aspect-w-6 aspect-h-8 lg:aspect-h-8"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl"
                  src={LIST_IMAGES_DEMO[2]}
                />
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-40 transition-opacity"></div>
              </div>
            </div>
            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-white text-slate-500 cursor-pointer hover:bg-slate-200 z-10"
              onClick={() => handleOpenModal(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Show all photos
              </span>
            </div>
          </div>
        </header>
        {/* MODAL PHOTOS */}
        <ModalPhotos
          imgs={LIST_IMAGES_DEMO}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
          uniqueClassName="nc-ProductDetailPage2__modalPhotos"
        />
      </>

      {/* MAIN */}
      <main className="container relative z-10 mt-9 sm:mt-11 flex ">
        {/* CONTENT */}
        <section className="w-full lg:w-3/5 xl:w-2/3 space-y-10 lg:pr-14 lg:space-y-14">
          {renderSection1()}
          {renderSection2()}
        </section>

        {/* SIDEBAR */}
        <aside className="flex-grow">
          <div className="hidden lg:block sticky top-28">
            {renderSectionSidebar()}
          </div>
        </aside>
      </main>
      {/* KEY BENEFITS SECTION */}
      <section className="container mb-10 lg:pb-28 pt-48 space-y-14">
        <div className={`nc-SectionPromo2 ${className}`}>
          <div className="relative flex flex-col lg:flex-row lg:justify-end bg-yellow-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
            {/* <div className="absolute inset-0">
              <img
                className="absolute w-full h-full object-contain dark:opacity-5"
                src={backgroundLineSvg}
                alt="backgroundLineSvg"
              />
            </div> */}

            <div className="lg:w-[50%] max-w-lg relative">
              <p className="font-semibold text-2xl">Key Benefits</p>
              <h2 className="font-semibold text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-2 sm:mt-2 !leading-[1.13] tracking-tight">
                Herbal Tooth Powder
                {/* Special offer <br />
                in kids products */}
              </h2>
              {/* <span className="block mt-6 text-slate-500 dark:text-slate-400">
                Fashion is a form of self-expression and autonomy at a
                particular period and place.
              </span> */}
              <ul className="text-lg list-disc list-inside leading-7 text-yellow-950 mt-3">
                <li>Essential to control plaque of teeth</li>
                <li>Removes odour from teeth</li>
                <li>Brushing your teeth twice a day is good for health</li>
                <li>Enhances Immunity</li>
              </ul>
              <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
                <ButtonPrimary
                  href="/page-search"
                  className="md:px-14 md:py-5 md:text-2xl bg-primary-700 dark:bg-slate-200 dark:text-slate-900"
                >
                  Buy Now
                </ButtonPrimary>
                <span className="self-center">
                  <svg
                    className="w-14 h-14 text-primary-700 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <NcImage
              containerClassName="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]"
              src={benefitsImage}
            />
          </div>
        </div>
      </section>

      {/* KEY INGREDIENTS */}
      <section className="container mb-24 overflow-hidden">
        {/* <h4 className="text-3xl font-semibold mb-10">Key Ingredients</h4>
        <div className="grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {ingredients.map((ing) => (
            <div key={ing.id}>
              <img className="rounded-2xl " src={ing.src} alt={ing.title} />
              <div className="grid justify-items-stretch">
                <h5 className="font-semibold justify-self-center text-dark-900 dark:text-white text-2xl mt-2">
                  {ing.title}
                </h5>
                <p className="justify-self-center text-sm font-semibold text-slate-500 dark:text-white">
                  {ing.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* SLIDER SECTION */}
        <AppSlider
          data={ingredients}
          renderChildren={renderIngredients}
          glideOptions={{
            perView: 4,
            gap: 32,
            bound: true,
            breakpoints: {
              1280: {
                perView: 4,
              },
              1024: {
                gap: 20,
                perView: 4,
              },
              768: {
                gap: 20,
                perView: 3,
              },
              640: {
                gap: 20,
                perView: 1,
              },
              500: {
                gap: 20,
                perView: 1,
              },
            },
          }}
        >
          <Heading fontClass="text-3xl md:text-3xl font-semibold" hasNextPrev>
            Key Ingredients
          </Heading>
        </AppSlider>
        {/* <ButtonSecondary className="border border-slate-300 dark:border-slate-700 md:text-lg md:px-20 md:py-4">
          Show all ingredients
        </ButtonSecondary> */}
      </section>

      {/* EXPERT TALK */}
      <section className="container mb-10 overflow-hidden">
        {/* SLIDER SECTION */}
        <AppSlider
          data={expertTalkItems}
          renderChildren={renderExperts}
          glideOptions={expertSlideGlideOptions}
        >
          <Heading fontClass="text-3xl md:text-3xl font-semibold" hasNextPrev>
            Expert Talk
          </Heading>
        </AppSlider>

        {/* VIDEO */}
        <div
          className="group aspect-w-16 aspect-h-16 sm:aspect-h-9 bg-neutral-800 rounded-3xl overflow-hidden border-4 border-white dark:border-neutral-900 sm:rounded-[50px] sm:border-[10px] z-0"
          title={"expert Meditating"}
        >
          <div className="cursor-pointer absolute inset-0 flex items-center justify-center z-10">
            <img src={videoIcon} alt="icon" />
          </div>
          <NcImage
            containerClassName="absolute inset-0 rounded-3xl overflow-hidden z-0"
            className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300  "
            src={video}
            title={"expert Meditating"}
            alt={"expert Meditating"}
          />
        </div>
      </section>

      {/* OTHER SECTION */}
      <section className="container pb-24 lg:pb-28 mb-10 space-y-14">
        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}
        <h4 className="text-3xl font-semibold mb-10">Customer Reviews</h4>
        {renderReviews()}

        {/* FAQ */}
        <section>
          <h4 className="text-3xl font-semibold mb-10">
            Frequently Asked Questions
          </h4>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <img src={faqImg} alt="FAQ" />
            </div>
            <div className="col-span-2">
              <AccordionInfo />
            </div>
          </div>
        </section>

        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}

        <SectionSliderProductCard
          heading="Related Products"
          subHeading=""
          headingFontClassName="text-3xl font-semibold"
          headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
          data={relatedProducts}
        />
      </section>

      {/* POLICY SECTION */}
      <section className="container mb-20">
        <Policy />
      </section>

      {/* MODAL VIEW ALL REVIEW */}
      <ModalViewAllReviews
        show={isOpenModalViewAllReviews}
        onCloseModalViewAllReviews={() => setIsOpenModalViewAllReviews(false)}
      />
    </div>
  );
};

export default ProductDetailPage2;
function useEffect(
  arg0: () => () => void,
  arg1: (string | React.MutableRefObject<any>)[]
) {
  throw new Error("Function not implemented.");
}
