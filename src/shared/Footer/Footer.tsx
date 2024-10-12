import { CustomLink } from "../../data/types";
import { Link } from "react-router-dom";
import "./footer.css";
import SocialsList from "../SocialsList/SocialsList";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
// import NcImage from "../../shared/NcImage/NcImage";
// import almaaLogo from "../../assets/almaa-logo-small.png";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  classNameNames?: string;
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
    classNameNames: "lg:col-span-2",
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
    classNameNames: "lg:col-span-2",
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
    classNameNames: "lg:col-span-4",
    menus: [
      {
        href: "#",
        label:
          "By entering your email, you agree to our Terms of Service and Privacy Policy.",
      },
      {
        content: () => (
          // <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:col-span-2">
            <div className="relative flex-grow mb-2 lg:mb-0 lg:mr-2">
              <input
                type="text"
                id="floating_helper"
                aria-describedby="floating_helper_text"
                className="block px-2.5 pb-2.5 pt-5 text-sm text-neutral-550 bg-dark-900 dark:bg-neutral-900 border-2 border-neutral-550 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-500 dark:focus:outline-none focus:outline-none focus:ring-0 focus:border-neutral-550 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_helper"
                className="absolute text-sm xl:text-md text-neutral-550 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 left-3 z-10 origin-[0] peer-focus:text-neutral-700 peer-focus:dark:text-neutral-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter your email
              </label>
            </div>
            <button
              type="button"
              className="h-full text-white bg-greenyellow-900 hover:bg-greenyellow-800 focus:outline-none focus:ring-0 focus:ring-greenyellow-900 font-medium text-sm xl:text-md px-5 py-2.5 dark:bg-greenyellow-900 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Email Us
            </button>
          </div>

          // </div>
        ),
      },
    ],
  },
  {
    id: "4",
    title: "Contact Us",
    classNameNames: "lg:col-span-4",
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
            <p className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
              Call Us:{" "}
              <strong className="cursor-pointer">
                044-4354 6873, 91-740 140 3000.
              </strong>
            </p>
            <p className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
              Mon-Fri: 9:00am - 5:00pm
            </p>
          </>
        ),
      },
      {
        href: "#",
        content: () => (
          <p className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
            Email Us:{" "}
            <strong className="cursor-pointer">almaahospital@gmail.com</strong>
          </p>
        ),
      },
      {
        href: "#",
        content: () => (
          <p className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
            WhatsApp Us: <strong className="cursor-pointer">89518 91930</strong>
          </p>
        ),
      },
      {
        href: "#",
        content: () => (
          <div className="mt-3 text-sm xl:text-md hover:text-neutral-550 dark:hover:text-white after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
            <strong className="cursor-pointer">
              <SocialsList socials={socialsDemo} />
            </strong>
          </div>
        ),
      },
    ],
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
    href: "/products",
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
    href: "/shipping",
  },
  {
    id: 2,
    label: "Returns & Cancellation",
    href: "/returns-cancellation",
  },
  {
    id: 3,
    label: "Terms of Use",
    href: "/terms-of-use",
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
          Mon-Fri: 9:00am - 5:00pm
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

const emailSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
});

type EmailFormInputs = z.infer<typeof emailSchema>;

const renderNewsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormInputs>({
    resolver: zodResolver(emailSchema),
  });

  const handleEmailUs = (data: EmailFormInputs) => {
    window.location.href = `mailto:almaahospital@gmail.com`;
  };

  return (
    <div className="flex flex-col mt-[24px] pt-[12px]">
      <p className="text-base xl:text-lg 2xl:text-xl tracking-widest uppercase font-semibold text-white dark:text-neutral-200">
        Subscribe to our newsletter
      </p>
      <label className="my-3 text-sm xl:text-md after:mx-[8px] text-content-4 last:after:content-[''] desktop:text-[14px]">
        By entering your email, you agree to our Terms of Service and Privacy
        Policy.
      </label>

      <form
        className="flex flex-col md:flex-row w-full md:w-1/2 space-y-2 md:space-y-0 md:space-x-2"
        onSubmit={handleSubmit(handleEmailUs)}
      >
        <div className="flex-grow mb-2 md:mb-0">
          <input
            type="text"
            id="email"
            {...register("email")}
            aria-describedby="email_helper_text"
            className={`block px-2.5 pb-2.5 pt-5 text-sm text-neutral-550 bg-dark-900 dark:bg-neutral-900 border-2 appearance-none peer w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <InputErrorMessage>{errors.email.message}</InputErrorMessage>
          )}
        </div>
        <button
          type="submit"
          className="h-full py-4 text-white bg-greenyellow-900 hover:bg-greenyellow-800 focus:outline-none focus:ring-0 focus:ring-greenyellow-900 font-medium text-sm xl:text-md px-5 dark:bg-greenyellow-900 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-b-lg md:rounded-r-lg md:rounded-b-none"
        >
          Email Us
        </button>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="nc-Footer py-5 lg:pt-5 lg:pb-5 border-t border-neutral-200 dark:border-neutral-700 bg-dark-900 dark:bg-neutral-900 text-white">
      <div className="container">
        {/* <div className="h-[48px] items-center flex justify-center w-full px-[16px]">
          <div className="flex justify-between items-center h-[48px] w-full max-w-screen-xl">
            <div className="flex-shrink-0">
              <Link to="/">
                <div className="w-[100px] h-[40px] relative overflow-hidden">
                  <NcImage src={almaaLogo} alt="almaa logo" />
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-[15px]">
              <SocialsList socials={socialsDemo} />
            </div>
          </div>
        </div> */}

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
                  to="/support"
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

          {/* {renderNewsletter()} */}

          {renderContactUs()}

          {renderCopyright()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer: React.FC = () => {
//   const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
//     return (
//       <div key={index} classNameName={menu.classNameNames || ""}>
//         <h2 classNameName="text-base xl:text-lg 2xl:text-xl tracking-widest uppercase font-semibold text-white dark:text-neutral-200">
//           {menu.title}
//         </h2>
//         <ul classNameName="mt-5 space-y-4">
//           {menu.menus.map((item, index) => (
//             <li key={index}>
//               {item.label && (
//                 <Link
//                   key={index}
//                   classNameName="text-sm xl:text-md text-neutral-550 dark:text-neutral-300 hover:text-neutral-550 dark:hover:text-white"
//                   to={item.href}
//                 >
//                   {item.label}
//                 </Link>
//               )}

//               {item.content && <div>{item.content()}</div>}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <footer classNameName="nc-Footer relative py-5 lg:pt-5 lg:pb-5 border-t border-neutral-200 dark:border-neutral-700 bg-dark-900 dark:bg-neutral-900">
//       <div classNameName="container">
//         <div classNameName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
//           {widgetMenus.map(renderWidgetMenuItem)}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
