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

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="About Us."
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />

        <Doctors
          heading="Doctors"
          desc={null}
          doctors={doctors}
          onClick={routeToDoctorDetail}
        />

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default DoctorsTeam;
