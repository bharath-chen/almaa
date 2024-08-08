import { useLocation } from "react-router-dom";
import useTermsAndConditions from "../../hooks/useTermsAndConditions";
import Heading from "../../shared/Heading/Heading";
import { useEffect, useState } from "react";

const TermsAndConditions = () => {
  const location = useLocation();
  const [heading, setHeading] = useState("");
  const { htmlContent, error } = useTermsAndConditions();

  useEffect(() => {
    const paths = [
      { path: "/terms-of-service", heading: "Terms of service" },
      { path: "/terms-of-use", heading: "Terms of use" },
    ];

    const path = paths.find((p) => p.path === location.pathname);
    setHeading(path.heading);
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 my-20">
      <Heading desc="">{heading}</Heading>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default TermsAndConditions;
