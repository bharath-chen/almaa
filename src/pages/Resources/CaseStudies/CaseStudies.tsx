import { FC, useEffect, useState } from "react";
import Heading from "../../../shared/Heading/Heading";
import { useNavigate } from "react-router-dom";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import caseStudyService, {
  ICaseStudy,
} from "../../../services/case-study-service";
import { CanceledError } from "axios";
import CaseStudyCard from "./CaseStudyCard";
import { hideLoader, showLoader } from "../../../features/loader/loaderSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import useMetaTags from "../../../hooks/useMetaTags";
import MetaTags from "../../../shared/MetaTags/MetaTags";

const CaseStudies: FC = () => {
  const { metaTag: metaTagProps } = useMetaTags();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [caseStudies, setCaseStudies] = useState<ICaseStudy[]>([]);
  const [error, setError] = useState("");

  const routeToCaseStudy = (item?: ICaseStudy) => {
    navigate(`/case-studies/${item.url_name}`, {
      state: {
        caseStudy: { ...item },
      },
    });
  };

  useEffect(() => {
    const { request, cancel } = caseStudyService.getAll<
      ICaseStudy,
      { gofor: string }
    >({ gofor: "casestudylist" });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        setCaseStudies(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch(hideLoader());
        setError(err.message);
      });

    return () => cancel();
  }, []);

  return (
    <>
      {/* METATAGS */}
      {metaTagProps && <MetaTags metaTagProps={metaTagProps} />}

      <div className="container my-20">
        <Heading
          className="mb-5 md:mb-5 text-neutral-900 dark:text-neutral-50"
          desc={null}
        >
          Case Studies
        </Heading>
        {/* === SECTION 1 === */}
        <div className="pt-5 pb-16 lg:pb-28">
          <div className="nc-SectionMagazine5">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {caseStudies.map((item, index) => (
                <CaseStudyCard
                  key={item.case_study_id}
                  caseStudy={item}
                  onClick={() => routeToCaseStudy(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </>
  );
};

export default CaseStudies;
