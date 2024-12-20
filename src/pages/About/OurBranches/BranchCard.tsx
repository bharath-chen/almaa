import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { IBranch } from "../../../services/branches-service";
import GMap from "../../../components/GMap/GMap";

interface Props {
  branch: IBranch;
  onCardClick: () => void;
  className?: string;
}

const BranchCard = ({ branch, className, onCardClick }: Props) => {
  return (
    <div
      className={`cursor-pointer nc-CardCategory4 relative w-full aspect-w-12 aspect-h-12 h-auto rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ${className}`}
      data-nc-id="CardCategory4"
      onClick={onCardClick}
    >
      <div>
        <div className="absolute inset-5 sm:inset-8 flex flex-col justify-between">
          <div className="mb-3">
            <div className="flex flex-row justify-between items-center">
              <h2 className={`text-xl font-semibold`}>{branch.branch_name}</h2>
              <span className="cursor-pointer">
                <ArrowRightIcon className="w-4 h-4 ml-2.5" />
              </span>
            </div>
            <p
              className={`mb-1 text-sm text-slate-500 dark:text-slate-400 mt-3`}
            >
              {branch.location}
            </p>
            <p className={`text-sm text-slate-500 dark:text-slate-400 mt-3`}>
              {branch.contact_number}{" "}
            </p>
          </div>
          <GMap src={branch.map_link} height="60%" />
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
