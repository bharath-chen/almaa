import { Helmet } from "react-helmet-async";
import BgGlassmorphism from "../../../components/BgGlassmorphism/BgGlassmorphism";
import SectionFounder, { People } from "../../Library/SectionFounder";
import SectionHero from "../../Library/SectionHero";
import rightImg from "../../../images/hero-right1.png";
import { useNavigate } from "react-router-dom";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";

interface DoctorsTeamProps {
  className?: string;
}

const DOCTORS: People[] = [
  {
    id: "1",
    name: `Niamh O'Shea`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    href: "/doctor-detail",
  },
  {
    id: "4",
    name: `Danien Jame`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    href: "/doctor-detail",
  },
  {
    id: "3",
    name: `Orla Dwyer`,
    job: "Co-founder, Chairman",
    avatar:
      "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    href: "/doctor-detail",
  },
  {
    id: "2",
    name: `Dara Frazier`,
    job: "Co-Founder, Chief Strategy Officer",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    href: "/doctor-detail",
  },
];

const DoctorsTeam = ({ className = "" }: DoctorsTeamProps) => {
  const navigate = useNavigate();

  const routeToDoctorDetail = (person: People) => {
    navigate(person.href, { state: { doctor: person } });
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
          heading="About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />

        <SectionFounder
          heading="Doctors"
          desc={null}
          founders={DOCTORS}
          onClick={routeToDoctorDetail}
        />

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default DoctorsTeam;
