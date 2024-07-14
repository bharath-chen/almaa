import { Link } from "react-router-dom";
import { _getTitleRd } from "../../../contains/fakeData";
import NcImage from "../../../shared/NcImage/NcImage";
import SocialsShare from "../../../shared/SocialsShare/SocialsShare";
import { INewsAndEvents } from "../../../services/news-events-service";
import articles1Img from "../../../assets/HOME PAGE/13-articles-1.jpg";

interface Props {
  newsAndEvent: INewsAndEvents;
  className?: string;
}

const NewsAndEventCard = ({ newsAndEvent, className }: Props) => {
  return (
    <div
      className={`nc-Card12 group relative flex flex-col ${className}`}
      data-nc-id="Card12"
    >
      <Link
        to={"/blog-single"}
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
      >
        <NcImage
          src={articles1Img}
          containerClassName="absolute inset-0"
          alt={"title"}
        />
      </Link>

      <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" />

      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link
            to={"/blog-single"}
            className="line-clamp-2 capitalize"
            title={"title"}
          >
            {newsAndEvent.title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2">{newsAndEvent.description}</span>
        </span>
        <div
          className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 text-sm ${className}`}
          data-nc-id="PostCardMeta"
        >
          {/* <Link
            to={"#"}
            className="flex-shrink-0 relative flex items-center space-x-2"
          >
            {!hiddenAvatar && (
              <Avatar radius="rounded-full" sizeClass={"h-7 w-7 text-sm"} />
            )}
            <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
              {_getPersonNameRd()}
            </span>
          </Link> */}
          <>
            {/* <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
              ·
            </span> */}
            <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
              {newsAndEvent.event_date}
            </span>
          </>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEventCard;
