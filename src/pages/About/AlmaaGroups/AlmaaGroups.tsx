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
import SEO from "../../../shared/SEO/SEO";
import { ALMAA_GROUP } from "./ALMAA_GROUP";

interface AlmaaGroupProps {
  className?: string;
}

const AlmaaGroups = ({ className = "" }: AlmaaGroupProps) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      {/* SEO */}
      <SEO
        title="About Us - Unveiling the Siddha Wisdom: The Almaa Journey"
        description="Embark on the journey of Siddha wisdom with Almaa, your trusted source for holistic healing online."
        keywords="siddha doctor online, siddha medicine online, siddha products online"
        canonical="/about-us"
        robots="INDEX, FOLLOW"
      />

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <h1 className="font-bold lg:text-5xl md:text-4xl text-2xl">
          Our Story: Unveiling Almaa's Heritage in Siddha Medicine Online
        </h1>
        <SectionHero
          rightImg={rightImg}
          heading={null}
          btnText=""
          subHeading="Sindhanai Sitthar Thiru. M.G.L. Velayudham Avargal has started the Almaa Herbal Nature Pvt.Ltd with the motto of introducing the Siddha System of Medicine into every Household in Tamil Nadu & all around the world. The Siddha system has a large potential to cure diseases and maintain health. He aimed to Increase the Quality & Standards of Siddha medicine to compete with Global Standards.
Where contemporary medicine was just to alleviate symptoms, he saw the curing capacity of Siddha medicine and its need around the world. He thought Siddha medicine through Online medium was a powerful tool to showcase the power of Tamil traditional medicine to the world. We Are Offering Online Consultations with Siddha doctors through our portal. "
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
          rightDescText="Medicine"
          fontClass="text-2xl md:text-4xl font-bold"
        >
          Why Siddha
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
            <AccordionInfo data={ALMAA_GROUP.accordionData} />
          </div>
        </div>
      </section>
      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </div>
  );
};

export default AlmaaGroups;
