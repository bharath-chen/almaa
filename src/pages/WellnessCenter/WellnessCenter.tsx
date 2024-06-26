import { Helmet } from "react-helmet-async";
import AppSlider from "../../components/AppSlider/AppSlider";
import BgGlassmorphism from "../../components/BgGlassmorphism/BgGlassmorphism";
import Heading from "../../components/Heading/Heading";
import NcImage from "../../shared/NcImage/NcImage";
import SectionHero from "../Library/SectionHero";
import rightImg from "../../images/hero-right1.png";
import { IMAGE_SCROLL_VIDEOS } from "../../data/production-unit";
import AccordionInfo from "../../containers/ProductDetailPage/AccordionInfo";
import { ACCORDION_INFO } from "../../data/home";
import whyAlmaaImg from "../../assets/HOME PAGE/10-why-section.jpg";
import SectionPromo2 from "../../components/SectionPromo2";

interface WellnessCenterProps {
  className?: string;
}

const WellnessCenter = ({ className = "" }: WellnessCenterProps) => {
  const renderHealthAndLifestyleCard = (item: {
    id: number;
    src: string;
    heading: string;
  }) => {
    return (
      <div className="grid grid-cols-1 gap-3 w-full">
        <div className="flex flex-col">
          <NcImage
            className="rounded-[30px] object-contain w-full h-auto"
            src={item.src}
            alt={item.heading}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-PageHome2 relative overflow-hidden">
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
            heading="About Us."
            btnText=""
            subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
          />
        </div>

        {/* HEALTHY AND LIFESTYLE VIDEOS SECTION */}
        <section className="container mb-40">
          <AppSlider
            data={IMAGE_SCROLL_VIDEOS}
            className="glidejs_rb_ flow-root glide--swipeable glide--ltr glide--slider"
            glideClassName="glide__track"
            renderChildren={renderHealthAndLifestyleCard}
            glideOptions={{
              perView: 3,
              gap: 32,
              bound: true,
              breakpoints: {
                1280: {
                  perView: 3,
                },
                1024: {
                  gap: 20,
                  perView: 3,
                },
                768: {
                  gap: 20,
                  perView: 2,
                },
                640: {
                  gap: 20,
                  perView: 1,
                },
                500: {
                  gap: 20,
                  perView: 1,
                },
              },
            }}
            itemWrapperClassName="w-full"
          >
            <Heading
              className="mb-8"
              fontClass="text-2xl md:text-4xl font-bold"
              rightDescText="Videos"
              hasNextPrev
            >
              Health & Lifestyle
            </Heading>
          </AppSlider>
        </section>

        {/* FAQ */}
        <section className="container mb-40">
          <Heading className="mb-8" fontClass="text-2xl md:text-4xl font-bold">
            FAQ
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

        {/* ENQUIRE NOW */}
        <section className="container mb-40">
          <SectionPromo2 />
        </section>
      </div>
    </div>
  );
};

export default WellnessCenter;
