import { Helmet } from "react-helmet-async";
import BackgroundSection from "../../../components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "../../../components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "../../Library/SectionHero";
import rightImg from "../../../images/hero-right1.png";
import SectionSliderCategories from "../../../components/SectionSliderCategories/SectionSliderCategories";
import { ACCORDION_INFO, MEDICAL_CONSULTANTS } from "../../../data/home";
import SectionGridMoreExplore from "../../../components/SectionGridMoreExplore/SectionGridMoreExplore";
import Heading from "../../../components/Heading/Heading";
import NcImage from "../../../shared/NcImage/NcImage";
import AccordionInfo from "../../../containers/ProductDetailPage/AccordionInfo";
import whyAlmaaImg from "../../../assets/HOME PAGE/10-why-section.jpg";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import SEO from "../../../shared/SEO/SEO";
import { ALMAA_GROUP } from "./ALMAA_GROUP";
import exploreImg1 from "../../../assets/HOME PAGE/6-explore-1.png";
import exploreImg2 from "../../../assets/HOME PAGE/6-explore-2.png";
import exploreImg3 from "../../../assets/HOME PAGE/6-explore-3.png";
import exploreImg4 from "../../../assets/HOME PAGE/6-explore-4.png";
import exploreImg5 from "../../../assets/HOME PAGE/6-explore-5.png";
import exploreImg6 from "../../../assets/HOME PAGE/6-explore-6.png";
import medicalConsultant1 from "../../../assets/HOME PAGE/7-doctor-1.jpg";
import medicalConsultant2 from "../../../assets/HOME PAGE/7-doctor-2.jpg";
import medicalConsultant3 from "../../../assets/HOME PAGE/7-doctor-3.jpg";
import medicalConsultant4 from "../../../assets/HOME PAGE/7-doctor-4.jpg";
import mdSectionImg from "../../../assets/HOME PAGE/5-md-section.png";

interface AlmaaGroupProps {
  className?: string;
}

const EXPLORE_SECTION_DATA = [
  {
    id: 1,
    name: "Almaa Herbal",
    desc: "",
    image: exploreImg1,
    svgBg: "",
    color: "bg-indigo-50",
    btnLabel: "Explore Now",
    quantityText: "",
    href: "/doctors-team",
  },
  {
    id: 2,
    name: "Almaa Hospital",
    desc: "",
    image: exploreImg2,
    svgBg: "",
    color: "bg-slate-100/80",
    btnLabel: "Explore Now",
    quantityText: "",
    href: "/wellness-center",
  },
  {
    id: 3,
    name: "Siddha Food Tech",
    desc: "",
    image: exploreImg3,
    svgBg: "",
    color: "bg-violet-50",
    btnLabel: "Explore Now",
    quantityText: "",
    href: "/library",
  },
  {
    id: 4,
    name: "Almaa Therapy Center",
    desc: "",
    image: exploreImg4,
    svgBg: "",
    color: "bg-orange-50",
    btnLabel: "Explore Now",
    quantityText: "",
    href: "/wellness-center",
  },
  {
    id: 5,
    name: "DR'S Siddha",
    desc: "",
    image: exploreImg5,
    svgBg: "",
    color: "bg-blue-50",
    btnLabel: "Explore Now",
    quantityText: "",
    href: "/production-unit",
  },
  {
    id: 6,
    name: "Vela Siddha Village Resort",
    desc: "",
    image: exploreImg6,
    svgBg: "",
    color: "bg-orange-50",
    btnLabel: "Explore Now",
    quantityText: "",
    href: "/blog",
  },
];

const AWARDS_AND_ACCOLADES = [
  {
    name: "YouTube Silver Play Button",
    desc: "",
    img: medicalConsultant1,
    color: "",
  },
  {
    name: "Arogyam Health & Fitness.",
    desc: "",
    img: medicalConsultant2,
    color: "",
  },
  {
    name: "21st Century Millennium Award for Art & Culture.",
    desc: "",
    img: medicalConsultant3,
    color: "",
  },
  {
    name: "International Ayush Natural Award.",
    desc: "",
    img: medicalConsultant4,
    color: "",
  },
];

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

      <section className="container mt-20 mb-40">
        <div className={`nc-SectionPromo2`}>
          <div className="relative flex flex-col justify-center lg:flex-row lg:justify-end bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
            <div className="lg:w-[55%] max-w-lg relative lg:top-14">
              <h2 className="text-2xl tracking-normal font-medium">
                Almaa Groups
              </h2>
              <div className="block mt-6">
                <ul className="pl-5 leading-relaxed dashed list-inside leading-7 text-md text-slate-500 dark:text-slate-400">
                  <li>
                    Founded by the esteemed Naturalist & Tamizh entrepreneur
                    Thiru.Sindhanai Sitthar Velayudham avargal.{" "}
                  </li>
                  <li>
                    Almaa is a pioneer in the traditional medicine sector. The
                    prime motto behind the organisation is to provide quality &
                    affordable indigenous medicines to the Tamil community &
                    world. The need for quality Siddha medicines, user-friendly
                    traditional medicines & most importantly side effect-free
                    natural medicines has helped us grow immensely.{" "}
                  </li>
                  <li>
                    The quality of care, quality of medicines & quality of
                    service to the people have created trust for us among the
                    masses.
                  </li>
                  <li>
                    Word-of-mouth advertisements from people have given us a
                    huge boost to start our branches all over Tamilnadu and soon
                    all over India.
                  </li>
                  <li>
                    The richness of our cultural heritage throughout Asia gave
                    us a successful & firm l foot in Malaysia, Singapore and
                    other countries.
                  </li>
                  <li>
                    Through almaa groups, you can experience the harmony of
                    body, mind, and spirit with our range of wellness solutions
                    inspired by ancient traditions & delivered through modern
                    technology.
                  </li>
                  <li>
                    We have a range of services starting from the Outpatient
                    Department, Inpatient Treatment Facility, Daycare therapy
                    centres & 5-star category Wellness resorts.
                  </li>
                </ul>
              </div>
            </div>

            <NcImage
              containerClassName="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]"
              src={mdSectionImg}
              alt="Almaa Groups Founder"
            />
          </div>
        </div>
      </section>
      {/* AWARDS & ACCOLADES SECTION */}
      <section className="container mb-40">
        <SectionSliderCategories
          heading="Awards"
          rightDescText="& Accolades"
          data={AWARDS_AND_ACCOLADES}
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
