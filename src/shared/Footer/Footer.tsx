import { Link } from "react-router-dom";
import "./footer.css";
import SocialsList from "../SocialsList/SocialsList";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";

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
    href: "https://www.youtube.com/@AlmaaSiddhaTV",
  },
  {
    name: "X",
    icon: <FaSquareXTwitter color="#ffffff" size={30} />,
    href: "https://x.com/almaaherbal_",
  },
];

const quickLinks = [
  {
    id: 1,
    label: "Almaa Groups",
    href: "/almaa-groups",
  },
  {
    id: 2,
    label: "Founder",
    href: "/founder",
  },
  {
    id: 3,
    label: "Doctors Team",
    href: "/doctors-team",
  },
  {
    id: 4,
    label: "Our Branches",
    href: "/our-branches",
  },
  {
    id: 5,
    label: "Products",
    href: "/category",
  },
  {
    id: 6,
    label: "Wellness Center",
    href: "/wellness-center",
  },
  {
    id: 7,
    label: "Production Unit",
    href: "/production-unit",
  },
  {
    id: 8,
    label: "Resources",
    href: "/blog",
  },
  {
    id: 9,
    label: "Library",
    href: "/library",
  },
  {
    id: 10,
    label: "Support",
    href: "/support",
  },
];

const policies = [
  {
    id: 1,
    label: "Shipping",
    href: "/shipping-policy",
  },
  {
    id: 2,
    label: "Return & Refund Policy",
    href: "/returns-&-refund-policy",
  },
  {
    id: 3,
    label: "Terms & Conditions",
    href: "/terms-&-conditions",
  },
  {
    id: 4,
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const renderCopyright = () => {
  return (
    <div className="flex justify-between border-t items-center mt-[24px] pt-[12px]">
      {" "}
      <p className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
        © {new Date().getFullYear()} Almaa Herbal Nature Pvt Ltd{" "}
      </p>{" "}
      <p className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
        All rights reserved.{" "}
      </p>{" "}
    </div>
  );
};

const renderContactUs = () => {
  return (
    <div className="flex flex-col mt-[24px] pt-[12px]">
      <p className="text-base xl:text-lg 2xl:text-xl tracking-widest uppercase font-semibold text-white dark:text-neutral-200">
        Contact Us
      </p>
      <a
        className="mt-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]"
        href="/contact"
      >
        #10, Pillaiyar Koil Street, Saidapet, Chennai - 600015, Tamil Nadu,
        India.
      </a>
      <span>
        <p className="mt-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
          Call Us:{" "}
          <strong className="cursor-pointer">
            044-4354 6873, 91-740 140 3000.
          </strong>
        </p>
        <p className="mt-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
          Mon-Sat: 9:00am - 6:00pm
        </p>
        <p className="mt-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
          Sun: 10:00am - 4:00pm
        </p>
      </span>
      <span>
        <p className="mt-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
          Email Us:{" "}
          <strong className="cursor-pointer">almaahospital@gmail.com</strong>
        </p>
      </span>
      <span>
        <p className="mt-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
          WhatsApp Us:{" "}
          <strong className="cursor-pointer">91-900 300 0888.</strong>
        </p>
      </span>
      <span className="mt-4 text-sm xl:text-md text-content-4 last:after:content-[''] desktop:text-[14px]">
        <SocialsList socials={socialsDemo} />
      </span>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="nc-Footer py-5 lg:pt-5 lg:pb-5 border-t border-neutral-200 dark:border-neutral-700 bg-dark-900 dark:bg-neutral-900 text-white">
      <div className="container">
        <div className="desktop:max-w-[960px] desktop:mx-auto px-[16px] py-[10px] border-categoryDivider desktop:px-0">
          <div className="flex flex-col mt-[24px]">
            <p className="text-base xl:text-lg 2xl:text-xl tracking-widest uppercase font-semibold text-white dark:text-neutral-200">
              About Us
            </p>
            <div className="flex flex-wrap">
              <p className="mt-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
                Alma Herbal Extractions focuses on providing comprehensive
                health solutions through food-based formulas that combine the
                benefits of natural chemicals found in nature. Unlike
                pharmaceutical companies that extract active ingredients, Alma
                emphasizes the safety and effectiveness of whole vegetables and
                fruits. Chairman: M.G.L. Velayutham, the company’s mission is to
                improve healthcare, protect the environment, and empower
                individuals to boost their immune systems naturally. Their
                vision is to create a world free of medications, and to promote
                overall good health through quality herbs.
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-[24px]">
            <p className="text-base xl:text-lg 2xl:text-xl tracking-widest uppercase font-semibold text-white dark:text-neutral-200">
              Quick Links
            </p>
            <div className="flex flex-wrap">
              {quickLinks.map((item) => (
                <Link
                  key={item.id}
                  className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:content-['|'] after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]"
                  to={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-[24px]">
            <p className="mt-2 text-base xl:text-lg 2xl:text-xl tracking-widest uppercase font-semibold text-white dark:text-neutral-200">
              Policies
            </p>
            <div className="flex flex-wrap">
              {policies.map((item) => (
                <Link
                  className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:content-['|'] after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]"
                  to={item.href}
                  key={item.id}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {renderContactUs()}

          {renderCopyright()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
