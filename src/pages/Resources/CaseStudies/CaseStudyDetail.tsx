import caseStudyService, {
  ICaseStudy,
} from "../../../services/case-study-service";
import AccordionInfo from "../../../containers/ProductDetailPage/AccordionInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { hideLoader, showLoader } from "../../../features/loader/loaderSlice";
import { CanceledError } from "axios";
import MetaTags from "../../../shared/MetaTags/MetaTags";

export interface Props {
  className?: string;
}

const CaseStudyDetail = ({ className = "" }: Props) => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [caseStudyDetail, setCaseStudyDetail] = useState<ICaseStudy>(null);

  function fetchCaseStudy() {
    const { request, cancel } = caseStudyService.get<
      ICaseStudy,
      { gofor: string; url_name: string }
    >({
      gofor: "getcasestudy",
      url_name: params?.title,
    });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        setCaseStudyDetail(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        dispatch(hideLoader());
      });

    return cancel;
  }

  useEffect(() => {
    const cancelGetCaseStudyDetail = fetchCaseStudy();

    return () => cancelGetCaseStudyDetail();
  }, []);

  const renderSectionContent = () => {
    const accordionData = [
      { name: "Case Details", content: caseStudyDetail.case_details },
      { name: "Diagnosis", content: caseStudyDetail.diagnosis },
      { name: "Result", content: caseStudyDetail.result },
    ];

    return (
      <div className="space-y-7 2xl:space-y-8">
        <div className="w-full max-w bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col pl-5 pb-5 mt-5">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white pb-2">
              {caseStudyDetail.title}
            </h5>
            <span
              className="text-md text-gray-500 dark:text-gray-400 pb-2"
              dangerouslySetInnerHTML={{
                __html: caseStudyDetail.description,
              }}
            ></span>
          </div>
        </div>
        <AccordionInfo data={accordionData} />
      </div>
    );
  };

  return (
    <>
      {caseStudyDetail && <MetaTags metaTagProps={caseStudyDetail} />}
      <div className={`nc-ProductDetailPage ${className}`}>
        {/* Main */}
        {caseStudyDetail && (
          <main className="container mt-5 lg:mt-11">
            <div className="lg:flex">
              {/* CONTENT */}
              <div className="w-full lg:w-[55%] ">
                {/* HEADING */}
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-16">
                    <img
                      src={caseStudyDetail.image_url}
                      className="w-full rounded-2xl object-cover"
                      alt={caseStudyDetail.title}
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
        )}
      </div>
    </>
  );
};

export default CaseStudyDetail;
