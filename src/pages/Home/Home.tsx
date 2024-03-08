import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/HOME PAGE/1-slider-image.jpg";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import aboutSectionImg from "../../assets/HOME PAGE/2-about-section.jpg";
import DiscoverMoreSlider from "../../components/DiscoverMoreSlider";
import img1 from "../../assets/HOME PAGE/3-carousal-1.png";
import img2 from "../../assets/HOME PAGE/3-carousal-2.png";
import img3 from "../../assets/HOME PAGE/3-carousal-3.png";
import img4 from "../../assets/HOME PAGE/3-carousal-4.png";
import categoryImg1 from "../../assets/HOME PAGE/8-carousal-1.png";
import categoryImg2 from "../../assets/HOME PAGE/8-carousal-2.png";
import categoryImg3 from "../../assets/HOME PAGE/8-carousal-3.png";
import categoryImg4 from "../../assets/HOME PAGE/8-carousal-4.png";
import whyAlmaaImg from "../../assets/HOME PAGE/10-why-section.jpg";
import certification1Img from "../../assets/HOME PAGE/11-certificates.jpg";
import Glide from "@glidejs/glide";
import { useId, useEffect, FC } from "react";
import Heading from "../../components/Heading/Heading";
import CardCategory3 from "../../components/CardCategories/CardCategory3";
import AccordionInfo from "../../containers/ProductDetailPage/AccordionInfo";
import NcImage from "../../shared/NcImage/NcImage";
import SectionClientSay from "../../components/SectionClientSay/SectionClientSay";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionMagazine5 from "../../containers/BlogPage/SectionMagazine5";
import SectionSliderCategories from "../../components/SectionSliderCategories/SectionSliderCategories";
import medicalConsultant1 from "../../assets/HOME PAGE/7-doctor-1.jpg";
import medicalConsultant2 from "../../assets/HOME PAGE/7-doctor-2.jpg";
import medicalConsultant3 from "../../assets/HOME PAGE/7-doctor-3.jpg";
import medicalConsultant4 from "../../assets/HOME PAGE/7-doctor-4.jpg";
import SectionGridMoreExplore from "../../components/SectionGridMoreExplore/SectionGridMoreExplore";
import exploreImg1 from "../../assets/HOME PAGE/6-explore-1.png";
import exploreImg2 from "../../assets/HOME PAGE/6-explore-2.png";
import exploreImg3 from "../../assets/HOME PAGE/6-explore-3.png";
import exploreImg4 from "../../assets/HOME PAGE/6-explore-4.png";
import exploreImg5 from "../../assets/HOME PAGE/6-explore-5.png";
import exploreImg6 from "../../assets/HOME PAGE/6-explore-6.png";

interface SliderProps {
  heading: {
    desc?: string;
    rightDescText?: string;
    fontClass?: string;
    text?: string;
  };
  data: {
    name: string;
    desc: string;
    featuredImage: string;
    color: string;
  }[];
}

const Slider: FC<SliderProps> = ({ data, heading }) => {
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    // @ts-ignore
    const OPTIONS: Glide.Options = {
      perView: 2.8,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1279: {
          gap: 20,
          perView: 2.15,
        },
        1023: {
          gap: 20,
          perView: 1.6,
        },
        768: {
          gap: 20,
          perView: 1.2,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    };

    const slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    return () => {
      slider.destroy();
    };
  }, [UNIQUE_CLASS]);

  return (
    <div className={`nc-DiscoverMoreSlider nc-p-l-container ${UNIQUE_CLASS} `}>
      <Heading
        className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50 nc-p-r-container "
        desc=""
        rightDescText={heading.rightDescText || ""}
        hasNextPrev
        fontClass="text-2xl md:text-4xl font-bold"
      >
        {heading.text || ""}
      </Heading>
      <div className="" data-glide-el="track">
        <ul className="glide__slides">
          {data.map((item, index) => (
            <li key={index} className={`glide__slide`}>
              <CardCategory3
                name={item.name}
                desc={item.desc}
                featuredImage={item.featuredImage}
                color={item.color}
                btnText="View Products"
                href="/products"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const abouts = [
    {
      id: 1,
      label: "25+ Doctors",
      descripiton: "Experienced and multispecialised doctors",
    },
    {
      id: 2,
      label: "300+ Products",
      descripiton: "100% natural products with herbal ingredients",
    },
    {
      id: 3,
      label: "15+ Years",
      descripiton: "Pioneer in siddha industry with expretise in products",
    },
  ];

  const medicSliders = [
    {
      name: "Enhance your",
      desc: "Respiratory <br/> Wellbeing",
      featuredImage: img1,
      color: "bg-pink-50",
    },
    {
      name: "Take care of",
      desc: "Digestive <br /> Wellbeing",
      featuredImage: img2,
      color: "bg-red-50",
    },
    {
      name: "Enhance your",
      desc: "Reproductive <br /> Wellbeing",
      featuredImage: img3,
      color: "bg-green-50",
    },
    {
      name: "Enhance your",
      desc: "Blood Pressure <br /> Wellbeing",
      featuredImage: img4,
      color: "bg-orange-50",
    },
  ];

  const categorySliders = [
    {
      name: "Best in class",
      desc: "Herbal <br/> Powders",
      featuredImage: categoryImg1,
      color: "bg-slate-50",
    },
    {
      name: "Pure & Quality",
      desc: "Chooranams",
      featuredImage: categoryImg2,
      color: "bg-slate-50",
    },
    {
      name: "Thick & Consistent",
      desc: "Syrup",
      featuredImage: categoryImg3,
      color: "bg-slate-50",
    },
    {
      name: "Tablets",
      desc: "Herbal Tablets",
      featuredImage: categoryImg4,
      color: "bg-slate-50",
    },
  ];

  const accordionInfo = [
    {
      name: "Enhanced Lifestyle",
      content:
        "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
    },
    {
      name: "Taking care of your whole family",
      content: `<ul class="list-disc list-inside leading-7">
      <li>Made from a sheer Belgian power micromesh.</li>
      <li>
      74% Polyamide (Nylon) 26% Elastane (Spandex)
      </li>
      <li>
      Adjustable hook & eye closure and straps
      </li>
      <li>
      Hand wash in cold water, dry flat
      </li>
    </ul>`,
    },
    {
      name: "Genuine and perfect health care solutions",
      content:
        "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
    },
    {
      name: "Best in industry products at high quality and own manufacturing to ensure quality of products",
      content: `
      <ul class="list-disc list-inside leading-7">
      <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.</li>
      <li>
      Please note, packs must be returned in full. We do not accept partial returns of packs.
      </li>
      <li>
      Want to know our full returns policies? Here you go.
      </li>
      <li>
      Want more info about shipping, materials or care instructions? Here!
      </li>
    </ul>
      `,
    },
    {
      name: "Spiritual touch which gives 100% solutions",
      content: `
      <ul class="list-disc list-inside leading-7">
      <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.</li>
      <li>
      Please note, packs must be returned in full. We do not accept partial returns of packs.
      </li>
      <li>
      Want to know our full returns policies? Here you go.
      </li>
      <li>
      Want more info about shipping, materials or care instructions? Here!
      </li>
    </ul>
      `,
    },
  ];

  const medicalConsultants = [
    {
      name: "Dr.Manikandan B.A.M.S",
      desc: "Ortho Specialist",
      img: medicalConsultant1,
      color: "",
    },
    {
      name: "Dr.Sowmya B.A.M.S",
      desc: "Varma Specialist",
      img: medicalConsultant2,
      color: "",
    },
    {
      name: "Dr.Kumaravel M.D(s).",
      desc: "Senior Consultant (General)",
      img: medicalConsultant3,
      color: "",
    },
    {
      name: "Dr.Sankar Anand M.D(s)",
      desc: "Doctor, General Medicine",
      img: medicalConsultant4,
      color: "",
    },
  ];

  const DEMO_MORE_EXPLORE_DATA = [
    {
      id: 1,
      name: "Talk to Doctor",
      desc: "Free Consulting",
      image: exploreImg1,
      svgBg: "",
      color: "bg-indigo-50",
      btnLabel: "Explore Doctors",
      quantityText: "25 Doctors",
    },
    {
      id: 2,
      name: "Wellness theraphy",
      desc: "Varma Treatments",
      image: exploreImg2,
      svgBg: "",
      color: "bg-slate-100/80",
      btnLabel: "Explore Now",
      quantityText: "35 Therapies",
    },
    {
      id: 3,
      name: "Library",
      desc: "Books & Resource materials",
      image: exploreImg3,
      svgBg: "",
      color: "bg-violet-50",
      btnLabel: "Explore Now",
      quantityText: "15 Books",
    },
    {
      id: 4,
      name: "Siddhar Pooja",
      desc: "Amavasai & Pournami",
      image: exploreImg4,
      svgBg: "",
      color: "bg-orange-50",
      btnLabel: "Explore Now",
      quantityText: "2 Locations",
    },
    {
      id: 5,
      name: "Production Unit",
      desc: "We Manufacture We Serve",
      image: exploreImg5,
      svgBg: "",
      color: "bg-blue-50",
      btnLabel: "Explore Now",
      quantityText: "200 Products",
    },
    {
      id: 6,
      name: "For Your Health",
      desc: "Awarness & Social Responsibility",
      image: exploreImg6,
      svgBg: "",
      color: "bg-orange-50",
      btnLabel: "Explore Now",
      quantityText: "500 Resources",
    },
    // {
    //   id: 7,
    //   name: "Sunglasses",
    //   desc: "Manufacturar",
    //   image: explore7Png,
    //   svgBg: explore7Svg,
    //   color: "bg-stone-100",
    // },
    // {
    //   id: 8,
    //   name: "kid hats",
    //   desc: "Manufacturar",
    //   image: explore8Png,
    //   svgBg: explore8Svg,
    //   color: "bg-blue-50",
    // },
    // {
    //   id: 9,
    //   name: "Wool Jacket",
    //   desc: "Manufacturar",
    //   image: explore4Png,
    //   svgBg: explore4Svg,
    //   color: "bg-slate-100/80",
    // },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="w-full mb-20">
        <div className="nc-PageHome relative overflow-hidden">
          <img
            src={heroImg}
            alt="Hero Img"
            className="w-full h-auto object-cover"
          />
          <div
            className={
              "container absolute top-1/2 md:top-[40%] md:left-[15%] lg:top-[40%] lg:left-[17%] transform -translate-y-1/2 text-white text-center md:text-left "
            }
          >
            <h2 className="text-sm md:text-4xl font-semibold leading-7 tracking-wide">
              Live a Healthy Life with Siddha
            </h2>
            <h3 className="text-md md:text-7xl mt-3 md:mt-6 mb-3 font-thin">
              <span className="pacifico-regular">Herbal for a</span> <br />
              <span className="font-bold">HEALTHY WELLBEING</span>
            </h3>
            <ButtonSecondary
              onClick={() => navigate("/products")}
              className="md:my-6 lg:my-10 text-xs md:px-8 md:py-5 xl:px-24"
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
            <img
              className="w-full h-full object-contain lg:object-cover"
              src={aboutSectionImg}
              alt="about almaa"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {abouts.map((about) => (
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
        <Slider
          heading={{
            text: "Explore Prodcuts",
            rightDescText: "by Medical Conditions",
          }}
          data={medicSliders}
        />
      </section>

      {/* EXPLORE SECTIONS */}
      <section className="container mb-40">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection className="bg-neutral-100/70 dark:bg-black/20" />
          <SectionGridMoreExplore
            data={DEMO_MORE_EXPLORE_DATA}
            // className="bg-neutral-100/70 dark:bg-black/20 rounded-2xl px-16 py-20"
          />
        </div>
      </section>

      {/* MEDICAL CONSULTATIONS SECTION */}
      <section className="container mb-40">
        <SectionSliderCategories
          heading="Almaa's"
          rightDescText="Medical Consultants"
          data={medicalConsultants}
        />
      </section>

      {/* EXPLORE PRODUCTS BY CATEGORIES SECTION  */}
      <section className="mb-40">
        <Slider
          heading={{ text: "Explore Products", rightDescText: "by Categories" }}
          data={categorySliders}
        />
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
            <img
              className="h-auto object-contain"
              src={whyAlmaaImg}
              alt="Almaa Greatness"
            />
          </div>
          <div>
            <AccordionInfo data={accordionInfo} />
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

      {/* CLIENTS SECTION */}
      <section className="container mb-40">
        <SectionClientSay />
      </section>
    </main>
  );
};

export default Home;
