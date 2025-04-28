import NcImage from "../../../shared/NcImage/NcImage";
import sindhanaiSiddharImg from "../../../assets/01-About/2- Founder/Who is Sindhanai Siddhar.jpg";
import SectionFounder, { People } from "../../Library/SectionFounder";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import MetaTags from "../../../shared/MetaTags/MetaTags";
import environmentConferenceImg from "../../../assets/01-About/2- Founder/Environment Conference.jpg";
import coimbatoreConferenceImg from "../../../assets/01-About/2- Founder/Coimbatore.jpg";
import malaysiaConferenceImg from "../../../assets/01-About/2- Founder/Malaysia.jpg";
import ilamvambadiConferenceImg from "../../../assets/01-About/2- Founder/Elavambadi.jpg";
import maduraiConferenceImg from "../../../assets/01-About/2- Founder/Madurai.jpg";
import velloreConferenceImg from "../../../assets/01-About/2- Founder/Vellore.jpg";
import chennaiConferenceImg from "../../../assets/01-About/2- Founder/Chennai Conference.jpg";
import siddharThiruvizhaImg from "../../../assets/01-About/2- Founder/Siddhar Thiruvizha.jpg";

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `Environment awareness seminar for students on the occasion of World Ozone Day`,
    job: "(Chennai - 2024)",
    avatar: environmentConferenceImg,
  },
  {
    id: "2",
    name: `Luxury Travel Show - 1st Edition`,
    job: "(Coimbatore - 2024)",
    avatar: coimbatoreConferenceImg,
  },
  {
    id: "3",
    name: `National Occupational Skills Standard (NOSS)`,
    job: "(Cyberjaya, Malaysia - 2024)",
    avatar: malaysiaConferenceImg,
  },
  {
    id: "4",
    name: `Vela Siddha Wellness Village Resorts`,
    job: "(Ilamvambadi - 2024)",
    avatar: ilamvambadiConferenceImg,
  },
  {
    id: "5",
    name: `Madurai Conference`,
    job: "(Madurai - 2016)",
    avatar: maduraiConferenceImg,
  },
  {
    id: "6",
    name: `Vellore Conference`,
    job: "(Vellore - 2016)",
    avatar: velloreConferenceImg,
  },
  {
    id: "7",
    name: `Chennai Conference`,
    job: "(Chennai – 2018)",
    avatar: chennaiConferenceImg,
  },
  {
    id: "8",
    name: `Siddhar Thiruvizha`,
    job: "(Madurai - 2023)",
    avatar: siddharThiruvizhaImg,
  },
];

const Founder = () => {
  return (
    <>
      {/* SEO */}
      <MetaTags
        title="About Us - Unveiling the Siddha Wisdom: The Almaa Journey"
        description="Embark on the journey of Siddha wisdom with Almaa, your trusted source for holistic healing online."
        keywords="siddha doctor online, siddha medicine online, siddha products online"
        canonical="/about-us"
        robots="INDEX, FOLLOW"
      />
      {/* MISSION AND VISION SECTION */}
      <section className="container mt-40 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <div>
            <h3 className="text-2xl xl:text-3xl font-semibold mb-4">
              Who is Sindhanai Siddhar?
            </h3>
            <p className="mt-1 text-slate-400 leading-7 tracking-wide text-sm md:text-md xl:text-lg text-justify">
              As the name indicates, Sindhanai Siddhar is a profound thinker and
              tamizh enthusiast. His profound understanding of the relationship
              between Body, Mind, Food, Lifestyle & diseases made him stand out
              in the health fraternity. This hardworking 53-year-old young man
              has single-handedly created a huge impact on the traditional
              medicines sector. Sindhanai Siddhar's work focused on the
              fundamental aspects of nature, body and the application of the
              above to relieve people from their health issues. His
              groundbreaking research revolutionized our understanding of the
              Siddha system of medicine.
            </p>
          </div>
          <div>
            <NcImage
              className="w-full h-full object-contain lg:object-cover"
              src={sindhanaiSiddharImg}
              alt="about almaa"
            />
          </div>
        </div>
      </section>
      {/* NATURE AND SINDHANAI SIDDHAR SECTION */}
      <section className="container mb-40">
        <SectionFounder
          heading="	Nature & Sindhanai Siddhar"
          desc={`Health for All with Affordable Siddha Medicines" is the primary vision of our founder Sindhanai Siddhar Thiru.Velayudham avargal.`}
          founders={FOUNDER_DEMO}
        />
      </section>
      {/* MEET SINDHANAI SIDDHAR SECTION */}
      <section className="container mb-40"></section>
      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </>
  );
};

export default Founder;
