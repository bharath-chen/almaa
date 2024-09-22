import React from "react";
import { Helmet } from "react-helmet-async";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "../../../components/BgGlassmorphism/BgGlassmorphism";
import SectionPromo3 from "../../../components/SectionPromo3";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import BlogCard from "./BlogCard";
import MainCard from "./MainCard";
import { type Blog } from "../../../models/blog";
import useBlogs from "../../../hooks/useBlogs";
import { useNavigate } from "react-router-dom";

const Blog: React.FC = () => {
  const { mainCardData, blogList } = useBlogs();
  const navigate = useNavigate();
  const routeToBlogDetailPage = () => {
    navigate("/blog-single");
  };

  return (
    <div className="nc-BlogPage overflow-hidden relative">
      <Helmet>
        <title>Almaa</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      <div className="container relative">
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
          {/* <SectionMagazine5 /> */}
          <div className="nc-SectionMagazine5">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {mainCardData && (
                <MainCard blog={mainCardData} onClick={routeToBlogDetailPage} />
              )}
              <div className="grid gap-6 md:gap-8">
                {blogList.map((item, index) => (
                  <BlogCard
                    key={index}
                    // src={item}
                    blog={item}
                    onClick={routeToBlogDetailPage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION 1 === */}
        {/* <SectionAds /> */}

        {/* === SECTION 8 === */}
        <SectionLatestPosts className="py-16 lg:py-28" />

        {/* === SECTION 1 === */}
        {/* <SectionPromo3 className="pb-16 lg:pb-28" /> */}

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default Blog;
