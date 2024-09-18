import { Helmet } from "react-helmet-async";
import BgGlassmorphism from "../../../components/BgGlassmorphism/BgGlassmorphism";
import SectionHero from "../../Library/SectionHero";
import rightImg from "../../../images/hero-right1.png";
import { useNavigate } from "react-router-dom";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import { useEffect, useState } from "react";
import doctorsService, { IDoctor } from "../../../services/doctors-service";
import { CanceledError } from "axios";
import Doctors from "./Doctors";
import { hideLoader, showLoader } from "../../../features/loader/loaderSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import Heading from "../../../shared/Heading/Heading";

interface DoctorsTeamProps {
  className?: string;
}

const DoctorsTeam = ({ className = "" }: DoctorsTeamProps) => {
  const dispatch = useAppDispatch();
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const routeToDoctorDetail = (doctor: IDoctor) => {
    console.log(doctor);
    navigate("/doctor-detail", { state: { doctor } });
  };

  useEffect(() => {
    const { request, cancel } = doctorsService.getAll<IDoctor>();

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        setDoctors(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch(hideLoader());
        setError(err.message);
      });

    return () => cancel();
  }, []);

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

      <div className="container py-16">
        <SectionHero
          rightImg={rightImg}
          heading="Our Doctors"
          btnText=""
          subHeading="Our Esteemed Expert Panel consists of Senior Most Doctors in the field of Siddha combined with young & Dynamic doctors. Our Senior Doctors are masters of traditional healing, who have successfully treated countless patients using Unique remedies. Our young Siddha doctors bring innovative thinking and a modern approach to traditional healing practices."
        />

        <section className="my-20">
          <Heading desc={null}>
            Meet Our Team: Guardians of Indigenous Knowledge
          </Heading>

          <ul className="list-disc list-inside leading-7 mt-5 mb-10">
            <li>
              Our doctor's compassion for both the service and the profession
              ensures that every patient's journey to health is a smooth
              passage.
            </li>
            <li>
              Our Quality & experience with unmatched professionalism carry us
              forward 
            </li>
          </ul>

          <Doctors doctors={doctors} onClick={routeToDoctorDetail} />
        </section>

        <section className="pt-20">
          {/* EMAIL SUBSCRIBE SECTION */}
          <EmailSubscribeSection />
        </section>
      </div>
    </div>
  );
};

export default DoctorsTeam;
