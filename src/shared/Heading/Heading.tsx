import NextPrev from "../../shared/NextPrev/NextPrev";
import React, { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  hasNextPrev?: boolean;
  isCenter?: boolean;
  textClasses?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = "Discover the most trending products in Ciseco.",
  className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  hasNextPrev = false,
  textClasses = "text-3xl md:text-4xl font-semibold",
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${className}`}
    >
      <div
        className={isCenter ? "text-center w-full max-w-2xl mx-auto mb-4" : ""}
      >
        <h2 className={`${textClasses}`} {...args}>
          {children || `Section Heading`}
        </h2>
        {desc && (
          <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )}
      </div>
      {hasNextPrev && !isCenter && (
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <NextPrev onClickNext={() => {}} onClickPrev={() => {}} />
        </div>
      )}
    </div>
  );
};

export default Heading;
