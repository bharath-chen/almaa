import { Helmet } from "react-helmet-async";
import BackgroundSection from "../../../components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "../../../components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "../../Library/SectionHero";
import rightImg from "../../../images/hero-right1.png";
import SectionSliderCategories from "../../../components/SectionSliderCategories/SectionSliderCategories";
import {
  ACCORDION_INFO,
  EXPLORE_SECTION_DATA,
  MEDICAL_CONSULTANTS,
} from "../../../data/home";
import SectionGridMoreExplore from "../../../components/SectionGridMoreExplore/SectionGridMoreExplore";
import Heading from "../../../components/Heading/Heading";
import NcImage from "../../../shared/NcImage/NcImage";
import AccordionInfo from "../../../containers/ProductDetailPage/AccordionInfo";
import whyAlmaaImg from "../../../assets/HOME PAGE/10-why-section.jpg";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";

interface AlmaaGroupProps {
  className?: string;
}

const AlmaaGroups = ({ className = "" }: AlmaaGroupProps) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>Almaa</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="About Almaa Groups."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />
      </div>

      {/* AWARDS & ACCOLADES SECTION */}
      <section className="container mb-40">
        <SectionSliderCategories
          heading="Awards"
          rightDescText="& Accolades"
          data={MEDICAL_CONSULTANTS}
        />
        {/* <ButtonSecondary className="focus:ring-2 focus:ring-offset-2 focus:ring-transparent tracking-tight ml-3 mt-6 md:text-2xl sm:px-14 border sm:py-5 sm:text-dark sm:bg-white-900 sm:hover:bg-white sm:hover:text-primary-900 border border-slate-300 dark:border-slate-700">
          Visit all Doctors
        </ButtonSecondary> */}
      </section>

      {/* OUR COMPANIES SECTIONS */}
      <section className="container mb-40">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection className="bg-neutral-100/70 dark:bg-black/20" />
          <Heading
            className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
            fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
            isCenter
            desc=""
            rightDescText=""
          >
            Our Companies
          </Heading>
          <SectionGridMoreExplore
            data={EXPLORE_SECTION_DATA}
            // className="bg-neutral-100/70 dark:bg-black/20 rounded-2xl px-16 py-20"
          />
        </div>
      </section>

      {/* WHY ALMAA SECTION */}
      <section className="container mb-40">
        <Heading
          className="mb-8"
          rightDescText="Almaa?"
          fontClass="text-2xl md:text-4xl font-bold"
        >
          Why
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <div className="lg:pl-20">
            <NcImage
              className="h-auto object-contain"
              src={whyAlmaaImg}
              alt="Almaa Greatness"
            />
          </div>
          <div>
            <AccordionInfo data={ACCORDION_INFO} />
          </div>
        </div>
      </section>

      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </div>
  );
};

export default AlmaaGroups;
