import { ReactNode } from "react";
import styles from "./MiniOfferBanner.module.css";

interface Props {
  children: ReactNode;
}

const MiniOfferBanner = () => {
  return (
    <div className="sticky top-0 w-full z-40">
      <div className="flex items-center justify-center bg-primary-900 text-white dark:bg-white dark:text-slate-900">
        <p className="py-2 px-3 font-medium text-xs sm:text-base">
          Welcome to Almaa Herbal Nature's "Health Hub".{" "}
          <span
            className={`${styles.highlightText} font-semibold dark:text-primary-900`}
          >
            Get 10% Offer on 1st Purchase{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MiniOfferBanner;
