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
import SectionFounder, { People } from "../Library/SectionFounder";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";

interface WellnessCenterProps {
  className?: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Niamh O'Shea`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: `Danien Jame`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: `Orla Dwyer`,
    job: "Co-founder, Chairman",
    avatar:
      "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: `Dara Frazier`,
    job: "Co-Founder, Chief Strategy Officer",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "5",
    name: `Niamh O'Shea`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "6",
    name: `Danien Jame`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "7",
    name: `Orla Dwyer`,
    job: "Co-founder, Chairman",
    avatar:
      "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "8",
    name: `Dara Frazier`,
    job: "Co-Founder, Chief Strategy Officer",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  },
];

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

        {/* NATURE AND SINDHANAI SIDDHAR SECTION */}
        <section className="container mt-40 mb-40">
          <SectionFounder
            heading="	Nature & Sindhanai Siddhar"
            founders={FOUNDER_DEMO}
          />
        </section>

        {/* ======== BG GLASS ======== */}
        {/* <BgGlassmorphism /> */}

        {/* <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
          <SectionHero
            rightImg={rightImg}
            heading="About Us."
            btnText=""
            subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
          />
        </div> */}

        {/* HEALTHY AND LIFESTYLE VIDEOS SECTION */}
        {/* <section className="container mb-40">
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
        </section> */}

        {/* FAQ */}
        {/* <section className="container mb-40">
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
        </section> */}

        {/* ENQUIRE NOW */}
        {/* <section className="container mb-40">
          <SectionPromo2 />
        </section> */}

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default WellnessCenter;
