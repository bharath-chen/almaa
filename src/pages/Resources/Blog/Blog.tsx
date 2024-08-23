import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "../../../components/BgGlassmorphism/BgGlassmorphism";
import SectionPromo3 from "../../../components/SectionPromo3";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import { IBlog } from "../../../services/blog-list-service";
import blogListService from "../../../services/blog-list-service";
import { CanceledError } from "axios";
import SectionMagazine5 from "../../../containers/BlogPage/SectionMagazine5";
import { hideLoader, showLoader } from "../../../features/loader/loaderSlice";
import { useAppDispatch } from "../../../hooks/hooks";

// DEMO DATA

const Blog: React.FC = () => {
  const dispatch = useAppDispatch();
  const [blogList, setBlogList] = useState<IBlog[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = blogListService.getAll<IBlog>();

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        setBlogList(res.data);
      })
      .catch((err) => {
        dispatch(hideLoader());
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, []);

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
          <SectionMagazine5 />
          {/* <div className="nc-SectionMagazine5">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <MainCard onClick={routeToBlogDetailPage} />
              <div className="grid gap-6 md:gap-8">
                {featuredImgs.map((item, index) => (
                  <BlogCard
                    key={index}
                    src={item}
                    onClick={routeToBlogDetailPage}
                  />
                ))}
              </div>
            </div>
          </div> */}
        </div>

        {/* === SECTION 1 === */}
        {/* <SectionAds /> */}

        {/* === SECTION 8 === */}
        <SectionLatestPosts className="py-16 lg:py-28" />

        {/* === SECTION 1 === */}
        <SectionPromo3 className="pb-16 lg:pb-28" />

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default Blog;
