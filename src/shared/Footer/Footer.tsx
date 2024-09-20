import Logo from "../../shared/Logo/Logo";
import SocialsList1 from "../../shared/SocialsList1/SocialsList1";
import { CustomLink } from "../../data/types";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import SocialsList from "../SocialsList/SocialsList";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  classNames?: string;
  menus: CustomLink[];
}

const socialsDemo: {
  name: string;
  icon: JSX.Element;
  href: string;
}[] = [
  {
    name: "Facebook",
    icon: <FaFacebookSquare color="#1877F2" size={30} />,
    href: "https://www.facebook.com/almaherbal",
  },
  {
    name: "Instagram",
    icon: <FaSquareInstagram color="#E1306C" size={30} />,
    href: "https://www.instagram.com/almaaherbalnature/",
  },
  {
    name: "Youtube",
    icon: <FaSquareYoutube color="#FF0000" size={30} />,
    href: "https://www.youtube.com/@almaaherbalnature",
  },
  {
    name: "X",
    icon: <FaSquareXTwitter color="#ffffff" size={30} />,
    href: "https://x.com/almaaherbal_",
  },
];

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Quick Links",
    classNames: "lg:col-span-2",
    menus: [
      { href: "/almaa-groups", label: "Almaa Groups" },
      { href: "/founder", label: "Founder" },
      { href: "/doctors-team", label: "Doctors Team" },
      { href: "/our-branches", label: "Our Branches" },
      { href: "/products", label: "Products" },
      { href: "/wellness-center", label: "Wellness Center" },
      { href: "/production-unit", label: "Production Unit" },
      { href: "/blog", label: "Resources" },
      { href: "/library", label: "Library" },
      { href: "/support", label: "Support" },
    ],
  },
  {
    id: "1",
    title: "Policies",
    classNames: "lg:col-span-2",
    menus: [
      { href: "#", label: "Shipping" },
      { href: "#", label: "Returns & Cancellation" },
      { href: "/terms-of-use", label: "Terms of Use" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
  {
    id: "2",
    title: "Subscribe to our newsletter",
    classNames: "lg:col-span-4",
    menus: [
      {
        href: "#",
        label:
          "By entering your email, you agree to our Terms of Service and Privacy Policy.",
      },
      {
        content: () => (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="relative lg:col-span-2">
              <input
                type="text"
                id="floating_helper"
                aria-describedby="floating_helper_text"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm  text-neutral-550 bg-dark-900 dark:bg-neutral-900 border-t-2 border-b-2 border-l-2 border-r-2 lg:border-r-0 border-neutral-550 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-500 dark:focus:outline-none focus:outline-none focus:ring-0 focus:border-neutral-550 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_helper"
                className="absolute text-sm xl:text-md text-neutral-550 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 left-[15px] z-10 origin-[0] start-1 peer-focus:text-neutral-700 peer-focus:dark:text-neutral-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter your email
              </label>
            </div>
            <button
              type="button"
              className="mt-2 lg:mt-0 focus:outline-none h-full text-white bg-greenyellow-900 hover:bg-greenyellow-900 focus:ring-0 focus:ring-greenyellow-900 font-medium text-sm xl:text-md px-5 py-2.5 mb-2 dark:bg-greenyellow-900 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Email Us
            </button>
          </div>
        ),
      },
      // { content: () => <SocialsList1 /> },
    ],
  },
  {
    id: "4",
    title: "Contact Us",
    classNames: "lg:col-span-4",
    menus: [
      {
        href: "#",
        label:
          "#10, Pillaiyar Koil Street, Saidapet, Chennai - 600015, Tamil Nadu, India.",
      },
      {
        href: "#",
        content: () => (
          <>
            <p className="cursor-default text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white">
              Call Us:{" "}
              <strong className="cursor-pointer">
                044-4354 6873, 91-740 140 3000.
              </strong>
            </p>
            <p className="cursor-default text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white mt-5">
              Mon-Fri: 9:00am - 5:00pm
            </p>
          </>
        ),
      },
      {
        href: "#",
        content: () => (
          <a className="cursor-default text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white">
            Email Us:{" "}
            <strong className="cursor-pointer">almaahospital@gmail.com</strong>
          </a>
        ),
      },
      {
        href: "#",
        content: () => (
          <a className="cursor-default text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white">
            WhatsApp Us: <strong className="cursor-pointer">89518 91930</strong>
          </a>
        ),
      },
      {
        href: "#",
        content: () => (
          <div className="text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white">
            <strong className="cursor-pointer">
              <SocialsList socials={socialsDemo} />
            </strong>
          </div>
        ),
      },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className={menu.classNames || ""}>
        <h2 className="text-base xl:text-lg 2xl:text-xl tracking-widest uppercase font-semibold text-white dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              {item.label && (
                // <a
                //   key={index}
                //   className="text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white"
                //   href={item.href}
                //   target="_blank"
                //   rel="noopener noreferrer"
                // >
                <Link
                  key={index}
                  className="text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white"
                  to={item.href}
                >
                  {item.label}
                </Link>
                // </a>
              )}

              {item.content && <div>{item.content()}</div>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="nc-Footer relative py-5 lg:pt-5 lg:pb-5 border-t border-neutral-200 dark:border-neutral-700 bg-dark-900 dark:bg-neutral-900">
      {/* <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 "> */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
        {/* <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1"><Logo /></div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
