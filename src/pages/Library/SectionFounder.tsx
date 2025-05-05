import { FC } from "react";
import Heading from "../../components/Heading/Heading";
import NcImage from "../../shared/NcImage/NcImage";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
  href?: string;
}

interface FounderProps {
  onClick?: (person: People) => void;
  founders?: People[];
  heading?: string;
  desc?: string;
}

const SectionFounder: FC<FounderProps> = ({
  onClick,
  founders = [],
  heading = "",
  desc = "",
}) => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc={
          desc ||
          `We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content`
        }
      >
        {heading || "⛱ Founder"}
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {founders.map((item) => (
          <div
            onClick={() => {
              if (onClick) onClick(item);
            }}
            key={item.id}
            className="max-w-sm cursor-pointer"
          >
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
