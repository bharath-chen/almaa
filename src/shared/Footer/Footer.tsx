import Logo from "../../shared/Logo/Logo";
import SocialsList1 from "../../shared/SocialsList1/SocialsList1";
import { CustomLink } from "../../data/types";
import React, { ReactNode } from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  classNames?: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Quick Links",
    classNames: "basis-2/4 md:basis-1/4",
    menus: [
      { href: "#", label: "Ask the Experts" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Contact Us" },
      { href: "#", label: "FAQs" },
      { href: "#", label: "Health Help" },
      { href: "#", label: "Herb Finder" },
      { href: "#", label: "Loyalty Program" },
      { href: "#", label: "Research Papers" },
      { href: "#", label: "Store Locator" },
      { href: "#", label: "Refund Policy" },
      { href: "#", label: "Terms of Service" },
    ],
  },
  {
    id: "1",
    title: "Policies",
    classNames: "md:basis-1/4",
    menus: [
      { href: "#", label: "Shipping" },
      { href: "#", label: "Returns & Cancellation" },
      { href: "#", label: "Terms of Use" },
      { href: "#", label: "Privacy Policy" },
    ],
  },
  {
    id: "2",
    title: "Subscribe to our newsletter",
    classNames: "basis-4/4 md:basis-2/4",
    menus: [
      {
        href: "#",
        label:
          "By entering your email, you agree to our Terms of Service and Privacy Policy.",
      },
      {
        content: () => (
          <div className="relative">
            <input
              type="text"
              id="floating_helper"
              aria-describedby="floating_helper_text"
              className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-primary-50 dark:bg-neutral-900 border-0 border-b-2 border-primary-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 dark:focus:outline-none focus:outline-none focus:ring-0 focus:border-primary-700 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_helper"
              className="absolute text-xs text-primary-700 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-1 peer-focus:text-primary-700 peer-focus:dark:text-primary-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Enter your email
            </label>
          </div>
        ),
      },
      // { content: () => <SocialsList1 /> },
    ],
  },
  {
    id: "4",
    title: "Contact Us",
    classNames: "basis-4/4 md:basis-2/4",
    menus: [
      {
        href: "#",
        label: "Himalaya Wellness Company, Makali, Bengaluru - 562162",
      },
      {
        href: "#",
        content: () => (
          <>
            <p className="cursor-default text-xs text-primary-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-white">
              Call Us:{" "}
              <strong className="cursor-pointer">1-800-208-1930</strong>
            </p>
            <p className="cursor-default text-xs text-primary-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-white">
              Mon-Fri: 9:00am - 5:00pm
            </p>
          </>
        ),
      },
      {
        href: "#",
        content: () => (
          <a className="cursor-default text-xs text-primary-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-white">
            Email Us:{" "}
            <strong className="cursor-pointer">
              contactus@himalayawellness.com
            </strong>
          </a>
        ),
      },
      {
        href: "#",
        content: () => (
          <a className="cursor-default text-xs text-primary-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-white">
            WhatsApp Us: <strong className="cursor-pointer">89518 91930</strong>
          </a>
        ),
      },
      {
        href: "#",
        content: () => (
          <a className="text-xs text-primary-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-white">
            <strong className="cursor-pointer">
              Report Product Related Issues
            </strong>
          </a>
        ),
      },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className={menu.classNames || ""}>
        <h2 className="text-sm tracking-widest uppercase font-semibold text-primary-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              {item.label && (
                <a
                  key={index}
                  className="text-xs text-primary-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-white"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              )}

              {item.content && <div>{item.content()}</div>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-5 lg:pt-5 lg:pb-5 border-t border-neutral-200 dark:border-neutral-700 bg-primary-50 dark:bg-neutral-900">
      {/* <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 "> */}
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap flex-row gap-y-10 gap-x-10">
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
        {/* <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1"><Logo /></div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
