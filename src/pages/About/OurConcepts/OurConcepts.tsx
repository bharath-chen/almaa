import { useState } from "react";
import BackgroundSection from "../../../components/BackgroundSection/BackgroundSection";
import Heading from "../../../components/Heading/Heading";
import SectionGridMoreExplore from "../../../components/SectionGridMoreExplore/SectionGridMoreExplore";
import ConceptDetailPopup from "./ConceptDetailPopup";
import { EXPLORE_SECTION_DATA } from "../../../data/home";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import MetaTags from "../../../shared/MetaTags/MetaTags";
import useMetaTags from "../../../hooks/useMetaTags";

const OurConcepts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [conceptData] = useState({
    image: "concept-image.jpg",
    title: "Sustainable Living",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus dictum odio at eleifend. Donec interdum nibh nec eros accumsan, eu pharetra nisi vehicula. Sed porttitor ullamcorper velit, at venenatis velit suscipit eget. Nulla facilisi. Sed lacinia libero at fringilla maximus.",
    contactInfo:
      "For more information, contact us at example@example.com or call +1234567890.",
  });
  const { metaTag: metaTagProps } = useMetaTags();

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="container my-20">
      {/* METATAGS */}
      {metaTagProps && <MetaTags metaTagProps={metaTagProps} />}

      {/* EXPLORE SECTIONS */}
      <section className="container mb-40">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection className="bg-neutral-100/70 dark:bg-black/20" />
          <Heading
            className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
            fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
            isCenter
            desc=""
            rightDescText="Concepts"
          >
            Almaa Siddha
          </Heading>
          <SectionGridMoreExplore data={EXPLORE_SECTION_DATA} />
        </div>
      </section>
      {showPopup && (
        <ConceptDetailPopup concept={conceptData} onClose={handleClose} />
      )}
      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </div>
  );
};

export default OurConcepts;
