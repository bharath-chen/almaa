import { FC, useState } from "react";
import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import AccordionInfo from "../../../containers/ProductDetailPage/AccordionInfo";
import { useLocation } from "react-router-dom";
import { People } from "../../Library/SectionFounder";

export interface ProductDetailPageProps {
  className?: string;
}

const DoctorDetail: FC<ProductDetailPageProps> = ({ className = "" }) => {
  const { state } = useLocation();

  const [doctorDetails, setDoctorDetails] = useState<People | null>(
    state.doctor
  );

  const handleConnect = () => {
    console.log("Connect!");
  };

  //   const notifyAddTocart = () => {
  //     toast.custom(
  //       (t) => (
  //         <NotifyAddTocart
  //           productImage={LIST_IMAGES_DEMO[0]}
  //           qualitySelected={qualitySelected}
  //           show={t.visible}
  //           sizeSelected={sizeSelected}
  //           variantActive={variantActive}
  //         />
  //       ),
  //       { position: "top-right", id: "nc-product-notify", duration: 3000 }
  //     );
  //   };

  //   const renderStatus = () => {
  //     if (!status) {
  //       return null;
  //     }
  //     const CLASSES =
  //       "absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center text-slate-700 text-slate-900 dark:text-slate-300";
  //     if (status === "New in") {
  //       return (
  //         <div className={CLASSES}>
  //           <SparklesIcon className="w-3.5 h-3.5" />
  //           <span className="ml-1 leading-none">{status}</span>
  //         </div>
  //       );
  //     }
  //     if (status === "50% Discount") {
  //       return (
  //         <div className={CLASSES}>
  //           <IconDiscount className="w-3.5 h-3.5" />
  //           <span className="ml-1 leading-none">{status}</span>
  //         </div>
  //       );
  //     }
  //     if (status === "Sold Out") {
  //       return (
  //         <div className={CLASSES}>
  //           <NoSymbolIcon className="w-3.5 h-3.5" />
  //           <span className="ml-1 leading-none">{status}</span>
  //         </div>
  //       );
  //     }
  //     if (status === "limited edition") {
  //       return (
  //         <div className={CLASSES}>
  //           <ClockIcon className="w-3.5 h-3.5" />
  //           <span className="ml-1 leading-none">{status}</span>
  //         </div>
  //       );
  //     }
  //     return null;
  //   };

  const DEMO_DATA = [
    {
      name: "Experience",
      content:
        "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
    },
    {
      name: "Specialization",
      content: `<ul class="list-disc list-inside leading-7">
      <li>Made from a sheer Belgian power micromesh.</li>
      <li>
      74% Polyamide (Nylon) 26% Elastane (Spandex)
      </li>
      <li>
      Adjustable hook & eye closure and straps
      </li>
      <li>
      Hand wash in cold water, dry flat
      </li>
    </ul>`,
    },
    {
      name: "Highlights",
      content:
        "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
    },
  ];

  const renderSectionContent = () => {
    return (
      <div className="space-y-7 2xl:space-y-8">
        <div className="w-full max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col pl-5 pb-5 mt-5">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white pb-2">
              Name: {doctorDetails.name}
            </h5>
            <span className="text-md text-gray-500 dark:text-gray-400 pb-2">
              Degree: M.B.B.S
            </span>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Designation: General Physician
            </span>
          </div>
        </div>

        {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
        <div className="flex space-x-3.5">
          <ButtonPrimary
            className="flex-1 flex-shrink-0"
            onClick={handleConnect}
          >
            <svg
              className="w-6 h-6 text-gray-800 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"
              />
            </svg>

            {/* <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" /> */}
            <span className="ml-3">Connect</span>
          </ButtonPrimary>
        </div>

        {/* ---------- 5 ----------  */}
        <AccordionInfo data={DEMO_DATA} />
      </div>
    );
  };

  //   const renderDetailSection = () => {
  //     return (
  //       <div className="">
  //         <h2 className="text-2xl font-semibold">Doctor Details</h2>
  //         <div className="prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl mt-7">
  //           <p>
  //             The patented eighteen-inch hardwood Arrowhead deck --- finely
  //             mortised in, makes this the strongest and most rigid canoe ever
  //             built. You cannot buy a canoe that will afford greater satisfaction.
  //           </p>
  //           <p>
  //             The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
  //             1922. Wickett had previously worked for the Old Town Canoe Co from
  //             1900 to 1914. Manufacturing of the classic wooden canoes in Valley
  //             Park, Missouri ceased in 1978.
  //           </p>
  //           <ul>
  //             <li>Regular fit, mid-weight t-shirt</li>
  //             <li>Natural color, 100% premium combed organic cotton</li>
  //             <li>
  //               Quality cotton grown without the use of herbicides or pesticides -
  //               GOTS certified
  //             </li>
  //             <li>Soft touch water based printed in the USA</li>
  //           </ul>
  //         </div>
  //       </div>
  //     );
  //   };

  //   const renderReviews = () => {
  //     return (
  //       <div className="">
  //         {/* HEADING */}
  //         <h2 className="text-2xl font-semibold flex items-center">
  //           <StarIcon className="w-7 h-7 mb-0.5" />
  //           <span className="ml-1.5"> 4,87 · 142 Reviews</span>
  //         </h2>

  //         {/* comment */}
  //         <div className="mt-10">
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
  //             <ReviewItem />
  //             <ReviewItem
  //               data={{
  //                 comment: `I love the charcoal heavyweight hoodie. Still looks new after plenty of washes.
  //                   If you’re unsure which hoodie to pick.`,
  //                 date: "December 22, 2021",
  //                 name: "Stiven Hokinhs",
  //                 starPoint: 5,
  //               }}
  //             />
  //             <ReviewItem
  //               data={{
  //                 comment: `The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie.
  //                 Now that it’s colder, my husband wears his all the time. I wear hoodies all the time. `,
  //                 date: "August 15, 2022",
  //                 name: "Gropishta keo",
  //                 starPoint: 5,
  //               }}
  //             />
  //             <ReviewItem
  //               data={{
  //                 comment: `Before buying this, I didn't really know how I would tell a "high quality" sweatshirt, but after opening, I was very impressed.
  //                 The material is super soft and comfortable and the sweatshirt also has a good weight to it.`,
  //                 date: "December 12, 2022",
  //                 name: "Dahon Stiven",
  //                 starPoint: 5,
  //               }}
  //             />
  //           </div>

  //           <ButtonSecondary
  //             onClick={() => setIsOpenModalViewAllReviews(true)}
  //             className="mt-10 border border-slate-300 dark:border-slate-700 "
  //           >
  //             Show me all 142 reviews
  //           </ButtonSecondary>
  //         </div>
  //       </div>
  //     );
  //   };

  return (
    <div className={`nc-ProductDetailPage ${className}`}>
      {/* MAIn */}
      <main className="container mt-5 lg:mt-11">
        <div className="lg:flex">
          {/* CONTENT */}
          <div className="w-full lg:w-[55%] ">
            {/* HEADING */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-16">
                <img
                  src={doctorDetails.avatar}
                  className="w-full rounded-2xl object-cover"
                  alt={doctorDetails.name}
                />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
            {renderSectionContent()}
          </div>
        </div>

        {/* DETAIL AND REVIEW */}
        <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
          <div className="block xl:hidden">{/* <Policy /> */}</div>

          {/* {renderDetailSection()} */}

          {/* <hr className="border-slate-200 dark:border-slate-700" />

          {renderReviews()} */}

          {/* <hr className="border-slate-200 dark:border-slate-700" /> */}

          {/* OTHER SECTION */}
          {/* <SectionSliderProductCard
            heading="Customers also purchased"
            subHeading=""
            headingFontClassName="text-2xl font-semibold"
            headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
          /> */}

          {/* SECTION */}
          {/* <div className="pb-20 xl:pb-28 lg:pt-14">
            <SectionPromo2 />
          </div> */}
        </div>
      </main>

      {/* MODAL VIEW ALL REVIEW */}
      {/* <ModalViewAllReviews
        show={isOpenModalViewAllReviews}
        onCloseModalViewAllReviews={() => setIsOpenModalViewAllReviews(false)}
      /> */}
    </div>
  );
};

export default DoctorDetail;
