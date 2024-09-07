import { Helmet } from "react-helmet-async";
import BgGlassmorphism from "../../components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "../Library/SectionHero";
import rightImg from "../../images/hero-right1.png";
import SectionPromo2 from "../../components/SectionPromo2";
import SectionSliderCategories from "../../components/SectionSliderCategories/SectionSliderCategories";
import { MEDICAL_CONSULTANTS } from "../../data/home";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import SEO from "../../shared/SEO/SEO";

interface ProductionUnitProps {
  className?: string;
}

const ProductionUnit = ({ className = "" }: ProductionUnitProps) => {
  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      <div
        className={`nc-PageAbout overflow-hidden relative ${className}`}
        data-nc-id="PageAbout"
      >
        {/* SEO */}
        <SEO
          title="Best Siddha Medicine Manufacturers | Siddha Foods Tech & Almaa Herbal Nature"
          description=".With a focus on purity, sustainability, and innovation, we offer a wide range of herbal solutions that cater to various health and wellness needs. Trust Nature’s Essence for reliable and effective herbal products."
          keywords="best siddha medicine manufacturers in tamilnadu, siddha medicine manufacturers in tamilnadu, siddha medicine manufacturers, siddha drug manufacturers, best herbal supplement manufacturers, natural medicine manufacturers"
          canonical="/siddha-medicine-manufacturers"
          robots="INDEX, FOLLOW"
        />

        {/* ======== BG GLASS ======== */}
        <BgGlassmorphism />

        <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
          <SectionHero
            rightImg={rightImg}
            heading="About Us."
            btnText=""
            subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
          />
        </div>

        {/* AWARDS AND CERTIFICATIONS SECTION */}
        <section className="container mb-40">
          <SectionSliderCategories
            heading="Awards"
            rightDescText="& Certfications"
            data={MEDICAL_CONSULTANTS}
          />
        </section>

        {/* ENQUIRE NOW */}
        <section className="container mb-40">
          <SectionPromo2 />
        </section>

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default ProductionUnit;
