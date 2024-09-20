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
import SEO from "../../shared/SEO/SEO";
import { WELLNESS_CENTER } from "../../data/WELLNESS_CENTER";
import mdSectionImg from "../../assets/HOME PAGE/5-md-section.png";

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
        {/*SEO*/}
        <SEO
          title="Vela Siddha Village Resort | Rejuvenation Resort & Therapy"
          description="Embrace the Serenity of Siddha Medicine and Modern Wellness | Wellness Treatments and Retreats | Luxurious Accommodations | Siddha Medical Treatments "
          keywords="vela siddha village resort, heritage village resort & spa, rejuvenation therapy, rejuvenation resort"
          canonical="/wellness-centre"
          robots="INDEX, FOLLOW"
        />

        {/* NATURE AND SINDHANAI SIDDHAR SECTION */}
        <section className="container mt-40 mb-40">
          <SectionFounder
            heading="Vela Siddha Village Resorts - Epitome Of Preventive Health"
            desc="Integrated Preventive Health care with the Amalgamation of Classical Siddha Principles, traditional architecture and One noble cause of “Health for All” "
            // founders={FOUNDER_DEMO}
          />
        </section>

        {/* MD SECTION */}
        <section className="container mb-40">
          <div className={`nc-SectionPromo2`}>
            <div className="relative flex flex-col justify-center lg:flex-row lg:justify-end bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
              <div className="lg:w-[55%] max-w-lg relative lg:top-14">
                <h2 className="text-2xl tracking-normal font-bold">
                  Sindhanai Sitthar Almaa Velayudham
                </h2>
                <div className="block mt-6">
                  <ul className="pl-5 leading-relaxed dashed list-inside leading-7 text-md text-slate-500 dark:text-slate-400">
                    <li>
                      Spanning over an area of 11 acres, with the Javadhu Malai
                      foothills as its natural boundary Vela Siddha Village
                      Resort is truly a Magnanimous Site for Health &
                      rejuvenation. The smell of the fresh air with the breeze
                      makes this place a divine destination for holistic health
                      Care.
                    </li>
                    <li>
                      Not a Treatment but a lifestyle - Health starts from
                      within ourselves. The ability to tackle our lethargy and
                      make ours is a trick that we can easily learn from here.
                      The Rejuvenation mind helps the body and the rejuvenation
                      of the body helps the mind. The relatability of the
                      Mind-body's health axis and the alignment are the prime
                      factors responsible for health & Vela Siddha Villag
                      Resorts Makes sure that it is taken care of.
                    </li>
                    <li>
                      Food thy Medicine; உணவே மருந்து - From Thiruvalluvar to
                      agathiyar and even the father of modern medicine
                      Hippocrates himself has agreed on to the Importance of
                      Quality and nutrient food for the sustenance of life. You
                      cannot feast but can essentially learn what to cook when
                      to cook & how to cook to be disease-free from Vela Siddha
                      village resorts.
                    </li>
                  </ul>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-5 my-5">
                  <Button className="bg-primary-900 text-white sm:text-white sm:bg-primary-900 sm:hover:bg-white sm:hover:text-primary-900 shadow-xl dark:bg-slate-200 dark:text-slate-900 mb-3 md:m-0">
                    Watch Video{" "}
                    <span className="ml-3 p-1 bg-green-400 rounded-full">
                      <svg
                        className="w-5 h-5 text-primary-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Button>
                  <Button className="bg-primary-900 text-white sm:text-white sm:bg-primary-900 sm:hover:bg-white sm:hover:text-primary-900 shadow-xl dark:bg-slate-200 dark:text-slate-900">
                    Listen Audio
                    <span className="ml-3 p-1 bg-green-400 rounded-full">
                      <svg
                        className="w-5 h-5 text-primary-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 6a2 2 0 0 0-3.3-1.5l-4 3.4H4a2 2 0 0 0-2 2V14c0 1.2.9 2 2 2h1.6l4.1 3.5A2 2 0 0 0 13 18V6Z" />
                        <path
                          fillRule="evenodd"
                          d="M14.8 7.7a1 1 0 0 1 1.4 0 6.1 6.1 0 0 1 0 8.6 1 1 0 0 1-1.3 0 1 1 0 0 1 0-1.5 4 4 0 0 0-.1-5.7 1 1 0 0 1 0-1.4Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M17.7 4.8a1 1 0 0 1 1.4 0 10.2 10.2 0 0 1 0 14.4 1 1 0 0 1-1.4 0 1 1 0 0 1 0-1.4 8.2 8.2 0 0 0 0-11.6 1 1 0 0 1 0-1.4Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Button>
                </div>
                <div className="pl-3">
                  <h3 className="font-bold text-xl sm:text-3xl mt-2 sm:mt-2 !leading-[1.13] tracking-tight">
                    Almaa Velayudham
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Founder & Chairman
                  </p>
                  <p className="text-slate-600 font-medium">Almaa Groups</p>
                </div> */}
              </div>

              <NcImage
                containerClassName="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]"
                src={mdSectionImg}
                alt="Almaa Groups Founder"
              />
            </div>
          </div>
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
        <section className="container mb-40">
          <Heading className="mb-8" fontClass="text-2xl md:text-4xl font-bold">
            FAQ
          </Heading>
          <div className="grid grid-cols-1 gap-4 place-content-center">
            <div>
              <AccordionInfo data={WELLNESS_CENTER.faq} />
            </div>
          </div>
        </section>

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
