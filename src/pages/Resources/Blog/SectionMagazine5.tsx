import { FC } from "react";
import MainCard from "./MainCard";
import BlogCard from "./BlogCard";
import { featuredImgs } from "../../../contains/fakeData";
import { useNavigate } from "react-router-dom";

const SectionMagazine5: FC = () => {
  const navigate = useNavigate();

  const routeToBlogDetailPage = () => {
    navigate("/blog-single");
  };

  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <MainCard onClick={routeToBlogDetailPage} />
        <div className="grid gap-6 md:gap-8">
          {featuredImgs.map((item, index) => (
            <BlogCard key={index} src={item} onClick={routeToBlogDetailPage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
