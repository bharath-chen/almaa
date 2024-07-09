import SectionFounder from "../../../containers/PageAbout/SectionFounder";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import { LayoutGridDemo } from "./LayoutGridDemo";

const Media = () => {
  return (
    <>
      <div className="container my-20">
        <SectionFounder />
      </div>
      <LayoutGridDemo />

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="mt-40">
        <EmailSubscribeSection />
      </section>
    </>
  );
};

export default Media;
