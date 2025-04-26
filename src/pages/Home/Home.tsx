import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import aboutSectionImg from "../../assets/HOME PAGE/2-about-section.jpg";
import faqImg from "../../assets/00-Home/FAQ.jpg";
import certificationsImg from "../../assets/00-Home/Certificate.jpg";
import Heading from "../../components/Heading/Heading";
import CardCategory3 from "../../components/CardCategories/CardCategory3";
import AccordionInfo from "../../containers/ProductDetailPage/AccordionInfo";
import NcImage from "../../shared/NcImage/NcImage";
import SectionClientSay from "../../components/SectionClientSay/SectionClientSay";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionSliderCategories, {
  CardCategoryData,
} from "../../components/SectionSliderCategories/SectionSliderCategories";
import SectionGridMoreExplore from "../../components/SectionGridMoreExplore/SectionGridMoreExplore";
import Button from "../../shared/Button/Button";
import siddhargalAndSiddhaMedicineImage from "../../assets/00-Home/Siddhargal & Siddha medicine.png";
import ProductCard from "../../components/ProductCard";
import AppSlider from "../../components/AppSlider/AppSlider";
import {
  ABOUTS,
  ACCORDION_INFO,
  TABS,
  EXPLORE_SECTION_DATA,
} from "../../data/home";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AppCarousel from "../../components/AppCarousel/AppCarousel";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import { CanceledError } from "axios";
import { useAppDispatch } from "../../hooks/hooks";
import homeService, {
  FeatureProductResponse,
} from "../../services/home-service";
import Nav from "../../shared/Nav/Nav";
import NavItem from "../../shared/NavItem/NavItem";

import client1Image from "../../assets/00-Home/Golden Words from our Customers/1.png";
import client2Image from "../../assets/00-Home/Golden Words from our Customers/2.png";
import client3Image from "../../assets/00-Home/Golden Words from our Customers/3.png";
import client4Image from "../../assets/00-Home/Golden Words from our Customers/4.png";
import client5Image from "../../assets/00-Home/Golden Words from our Customers/5.png";
import client6Image from "../../assets/00-Home/Golden Words from our Customers/6.png";
import client7Image from "../../assets/00-Home/Golden Words from our Customers/7.png";

import useCategory from "../../hooks/useCategory";
import useDoctors from "../../hooks/useDoctors";
import useBlogs from "../../hooks/useBlogs";
import MainCard from "../Resources/Blog/MainCard";
import BlogCard from "../Resources/Blog/BlogCard";
import { IVideo } from "../../services/video-service";
import HealthAndLifestyleCard from "./HealthAndLifestyleCard";
import useVideos from "../../hooks/useVideos";
import useNatProducts from "../../hooks/useNatProducts";
import useTestimonials from "../../hooks/useTestimonials";
import { Product } from "../../models/product";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import AudioPlayerPopup from "../../components/Audio/AudioPlayerPopup";
import VideoPopup from "../../pages/Resources/Videos/VideoPopup";
import ProductCategroyCard from "./ProductCategoryCard";
import { Utils } from "../../utils/utils";

const pageAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};
const audioUrl = "https://www.almaherbal.top/App/assets/audio/md-general.mp3";
const videoUrl = "https://youtu.be/n58PFwrmxsg";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories } = useCategory();
  const { doctors } = useDoctors();
  const { blogList } = useBlogs();
  const { videos } = useVideos();
  const { natProducts } = useNatProducts();
  const { testimonials } = useTestimonials();
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handleSliderCardClick = (item: CardCategoryData) => {
    const selectedDoctor = doctors.find((doc) => doc.doctor_id === item.id);

    navigate("/doctor-detail", {
      state: {
        doctor: selectedDoctor,
      },
    });
  };

  const routeToBlogDetailPage = (blogId: string, blogTitle: string) => {
    navigate(`/blog/${Utils.urlFormatter(blogTitle)}`, {
      state: {
        id: blogId,
        title: blogTitle,
      },
    });
  };

  const renderCategoryCard = (item: {
    id: string;
    name: string;
    desc: string;
    featuredImage: string;
    color: string;
    search: any;
    code?: string;
  }) => {
    return (
      <CardCategory3
        name={item.name}
        desc={item.desc}
        featuredImage={item.featuredImage}
        color={item.color}
        btnText="View Products"
        href={`/category/${Utils.urlFormatter(item.code + "-" + item.desc)}`}
        options={{ categoryId: item.id, categoryName: item.desc }}
      />
    );
  };

  const renderProductCategoryCard = (item: {
    id: string;
    name: string;
    code: string;
    desc: string;
    featuredImage: string;
    color: string;
    search: any;
  }) => {
    return <ProductCategroyCard item={item} />;
  };

  const renderHealthAndLifestyleCard = (item: IVideo) => {
    return <HealthAndLifestyleCard video={item} />;
  };

  const [tabActive, setTabActive] = useState(TABS[0]);

  const [featuredProducts, setFeaturedProducts] =
    useState<FeatureProductResponse>();

  useEffect(() => {
    const { request, cancel } = homeService.get<FeatureProductResponse>();

    request
      .then((res) => {
        setFeaturedProducts(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });

    return () => cancel();
  }, []);

  const handleLike = (id: string) => {
    const updatedProducts = featuredProducts[tabActive.key]
      .slice(0, 4)
      .map((p) =>
        p.product_id === id ? { ...p, isLiked: (p.isLiked = !p.isLiked) } : p
      );
    const product = updatedProducts.find((p) => p.product_id === id);

    if (product.isLiked) dispatch(addItemToWishlist(product.product_id));
    else dispatch(removeItemFromWishlist(product.product_id));

    setFeaturedProducts({
      ...featuredProducts,
      [tabActive.key]: updatedProducts,
    });
  };

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
      <section className="container-fluid mb-40">
        <AppCarousel />
      </section>

      {/* ABOUT SECTION */}
      <section className="container mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <div>
            <h3 className="text-2xl xl:text-3xl font-semibold">
              Buy Siddha Medicine & Products Online from{" "}
              <span className="my-2 text-slate-400">
                India's Largest Wellness Hub
              </span>
            </h3>
            <p className="mt-1 text-slate-400 leading-7 tracking-wide text-sm md:text-md xl:text-lg text-justify">
              As Almaa, we are known for our Quality Siddha Medicines. Almaa is
              now your one-stop destination to buy Siddha medicines online.
              Explore our Siddha products from the comfort of your digital
              device. Almaa Siddha Doctors are available for online consultation
              round the clock. We provide the best Siddha doctor consultation
              online. From our Expert Panel, Get Online Siddha Consultation
              absolutely Hassle-free. Experience the convenience of ordering
              Almaa Siddha medicine online, backed by the expertise of the best
              Siddha doctors.
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
        {categories && categories.length > 0 && (
          <AppSlider
            className="nc-DiscoverMoreSlider nc-p-l-container "
            data={categories.map((c, index) => ({
              id: c.category_id,
              name: c.tagline,
              desc: c.cat_name,
              featuredImage: c.cat_image,
              color: "bg-slate-50",
              search: `?category_id=${c.category_id}&category=${c.cat_name}`,
              code: c.cat_code,
            }))}
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
        )}
      </section>

      {/* FEATURED PRODUCTS SECTION */}

      {featuredProducts && featuredProducts[tabActive.key].length && (
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
                key={item.id}
                isActive={tabActive.id === item.id}
                onClick={() => setTabActive(item)}
              >
                {item.name}
              </NavItem>
            ))}
          </Nav>
          <hr className="my-8" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {featuredProducts[tabActive.key]
              ?.slice(0, 4)
              ?.map((product: Product) => {
                const updatedProduct = {
                  ...product,
                  isLiked: false,
                };
                return (
                  <ProductCard
                    key={updatedProduct.product_id}
                    data={updatedProduct}
                    isLiked={updatedProduct.isLiked}
                    onLike={() => handleLike(updatedProduct.product_id)}
                  />
                );
              })}
          </div>
        </section>
      )}

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
                <ul className="pl-5 dashed list-inside leading-7 text-xl text-slate-500 dark:text-slate-400">
                  <li>2000 Years Tradition</li>
                  <li>100% Scientific</li>
                  <li>Solutions for 4448 diseases</li>
                  <li>Completely written in Tamil literature</li>
                  <li>It is an ancient Indian healing system</li>
                  <li>Offers treatments for common and rare diseases</li>
                  <li>Helps to manage chronic diseases</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-5 my-5">
                <Button
                  onClick={() => setShowVideoPopup(true)}
                  className="bg-primary-900 text-white sm:text-white sm:bg-primary-900 sm:hover:bg-white sm:hover:text-primary-900 shadow-xl dark:bg-slate-200 dark:text-slate-900 mb-3 md:m-0"
                >
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
                <Button
                  onClick={() => setShowAudioPlayer(true)}
                  className="bg-primary-900 text-white sm:text-white sm:bg-primary-900 sm:hover:bg-white sm:hover:text-primary-900 shadow-xl dark:bg-slate-200 dark:text-slate-900"
                >
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
            </div>

            <NcImage
              containerClassName="relative block lg:absolute lg:left-0 lg:bottom-10 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(50%-40px)]"
              src={siddhargalAndSiddhaMedicineImage}
              alt="Almaa Groups Founder"
            />
          </div>
        </div>
      </section>

      {/* Audio Player */}
      {showAudioPlayer && (
        <AudioPlayerPopup
          audioUrl={audioUrl}
          onClose={() => setShowAudioPlayer(false)}
        />
      )}

      {/* Video Player */}
      {showVideoPopup && (
        <VideoPopup
          url={videoUrl}
          isOpen={showVideoPopup}
          closeModal={() => setShowVideoPopup(false)}
          backdropClick={() => setShowVideoPopup(false)}
        />
      )}

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
          <SectionGridMoreExplore
            data={EXPLORE_SECTION_DATA}
            // className="bg-neutral-100/70 dark:bg-black/20 rounded-2xl px-16 py-20"
          />
        </div>
      </section>

      {/* MEDICAL CONSULTATIONS SECTION */}
      {doctors && doctors.length > 0 && (
        <section className="container mb-40">
          <SectionSliderCategories
            heading="Almaa's"
            rightDescText="Medical Consultants"
            // data={MEDICAL_CONSULTANTS}
            data={doctors.map((d) => ({
              id: d.doctor_id,
              name: d.name,
              desc: d.specialization,
              img: d.profile_picture,
              color: "",
            }))}
            onClick={handleSliderCardClick}
          />
          <ButtonSecondary className="focus:ring-2 focus:ring-offset-2 focus:ring-transparent tracking-tight ml-3 mt-6 md:text-xl sm:px-14 sm:py-5 sm:text-dark sm:bg-white-900 sm:hover:bg-white sm:hover:text-primary-900 border border-slate-300 dark:border-slate-700">
            <Link to="/doctors-team">Visit all Doctors</Link>
          </ButtonSecondary>
        </section>
      )}

      {/* EXPLORE PRODUCTS BY CATEGORIES SECTION  */}
      {natProducts.length && (
        <section className="mb-40">
          <AppSlider
            // data={CATEGORY_SLIDERS}
            data={natProducts.map((p) => {
              return {
                id: p.natprod_id,
                name: p.tagline,
                code: p.natcode,
                desc: p.name,
                featuredImage: p.image,
                color: "bg-slate-50",
                search: `?nat_prod_id=${p.natprod_id}&nat_product=${p.name}`,
              };
            })}
            className="nc-DiscoverMoreSlider nc-p-l-container "
            renderChildren={renderProductCategoryCard}
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
      )}

      {/* HEALTHY AND LIFESTYLE VIDEOS SECTION */}
      {videos.length > 0 && (
        <section className="container mb-40">
          <AppSlider
            data={videos}
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
      )}

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
              src={faqImg}
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
          {<NcImage src={certificationsImg} />}
        </div>
      </section>

      {/* CLIENTS SECTION */}
      {testimonials.length > 0 && (
        <section className="container mb-40">
          <SectionClientSay
            clientImages={[
              client1Image,
              client2Image,
              client3Image,
              client4Image,
              client5Image,
              client6Image,
              client7Image,
            ]}
            clients={testimonials}
          />
        </section>
      )}

      {/* SAVE AND EARN SECTION */}
      {/* <section className="container mb-40">
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
      </section> */}

      {/* ARTICLES DOCTORS TEAM SECTION */}
      {blogList && blogList.length > 0 && (
        <section className="container mb-40">
          <div className="relative py-24 lg:py-32">
            <BackgroundSection />
            <div>
              <Heading rightDescText="Doctors Team">Articles from our</Heading>
              {/* <SectionMagazine5 /> */}
              <div className="nc-SectionMagazine5">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                  {blogList[0] && (
                    <MainCard
                      blog={blogList[0]}
                      onClick={() =>
                        routeToBlogDetailPage(
                          blogList[0].blog_id,
                          blogList[0].title
                        )
                      }
                    />
                  )}
                  <div className="grid gap-6 md:gap-8">
                    {blogList.slice(1, 5).map((item, index) => (
                      <BlogCard
                        key={index}
                        // src={item}
                        blog={item}
                        onClick={() =>
                          routeToBlogDetailPage(item.blog_id, item.title)
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex mt-16 justify-center">
                <ButtonSecondary>
                  <Link to="/blog">Show all Blogs</Link>
                </ButtonSecondary>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </motion.main>
  );
};

export default Home;
