import rightImg from "../../assets/06-Library/About.png";
import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import BgGlassmorphism from "../../components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "./SectionHero";
import AppSlider from "../../components/AppSlider/AppSlider";
import Heading from "../../components/Heading/Heading";
import {
  ACCORDION_INFO,
  MEDICAL_CONSULTANTS,
  MEDIC_SLIDERS,
} from "../../data/home";
import CardCategory3 from "../../components/CardCategories/CardCategory3";
import Button from "../../shared/Button/Button";
import NcImage from "../../shared/NcImage/NcImage";
import uyirvazhiImg from "../../assets/06-Library/Uyirvazhi.png";
import SectionSliderCategories from "../../components/SectionSliderCategories/SectionSliderCategories";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import unavumVazhvumImg from "../../assets/06-Library/Our Books/Unavum Vazhvum.jpg";
import keeraiIlaUnavuImg from "../../assets/06-Library/Our Books/Keerai illa Unavu.jpg";
import pillaiPeruImg from "../../assets/06-Library/Our CDs/Pillai Peru.jpg";
import sugarImg from "../../assets/06-Library/Our CDs/Sugar.jpg";
import unavaeUyirImg from "../../assets/06-Library/Our CDs/Unave Uyir.jpg";
import whyAlmaaImg from "../../assets/HOME PAGE/10-why-section.jpg";
import AccordionInfo from "../../containers/ProductDetailPage/AccordionInfo";

export interface PageAboutProps {
  className?: string;
}

const OUR_BOOKS = [
  {
    name: "Unavum Vazhvum",
    desc: "",
    img: unavumVazhvumImg,
    color: "",
  },
  {
    name: "Keerai illa Unavu",
    desc: "",
    img: keeraiIlaUnavuImg,
    color: "",
  },
];

const OUR_CDS = [
  {
    name: "Pillai Peru",
    desc: "",
    img: pillaiPeruImg,
    color: "",
  },
  {
    name: "Nlamudan Vaazha",
    desc: "",
    img: sugarImg,
    color: "",
  },
  {
    name: "Unave Uyir",
    desc: "",
    img: unavaeUyirImg,
    color: "",
  },
];

const OUR_LIBRARY = [
  {
    name: "Featured Articles",
    content: `In-depth essays on herbal medicine &amp; health. Renowned Siddha Doctors Featured
artilces o every aspect of health`,
  },
  {
    name: "Editorials",
    content: `Sindhanai Siththar Velayudhams special perspective on health & well being`,
  },
  {
    name: "News and Updates",
    content: `Current events or trends within the health&amp; siddha department`,
  },
];

const Library: FC<PageAboutProps> = ({ className = "" }) => {
  const renderCategoryCard = (item: {
    name: string;
    desc: string;
    featuredImage: string;
    color: string;
  }) => {
    return (
      <CardCategory3
        name={item.name}
        desc={item.desc}
        featuredImage={item.featuredImage}
        color={item.color}
        btnText="View Products"
        href="/products"
      />
    );
  };

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
          heading="Library"
          btnText=""
          subHeading="Welcome to our comprehensive library, where we bring together a wealth of knowledge on holistic
health practices, traditional wisdom, and modern trends. Explore Siddha therapies, herbal remedies,
and medicinal innovations that merge ancient traditions with contemporary advancements. Stay
informed with the latest health news and emerging trends in wellness to make well-rounded,
informed decisions for your well-being.
"
        />
        {/* WHY SHOULD YOU BE WITH ALMA SECTION */}
        <section className="mb-40">
          <Heading
            className="mb-8"
            rightDescText=""
            fontClass="text-2xl md:text-4xl font-bold"
          >
            Our Resources
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
              <AccordionInfo data={OUR_LIBRARY} />
            </div>
          </div>
        </section>
        {/* <SectionFounder /> */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div> */}

        {/* <SectionStatistic /> */}

        {/* <SectionPromo3 /> */}
      </div>
      {/* EXPLORE PRODUCTS BY MEDICAL CONDITIONS SECTION */}
      <section className="mb-40">
        {/* <AppSlider
          className="nc-DiscoverMoreSlider nc-p-l-container "
          data={MEDIC_SLIDERS}
          renderChildren={renderCategoryCard}
        > */}
        {/* <Heading
          className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
          // rightDescText="by Medical Conditions"
          // hasNextPrev
        >
          Our Resources
        </Heading> */}
        {/* </AppSlider> */}
      </section>

      {/* UYIRVAZHI MONTHLY MAGAZINE SECTION */}
      <section className="container mb-40">
        {/* <Heading
          className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
          rightDescText=""
          // hasNextPrev
        >
          Uyirvazhi
        </Heading> */}
        <div className={`nc-SectionPromo2`}>
          <div className="relative flex flex-col justify-center lg:flex-row lg:justify-end bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
            <div className="lg:w-[55%] max-w-lg relative lg:top-14">
              {/* <h2 className="text-2xl tracking-normal font-medium">
                Let's Understand
              </h2> */}
              <h3 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-2 sm:mt-2 !leading-[1.13] tracking-tight">
                Uyirvazhi
              </h3>
              <div className="block mt-6">
                <ul className="pl-5 leading-relaxed dashed list-inside leading-7 text-md text-slate-500 dark:text-slate-400">
                  <li>
                    Welcome to Uyrivazhi, your trusted source for holistic
                    health and wellness! Our magazine is dedicated to empowering
                    you with the latest insights on herbal remedies, natural
                    healing, and balanced living. Featuring expert advice from
                    seasoned doctors and health professionals, we aim to educate
                    and inspire readers to embrace a healthier lifestyle. From
                    ancient medicinal practices to cutting-edge wellness trends,
                    we bring you well-researched articles, practical tips, and
                    personal stories to support your journey toward optimal
                    well-being. Stay informed, stay healthy, and discover the
                    power of nature’s wisdom
                  </li>
                  <li>Yearly Subscription : Rs. 360</li>
                  <li>5 year Subscription : Rs. 1500</li>
                  <li>Life Time Subscription : Rs. 3000</li>
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
                <p className="text-slate-600 font-medium">Founder & Chairman</p>
                <p className="text-slate-600 font-medium">Almaa Groups</p>
              </div> */}
            </div>

            <NcImage
              containerClassName="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(50%-40px)]"
              src={uyirvazhiImg}
              alt="Almaa Groups Founder"
            />
          </div>
        </div>
      </section>

      {/* OUR BOOKS SECTION */}
      <section className="container mb-40">
        <SectionSliderCategories heading="Our Books" data={OUR_BOOKS} />
        {/* <ButtonSecondary className="focus:ring-2 focus:ring-offset-2 focus:ring-transparent tracking-tight ml-3 mt-6 md:text-2xl sm:px-14 border sm:py-5 sm:text-dark sm:bg-white-900 sm:hover:bg-white sm:hover:text-primary-900 border border-slate-300 dark:border-slate-700">
          Visit all Doctors
        </ButtonSecondary> */}
      </section>

      {/* OUR CDS SECTION */}
      <section className="container mb-40">
        <SectionSliderCategories heading="Our CDS" data={OUR_CDS} />
        {/* <ButtonSecondary className="focus:ring-2 focus:ring-offset-2 focus:ring-transparent tracking-tight ml-3 mt-6 md:text-2xl sm:px-14 border sm:py-5 sm:text-dark sm:bg-white-900 sm:hover:bg-white sm:hover:text-primary-900 border border-slate-300 dark:border-slate-700">
          Visit all Doctors
        </ButtonSecondary> */}
      </section>

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="mt-40">
        <EmailSubscribeSection />
      </section>
    </div>
  );
};

export default Library;
