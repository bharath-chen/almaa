import { ArrowRightIcon } from "@heroicons/react/24/solid";
// import { color } from "framer-motion";
// import { Link } from "react-router-dom";
import { IBranch } from "../../../services/branches-service";
// import NcImage from "../../../shared/NcImage/NcImage";

interface Props {
  branch: IBranch;
  onCardClick: () => void;
  className?: string;
}

const BranchCard = ({ branch, className, onCardClick }: Props) => {
  return (
    <div
      className={`nc-CardCategory4 relative w-full aspect-w-12 aspect-h-11 h-0 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ${className}`}
      data-nc-id="CardCategory4"
      onClick={onCardClick}
    >
      <div>
        <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
          {/* <img src={bgSVG} alt="" /> */}
        </div>

        <div className="absolute inset-5 sm:inset-8 flex flex-col justify-between">
          {/* <div className="flex justify-between items-center">
            <NcImage
              src={featuredImage}
              containerClassName={`w-20 h-20 rounded-full overflow-hidden z-0 ${color}`}
            />
            <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">
              {Math.floor(Math.random() * 200 + 125)} products
              {branch.branch_name}
            </span>
          </div> */}

          <div className="">
            <span
              className={`block mb-2 text-sm text-slate-500 dark:text-slate-400`}
            >
              {branch.location}
            </span>
            <h2 className={`text-2xl sm:text-3xl font-semibold`}>
              {branch.branch_name}
            </h2>
          </div>

          {/* <Link
            // to={href}
            className="flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors"
          > */}
          {/* <span>{btnLabel}</span> */}
          <ArrowRightIcon className="w-4 h-4 ml-2.5" />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BranchCard;