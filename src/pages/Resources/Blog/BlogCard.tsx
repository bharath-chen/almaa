import { FC } from "react";
import NcImage from "../../../shared/NcImage/NcImage";
import { Link } from "react-router-dom";
import { _getImgRd, _getTitleRd } from "../../../contains/fakeData";
import PostCardMeta from "../../../components/PostCardMeta/PostCardMeta";

export interface Card13Props {
  className?: string;
  src?: string;
  onClick?: () => void;
}

const BlogCard: FC<Card13Props> = ({ className = "", src, onClick }) => {
  return (
    <div
      className={`nc-Card13 relative flex ${className}`}
      data-nc-id="Card13"
      onClick={onClick}
    >
      <div className="flex flex-col h-full py-2 px-4 order-last">
        <h2 className={`nc-card-title block font-semibold text-base`}>
          <div className="line-clamp-2 capitalize" title={"title"}>
            {_getTitleRd()}
          </div>
        </h2>
        <span className="hidden sm:block my-3 text-slate-500 dark:text-slate-400 ">
          <span className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorem voluptatibus numquam ut pariatur officiis?
          </span>
        </span>
        <span className="mt-4 block sm:hidden text-sm text-slate-500 ">
          May 20, 2021 · 2 min read
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta />
        </div>
      </div>

      <div
        className={`block relative h-full flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <NcImage
          src={src}
          containerClassName="absolute inset-0 "
          className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
        />
      </div>
    </div>
  );
};

export default BlogCard;
