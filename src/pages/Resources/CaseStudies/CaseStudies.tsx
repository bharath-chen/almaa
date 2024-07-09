import React from "react";
import Heading from "../../../shared/Heading/Heading";
import MainCard from "../Blog/MainCard";
import { useNavigate } from "react-router-dom";
import articles1Img from "../../../assets/HOME PAGE/13-articles-1.jpg";

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

  const routeToCaseStudy = (item?: string) => {
    navigate("/case-study", {
      state: {
        doctor: {
          id: 1,
          name: "Test",
          degree: "M.B.B.S",
          designataion: "General Physician",
          src: item,
        },
      },
    });
  };

  const items = [
    articles1Img,
    articles1Img,
    articles1Img,
    articles1Img,
    articles1Img,
    articles1Img,
  ];

  return (
    <div className="container my-20">
      <Heading desc="">Case Studies</Heading>
      {/* === SECTION 1 === */}
      <div className="pt-12 pb-16 lg:pb-28">
        <div className="nc-SectionMagazine5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {items.map((item, index) => (
              <MainCard
                key={index}
                src={item}
                onClick={() => routeToCaseStudy(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
