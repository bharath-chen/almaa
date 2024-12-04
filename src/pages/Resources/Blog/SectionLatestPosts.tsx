import { FC } from "react";
import Heading from "../../../components/Heading/Heading";
import WidgetCategories from "./WidgetCategories";
import WidgetPosts from "./WidgetPosts";
import Card3 from "./Card3";

//
export interface SectionLatestPostsProps {
  className?: string;
  postCardName?: "card3";
}

const SectionLatestPosts: FC<SectionLatestPostsProps> = ({
  postCardName = "card3",
  className = "",
}) => {
  return (
    <div className={`nc-SectionLatestPosts relative ${className}`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-14">
          <Heading>Latest Articles 🎈</Heading>
          <div className={`grid gap-6 md:gap-8 grid-cols-1`}>
            {[1, 1, 1, 1, 1, 1].map((_, index) => (
              <Card3 key={index} className="" />
            ))}
          </div>
        </div>
        <div className="w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 ">
          <WidgetCategories />
          <WidgetPosts />
        </div>
      </div>
    </div>
  );
};

export default SectionLatestPosts;
