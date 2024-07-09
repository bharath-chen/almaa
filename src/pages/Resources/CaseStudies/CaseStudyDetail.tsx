import ButtonPrimary from "../../../shared/Button/ButtonPrimary";
import AccordionInfo from "../../../containers/ProductDetailPage/AccordionInfo";
import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

export interface Props {
  className?: string;
}

const CaseStudyDetail = ({ className = "" }: Props) => {
  const { state } = useLocation();

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
              Name: {state.doctor.name}
            </h5>
            <span className="text-md text-gray-500 dark:text-gray-400 pb-2">
              Degree: {state.doctor.degree}
            </span>
            <span className="text-md text-gray-500 dark:text-gray-400">
              Designation: {state.doctor.designation}
            </span>
          </div>
        </div>
        {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
        {/* <div className="flex space-x-3.5">
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
            <span className="ml-3">Connect</span>
          </ButtonPrimary>
        </div> */}
        {/* ---------- 5 ----------  */}
        <AccordionInfo data={DEMO_DATA} />
      </div>
    );
  };

  return (
    <div className={`nc-ProductDetailPage ${className}`}>
      {/* Main */}
      <main className="container mt-5 lg:mt-11">
        <div className="lg:flex">
          {/* CONTENT */}
          <div className="w-full lg:w-[55%] ">
            {/* HEADING */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-16">
                <img
                  src={state.doctor.src}
                  className="w-full rounded-2xl object-cover"
                  alt={"Test"}
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
        </div>
      </main>
    </div>
  );
};

export default CaseStudyDetail;
