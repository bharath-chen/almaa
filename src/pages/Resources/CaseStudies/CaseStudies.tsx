import React, { useEffect, useState } from "react";
import Heading from "../../../shared/Heading/Heading";
import { useNavigate } from "react-router-dom";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import caseStudyService, {
  ICaseStudy,
} from "../../../services/case-study-service";
import { CanceledError } from "axios";
import Spinner from "../../../components/Spinner/Spinner";
import CaseStudyCard from "./CaseStudyCard";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../../state/actions/loaderActions";

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [caseStudies, setCaseStudies] = useState<ICaseStudy[]>([]);
  const [error, setError] = useState("");

  const routeToCaseStudy = (item?: ICaseStudy) => {
    navigate("/case-study", {
      state: {
        caseStudy: { ...item },
      },
    });
  };

  useEffect(() => {
    const { request, cancel } = caseStudyService.getAll<ICaseStudy>();

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
      <div className="container my-20">
        <Heading desc="">Case Studies</Heading>
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
          <div className="nc-SectionMagazine5">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {caseStudies.map((item, index) => (
                <CaseStudyCard
                  key={index}
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
