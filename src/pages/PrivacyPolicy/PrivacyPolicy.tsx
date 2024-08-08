import usePrivacyPolicy from "../../hooks/usePrivacyPolicy";
import Heading from "../../shared/Heading/Heading";

const PrivacyPolicy = () => {
  const { htmlContent, error } = usePrivacyPolicy();

  return (
    <div className="container mx-auto px-4 my-20">
      <Heading desc="">Privacy Policy</Heading>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default PrivacyPolicy;
