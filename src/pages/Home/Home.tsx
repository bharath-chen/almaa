import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/HOME PAGE/1-slider-image.jpg";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import aboutSectionImg from "../../assets/HOME PAGE/2-about-section.jpg";
import whyAlmaaImg from "../../assets/HOME PAGE/10-why-section.jpg";
import certification1Img from "../../assets/HOME PAGE/11-certificates.jpg";
import Heading from "../../components/Heading/Heading";
import CardCategory3 from "../../components/CardCategories/CardCategory3";
import AccordionInfo from "../../containers/ProductDetailPage/AccordionInfo";
import NcImage from "../../shared/NcImage/NcImage";
import SectionClientSay from "../../components/SectionClientSay/SectionClientSay";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionMagazine5 from "../../containers/BlogPage/SectionMagazine5";
import SectionSliderCategories from "../../components/SectionSliderCategories/SectionSliderCategories";
import SectionGridMoreExplore from "../../components/SectionGridMoreExplore/SectionGridMoreExplore";
import Button from "../../shared/Button/Button";
import mdSectionImg from "../../assets/HOME PAGE/5-md-section.png";
import Nav from "../../shared/Nav/Nav";
import NavItem from "../../shared/NavItem/NavItem";
import productsService from "../../services/products-service";
import ProductCard from "../../components/ProductCard";
import emailSubscribeImg from "../../assets/HOME PAGE/14-subscribe.png";
import saveAndExploreImg from "../../assets/HOME PAGE/12-save-section.png";
import AppSlider from "../../components/AppSlider/AppSlider";
import { Product } from "../../data/data";
import {
  ABOUTS,
  MEDIC_SLIDERS,
  CATEGORY_SLIDERS,
  ACCORDION_INFO,
  MEDICAL_CONSULTANTS,
  TABS,
  EXPLORE_SECTION_DATA,
  LIFE_STYLE_CARDS,
} from "../../data/home";
import { motion } from "framer-motion";

export const pageAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const Home = () => {
  const navigate = useNavigate();

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

  const renderHealthAndLifestyleCard = (item: {
    id: number;
    src: string;
    heading: string;
    categoryType: string;
    dateAdded: string;
  }) => {
    return (
      <div className="grid grid-cols-1 gap-3 w-full">
        <div className="flex flex-col">
          <NcImage
            className="rounded-[30px] object-contain w-full h-auto"
            src={item.src}
            alt={item.heading}
          />
          <div>
            <h2 className="px-2 w-full font-semibold mt-3 mb-2">
              {item.heading}
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-between gap-5 px-2">
              <div className="flex flex-col">
                <div className="text-sm rounded-lg text-green-500 border border-green-500 py-1 px-2 flex-grow">
                  {item.categoryType}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-stretch text-sm text-slate-500">
                  <span>
                    <svg
                      className="w-6 h-6 text-slate-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                  </span>
                  <span
                    className="self-center"
                    dangerouslySetInnerHTML={{ __html: item.dateAdded }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [tabActive, setTabActive] = useState("Best Sellers");

  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = productsService.getAllProducts().slice(0, 4);
    setFeaturedProducts(products);
  }, []);

  return (
    <motion.main
      className="relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={pageAnimation}
      transition={{
        ease: "linear",
        duration: 0.3,
        y: { duration: 0.3 },
        delay: 0.3,
      }}
    >
      {/* HERO SECTION */}
      <section className="w-full mb-20">
        <div className="nc-PageHome relative overflow-hidden">
          <NcImage
            src={heroImg}
            alt="Hero Img"
            className="w-full h-auto object-cover"
          />
          <div
            className={
              "container absolute top-1/2 md:top-[40%] md:left-[15%] lg:top-[40%] lg:left-[17%] transform -translate-y-1/2 text-white text-center md:text-left "
            }
          >
            <h2 className="text-sm md:text-2xl lg:text-4xl font-semibold leading-7 tracking-wide">
              Live a Healthy Life with Siddha
            </h2>
            <h3 className="text-2xl md:text-4xl lg:text-7xl mt-3 md:mt-6 md:mb-3 sm:mb-2 font-thin">
              <span className="pacifico-regular">Herbal for a</span> <br />
              <span className="font-bold">HEALTHY WELLBEING</span>
            </h3>
            <ButtonSecondary
              onClick={() => navigate("/products")}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-transparent md:my-6 lg:my-10 text-xs md:px-8 md:py-5 xl:px-24"
            >
              Explore Now
            </ButtonSecondary>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="container mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <div>
            <h3 className="text-2xl xl:text-3xl font-semibold">
              Take Care of you <span className="text-slate-400">in a</span>{" "}
              <br />
              <span className="my-2 text-slate-400">Herbal Way ...</span>
            </h3>
            <p className="mt-1 text-slate-400 leading-7 tracking-wide text-sm md:text-md xl:text-lg text-justify">
              Almaa acknowledges, abides and acts upon the principles and
              provides right treatment for universal diseases with herbal
              products as food supplementary, while pharmaceutical companies
              extract active ingredients from plants and sell them as drugs, the
              benefits of medicinal plants which cannot be replicated because of
              their synergistic combination of hundreds of naturally occuring
              phytochemicals that cannot be produced in laboratories.
            </p>
          </div>
          <div>
            <NcImage
              className="w-full h-full object-contain lg:object-cover"
              src={aboutSectionImg}
              alt="about almaa"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {ABOUTS.map((about) => (
            <div className="p-4 bg-slate-100 rounded-lg" key={about.id}>
              <h4 className="text-lg font-semibold mb-1">{about.label}</h4>
              <p className="text-xs md:text-sm text-gray-400">
                {about.descripiton}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLORE PRODUCTS BY MEDICAL CONDITIONS SECTION */}
      <section className="mb-40">
        <AppSlider
          className="nc-DiscoverMoreSlider nc-p-l-container "
          data={MEDIC_SLIDERS}
          renderChildren={renderCategoryCard}
        >
          <Heading
            className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
            rightDescText="by Medical Conditions"
            hasNextPrev
          >
            Explore Products
          </Heading>
        </AppSlider>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="container mb-40">
        <Heading className="mb-10" rightDescText="Products">
          Featured
        </Heading>
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
        >
          {TABS.map((item, index) => (
            <NavItem
              key={index}
              isActive={tabActive === item}
              onClick={() => setTabActive(item)}
            >
              {item}
            </NavItem>
          ))}
        </Nav>
        <hr className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>

      {/* MD SECTION */}
      <section className="container mb-40">
        <div className={`nc-SectionPromo2`}>
          <div className="relative flex flex-col justify-center lg:flex-row lg:justify-end bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
            <div className="lg:w-[55%] max-w-lg relative lg:top-14">
              <h2 className="text-2xl tracking-normal font-medium">
                Let's Understand
              </h2>
              <h3 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-2 sm:mt-2 !leading-[1.13] tracking-tight">
                Siddhargal &<br />
                Siddha Medicine
              </h3>
              <div className="block mt-6">
                <ul className="pl-5 leading-relaxed dashed list-inside leading-7 text-xl text-slate-500 dark:text-slate-400">
                  <li>2000 Years Tradition</li>
                  <li>100% Scientific</li>
                  <li>Solutions for 4448 diseases</li>
                  <li>Completely written in Tamil literature</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-5 my-5">
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
            Explore Almaa's
          </Heading>
          <SectionGridMoreExplore
            data={EXPLORE_SECTION_DATA}
            // className="bg-neutral-100/70 dark:bg-black/20 rounded-2xl px-16 py-20"
          />
        </div>
      </section>

      {/* MEDICAL CONSULTATIONS SECTION */}
      <section className="container mb-40">
        <SectionSliderCategories
          heading="Almaa's"
          rightDescText="Medical Consultants"
          data={MEDICAL_CONSULTANTS}
        />
        <ButtonSecondary className="focus:ring-2 focus:ring-offset-2 focus:ring-transparent tracking-tight ml-3 mt-6 md:text-2xl sm:px-14 border sm:py-5 sm:text-dark sm:bg-white-900 sm:hover:bg-white sm:hover:text-primary-900 border border-slate-300 dark:border-slate-700">
          Visit all Doctors
        </ButtonSecondary>
      </section>

      {/* EXPLORE PRODUCTS BY CATEGORIES SECTION  */}
      <section className="mb-40">
        <AppSlider
          data={CATEGORY_SLIDERS}
          className="nc-DiscoverMoreSlider nc-p-l-container "
          renderChildren={renderCategoryCard}
        >
          <Heading
            className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
            rightDescText="by Categories"
            hasNextPrev
          >
            Explore Products
          </Heading>
          {/* <Heading
            className={heading.classNames}
            desc={heading.desc}
            rightDescText={heading.rightDescText}
            hasNextPrev
            fontClass={heading.fontClass}
          >
            {heading.text}
          </Heading> */}
        </AppSlider>
      </section>

      {/* HEALTHY AND LIFESTYLE VIDEOS SECTION */}
      <section className="container mb-40">
        <AppSlider
          data={LIFE_STYLE_CARDS}
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
          <Heading rightDescText="Videos" hasNextPrev>
            Health & Lifestyle
          </Heading>
        </AppSlider>
      </section>

      {/* WHY SHOULD YOU BE WITH ALMA SECTION */}
      <section className="container mb-40">
        <Heading
          className="mb-8"
          rightDescText="be with Almaa"
          fontClass="text-2xl md:text-4xl font-bold"
        >
          Why should you
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

      {/* CERTIFICATIONS SECTION */}
      <section className="container mb-40">
        <Heading
          isCenter={true}
          className="mb-10"
          rightDescText=" & Awards"
          fontClass="text-2xl md:text-4xl font-bold"
        >
          Certifications, Liceneses
        </Heading>
        <div className="grid grid-cols-1 gap-4">
          {<NcImage src={certification1Img} />}
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="container mb-40">
        <SectionClientSay />
      </section>

      {/* SAVE AND EARN SECTION */}
      <section className="container mb-40">
        <div className="relative py-16 md:py-5">
          <BackgroundSection className="bg-amber-100/70 dark:bg-black/20" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-between">
            <div className="order-last md:order-first place-self-center">
              <Heading
                className="mb-5 lg:mb-5 text-neutral-900 dark:text-neutral-50"
                fontClass="text-2xl md:text-2xl lg:text-4xl font-semibold"
                rightDescText="from Almaa Herbal"
              >
                <span className="mb-2 hidden md:block">
                  Let's Save & Earn <br />
                </span>
                <span className="block md:hidden text-2xl">
                  Let's Save & Earn
                </span>
              </Heading>
              <p className="mb-5 sm:text-sm md:text-md lg:text-2xl text-neutral-700 font-medium">
                Opportunities to earn, save and get <br /> more benefits from
                almaa. Dont miss
              </p>
              <ul className="mb-5 list-disc list-inside text-md lg:text-2xl leading-7">
                <li className="lg:py-2">Product Purchases</li>
                <li className="lg:py-2">Premium Membership</li>
                <li className="lg:py-2">Refer & Earn</li>
                <li className="lg:py-2">Become a Volunteer</li>
              </ul>
              <ButtonSecondary className="text-lg lg:text-2xl border border-slate-300 dark:border-slate-700 py-4 lg:py-6 lg:px-16">
                Explore & Save
              </ButtonSecondary>
            </div>

            <div className="relative md:top-[-80px]">
              <NcImage
                className="w-full h-auto object-contain md:object-cover rounded-lg"
                src={saveAndExploreImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES DOCTORS TEAM SECTION */}
      <section className="container mb-40">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <div>
            <Heading rightDescText="Doctors Team">Articles from our</Heading>
            <SectionMagazine5 />
            <div className="flex mt-16 justify-center">
              <ButtonSecondary>Show all Blogs</ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="container">
        <div className="relative py-16 lg:py-16">
          <BackgroundSection className="bg-amber-100/70 dark:bg-black/20 md:h-3/4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            <div className="order-last md:order-first">
              <Heading
                className="mb-5 lg:mb-5 text-neutral-900 dark:text-neutral-50"
                fontClass="sm:text-md md:text-2xl lg:text-4xl font-semibold"
                rightDescText="resources from us"
              >
                <span className="mb-2">
                  Let's Subscribe & get <br />{" "}
                </span>
              </Heading>
              <p className="sm:text-sm md:text-md lg:text-2xl text-neutral-700 font-medium">
                Opportunities to earn, save and get <br /> more benefits from
                almaa. Dont miss
              </p>
              <form className="mt-2 relative max-w-sm">
                <input
                  type="email"
                  className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 "
                  required
                  aria-required="true"
                  placeholder="Enter your email address"
                />
                <button
                  className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
        text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>

            <div className="relative md:top-[-150px]">
              <NcImage
                className="w-full h-auto object-contain md:object-cover rounded-lg"
                src={emailSubscribeImg}
              />
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
