import img1 from "../assets/HOME PAGE/3-carousal-1.png";
import img2 from "../assets/HOME PAGE/3-carousal-2.png";
import img3 from "../assets/HOME PAGE/3-carousal-3.png";
import img4 from "../assets/HOME PAGE/3-carousal-4.png";
import categoryImg1 from "../assets/HOME PAGE/8-carousal-1.png";
import categoryImg2 from "../assets/HOME PAGE/8-carousal-2.png";
import categoryImg3 from "../assets/HOME PAGE/8-carousal-3.png";
import categoryImg4 from "../assets/HOME PAGE/8-carousal-4.png";
import medicalConsultant1 from "../assets/HOME PAGE/7-doctor-1.jpg";
import medicalConsultant2 from "../assets/HOME PAGE/7-doctor-2.jpg";
import medicalConsultant3 from "../assets/HOME PAGE/7-doctor-3.jpg";
import medicalConsultant4 from "../assets/HOME PAGE/7-doctor-4.jpg";
import exploreImg1 from "../assets/HOME PAGE/6-explore-1.png";
import exploreImg2 from "../assets/HOME PAGE/6-explore-2.png";
import exploreImg3 from "../assets/HOME PAGE/6-explore-3.png";
import exploreImg4 from "../assets/HOME PAGE/6-explore-4.png";
import exploreImg5 from "../assets/HOME PAGE/6-explore-5.png";
import exploreImg6 from "../assets/HOME PAGE/6-explore-6.png";
import video1Img from "../assets/HOME PAGE/9-video-1.jpg";
import video2Img from "../assets/HOME PAGE/9-video-2.jpg";
import video3Img from "../assets/HOME PAGE/9-video-3.jpg";

const ABOUTS = [
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

const MEDIC_SLIDERS = [
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

const CATEGORY_SLIDERS = [
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

const ACCORDION_INFO = [
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

const MEDICAL_CONSULTANTS = [
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

const EXPLORE_SECTION_DATA = [
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
];

const LIFE_STYLE_CARDS = [
  {
    id: 1,
    src: video1Img,
    heading: "How to enhance your lifestyle in a healthy way ?",
    categoryType: "LifeStyle",
    dateAdded: "04<sup>th</sup> Feb 2024",
  },
  {
    id: 2,
    src: video2Img,
    heading: "Healthy life using natural & organic ingredients",
    categoryType: "Food Practice",
    dateAdded: "02<sup>nd</sup> Feb 2024",
  },
  {
    id: 3,
    src: video3Img,
    heading: "Let's elevate your life! Participate in Pournami Pooja...",
    categoryType: "LifeStyle",
    dateAdded: "05<sup>th</sup> Feb 2024",
  },
];

const TABS = ["Best Sellers", "Offers", "Newly Launched"];

export {
  ABOUTS,
  MEDIC_SLIDERS,
  CATEGORY_SLIDERS,
  ACCORDION_INFO,
  MEDICAL_CONSULTANTS,
  TABS,
  LIFE_STYLE_CARDS,
  EXPLORE_SECTION_DATA,
};
