import { FC } from "react";
import BgGlassmorphism from "../../../components/BgGlassmorphism/BgGlassmorphism";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import BlogCard from "./BlogCard";
import MainCard from "./MainCard";
import { type Blog } from "../../../models/blog";
import useBlogs from "../../../hooks/useBlogs";
import { useNavigate } from "react-router-dom";
import Heading from "../../../shared/Heading/Heading";
import useMetaTags from "../../../hooks/useMetaTags";
import MetaTags from "../../../shared/MetaTags/MetaTags";

const Blog: FC = () => {
  const { metaTag: metaTagProps } = useMetaTags();
  const { blogList } = useBlogs();
  const navigate = useNavigate();
  const routeToBlogDetailPage = (blog: Blog) => {
    navigate(`/blog/${blog.url_name}`, {
      state: {
        id: blog.blog_id,
        title: blog.title,
      },
    });
  };

  const chunkBlogList = (blogList: Blog[], chunkSize: number = 5): Blog[][] => {
    const result: Blog[][] = [];
    for (let i = 0; i < blogList.length; i += chunkSize) {
      const chunk = blogList.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };

  const renderBlogSection: FC = (blogs: Blog[], heading?: string) => {
    const [mainCard, ...list] = blogs;

    return (
      <>
        {heading && <Heading desc="">{heading}</Heading>}
        <div className="nc-SectionMagazine5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {mainCard && (
              <MainCard
                blog={mainCard}
                onClick={() => routeToBlogDetailPage(mainCard)}
              />
            )}
            <div className="grid gap-6 md:gap-8">
              {list.map((item, index) => (
                <BlogCard
                  key={index}
                  blog={item}
                  onClick={() => routeToBlogDetailPage(item)}
                />
              ))}
            </div>
          </div>
        </div>
        <br />
      </>
    );
  };

  const blogListChunks = chunkBlogList(blogList);

  return (
    <div className="nc-BlogPage overflow-hidden relative">
      {/* METATAGS */}
      {metaTagProps && <MetaTags metaTagProps={metaTagProps} />}

      {/* ======== BG GLASS ======== */}
      {/* Place the BgGlassmorphism here to cover the entire blog list section */}
      <BgGlassmorphism className="absolute inset-0 z-0" />

      {/* ======== ALL SECTIONS ======== */}
      <div className="container relative z-10">
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
          {/* Blog list chunks rendered here */}
          {blogListChunks.map((chunk, chunkIndex) => {
            let heading = "";

            if (chunkIndex === 0) heading = "Latest Articles";
            else if (chunkIndex === 1) heading = "Other Articles";

            return (
              <div className="mb-20" key={chunkIndex}>
                {renderBlogSection(chunk, heading)}
              </div>
            );
          })}
        </div>

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default Blog;
