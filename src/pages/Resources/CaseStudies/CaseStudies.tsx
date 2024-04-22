import React from "react";
import articles2 from "../../../assets/HOME PAGE/13-articles-2.jpg";
import articles3 from "../../../assets/HOME PAGE/13-articles-3.jpg";
import articles4 from "../../../assets/HOME PAGE/13-articles-4.jpg";
import Heading from "../../../shared/Heading/Heading";
import { useNavigate } from "react-router-dom";

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      title: "Case Study 1",
      description: "Description of case study 1...",
      image: articles2,
    },
    {
      title: "Case Study 2",
      description: "Description of case study 2...",
      image: articles3,
    },
    {
      title: "Case Study 3",
      description: "Description of case study 3...",
      image: articles4,
    },
    {
      title: "Case Study 4",
      description: "Description of case study 4...",
      image: articles3,
    },
    {
      title: "Case Study 5",
      description: "Description of case study 5...",
      image: articles2,
    },
    {
      title: "Case Study 6",
      description: "Description of case study 6...",
      image: articles4,
    },
    {
      title: "Case Study 7",
      description: "Description of case study 7...",
      image: articles3,
    },
    {
      title: "Case Study 8",
      description: "Description of case study 8...",
      image: articles4,
    },
    {
      title: "Case Study 9",
      description: "Description of case study 9...",
      image: articles2,
    },
  ];

  const handleCaseStudyClick = () => {
    navigate("/case-study");
  };

  return (
    <div className="container my-20">
      <Heading desc="">Case Studies</Heading>
      <div className="grid grid-cols-3 gap-4">
        {caseStudies.map((study, index) => (
          <div
            onClick={handleCaseStudyClick}
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
              <p className="text-sm">{study.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
