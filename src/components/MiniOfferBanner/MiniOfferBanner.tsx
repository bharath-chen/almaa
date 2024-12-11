import styles from "./MiniOfferBanner.module.css";
import { Link } from "react-router-dom";

const MiniOfferBanner = () => {
  return (
    <div className="sticky top-0 w-full z-40">
      <div className="flex items-center justify-center bg-primary-900 text-white dark:bg-white dark:text-slate-900">
        <Link to="/category">
          <p className="py-2 px-3 font-medium text-xs sm:text-base">
            Welcome to Almaa Siddha official website.{" "}
            <span
              className={`${styles.highlightText} font-semibold dark:text-primary-900`}
            >
              Boost your health with best Siddha Products .{" "}
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MiniOfferBanner;
