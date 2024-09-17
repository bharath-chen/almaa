import { SocialType } from "../../shared/SocialsShare/SocialsShare";
import { FC } from "react";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: {
    name: string;
    icon: JSX.Element;
    href: string;
  }[];
}

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block w-6 h-6",
  socials,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-3 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => {
        return (
          <a
            key={i}
            className={`${itemClass}`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
          >
            {item.icon}
          </a>
        );
      })}
    </nav>
  );
};

export default SocialsList;
