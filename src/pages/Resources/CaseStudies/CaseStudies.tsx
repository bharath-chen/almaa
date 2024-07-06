import React, { useState } from "react";
import Heading from "../../../shared/Heading/Heading";
import { featuredImgs } from "../../../contains/fakeData";
import BlogCard from "../Blog/BlogCard";
import MainCard from "../Blog/MainCard";
import { useNavigate } from "react-router-dom";

const CaseStudies: React.FC = () => {
  // const [selectedCaseStudy, setSelectedCaseStudy] = useState<{
  //   name: string;
  //   avatar: string;
  // } | null>(null);

  const navigate = useNavigate();

  const routeToCaseStudy = (item?: string) => {
    // navigate("/case-study", {
    //   state: {
    //     doctor: {
    //       id: 1,
    //       name: "Test",
    //       job: "Doctor",
    //       avatar:
    //         item ||
    //         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    //       href: "#",
    //     },
    //   },
    // });

    navigate("/case-study", {
      state: {
        doctor: {
          id: 1,
          name: "Test",
          job: "Doctor",
          avatar:
            item ||
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
          href: "#",
        },
      },
    });
  };

  return (
    <div className="container my-20">
      <Heading desc="">Case Studies</Heading>
      {/* === SECTION 1 === */}
      <div className="pt-12 pb-16 lg:pb-28">
        <div className="nc-SectionMagazine5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <MainCard href="/case-study" onClick={routeToCaseStudy} />
            <div className="grid gap-6 md:gap-8">
              {featuredImgs.map((item, index) => (
                <BlogCard
                  key={index}
                  src={item}
                  href="/case-study"
                  onClick={() => routeToCaseStudy(item)}
                />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className="nc-SectionMagazine5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <MainCard href="/case-study" onClick={routeToCaseStudy} />
            <div className="grid gap-6 md:gap-8">
              {featuredImgs.map((item, index) => (
                <BlogCard
                  key={index}
                  src={item}
                  href="/case-study"
                  onClick={() => routeToCaseStudy(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
