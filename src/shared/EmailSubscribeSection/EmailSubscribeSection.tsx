import emailSubscribeImg from "../../assets/HOME PAGE/14-subscribe.png";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import Heading from "../../components/Heading/Heading";
import NcImage from "../NcImage/NcImage";

interface Props {
  subscribeImg?: string;
}

const EmailSubscribeSection = ({ subscribeImg = emailSubscribeImg }: Props) => {
  return (
    <section className="container">
      <div className="relative py-16 lg:py-16">
        <BackgroundSection className="bg-amber-100/70 dark:bg-black/20 md:h-3/4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          <div className="order-last md:order-first">
            <Heading
              className="mb-5 lg:mb-5 text-neutral-900 dark:text-neutral-50"
              fontClass="sm:text-md md:text-2xl lg:text-4xl font-semibold"
              rightDescText="better decisions"
            >
              <span className="mb-2">
                Better discussions, <br />{" "}
              </span>
            </Heading>
            <p className="sm:text-sm md:text-md lg:text-2xl text-neutral-700 font-medium">
              Talk to our doctor for any of your health concerns, from the
              comfort of your home
            </p>
            <form className="mt-5 relative max-w-sm">
              <button
                type="button"
                className="px-6 py-3.5 text-base font-medium text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Email Us
              </button>
              {/* <input
                type="email"
                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 "
                required
                aria-required="true"
                placeholder="Enter your email address"
              />
              <button
                className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
      text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button> */}
            </form>
          </div>

          <div className="relative md:top-[-150px]">
            <NcImage
              className="w-full h-auto object-contain md:object-cover rounded-lg"
              src={subscribeImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscribeSection;
