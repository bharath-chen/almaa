import { ABOUTS, ACCORDION_INFO } from "../../../data/home";
import mdSectionImg from "../../../assets/HOME PAGE/5-md-section.png";
import whyAlmaaImg from "../../../assets/HOME PAGE/10-why-section.jpg";
import NcImage from "../../../shared/NcImage/NcImage";
import aboutSectionImg from "../../../assets/HOME PAGE/2-about-section.jpg";
import Button from "../../../shared/Button/Button";
import Heading from "../../../components/Heading/Heading";
import AccordionInfo from "../../../containers/ProductDetailPage/AccordionInfo";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import { SIDDHA_SCIENCE } from "./SIDDHA_SCIENCE";

const SiddhaScience = () => {
  return (
    <>
      {/* HISTORY OF SIDDHA SECTION */}
      <section className="container mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <div>
            <h2 className="text-2xl xl:text-3xl font-semibold">
              History of Siddha - Oldest Known Medical Practice
              {/* Take Care of you <span className="text-slate-400">in a</span>{" "}
              <br />
              <span className="my-2 text-slate-400">Herbal Way ...</span> */}
            </h2>
            <p className="mt-1 text-slate-400 leading-7 tracking-wide text-sm md:text-md xl:text-lg text-justify">
              Siddha medicine is as old as the Tamil language, dating back to
              12,000 years B.C. to the Lemuria continent, south of the
              Kanyakumari district. It is a part of the lifestyle followed by
              the most advanced civilization - the Tamizh people. It is a simple
              yet complex strategy that engages life with the surrounding
              atmosphere extending up to the effects of planets on the physical
              body.  The history that is available in writings from the 18
              siddhargal lineages almost contributes to less than 5% of the
              total history of the Siddha medicine system. Siddha Has come a
              long way from Lemuria to today where we can get Siddha medicine
              online from the comfort of our home. Siddha doctors Available
              online can diagnose and prescribe from remote places to every nook
              & corner of the country.  Concepts like Kaya-Kalpam, Varmam, Vaasi
              & Muppu are not only unique to Siddha but curious idea pages for
              the modern medical system.
            </p>
          </div>
          <div>
            <NcImage
              className="w-full h-full object-contain lg:object-cover"
              src={aboutSectionImg}
              alt="about almaa"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {ABOUTS.map((about) => (
            <div className="p-4 bg-slate-100 rounded-lg" key={about.id}>
              <h4 className="text-lg font-semibold mb-1">{about.label}</h4>
              <p className="text-xs md:text-sm text-gray-400">
                {about.descripiton}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SIDDHARGAL SECTION */}
      <section className="container mb-40">
        <div className={`nc-SectionPromo2`}>
          <div className="relative flex flex-col justify-center lg:flex-row lg:justify-end bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
            <div className="lg:w-[55%] max-w-lg relative lg:top-14">
              <h2 className="text-2xl tracking-normal font-medium">
                Let's Understand
              </h2>
              <h3 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-2 sm:mt-2 !leading-[1.13] tracking-tight">
                Siddhargal &<br />
                Siddha Medicine
              </h3>
              <div className="block mt-6">
                <h4 className="font-semibold mb-3 text-2xl sm:text-2xl mt-2 sm:mt-2 !leading-[1.13] tracking-tight">
                  Siddhargal
                </h4>
                <ul className="pl-5 leading-relaxed dashed list-inside leading-7 text-md text-slate-500 dark:text-slate-400">
                  <li>
                    The term Siddhar often misunderstood or mostly
                    misinterpreted, actually means one who perfected the art of
                    attaining enlightenment. There are a total of 18 siddhargal
                    who are prime devotees of the supreme body.
                  </li>
                  <li>
                    The one who attained siddhi through proper life and who will
                    take rebirth is the ultimate goal one can reach and the 18
                    siddhars have told us the ways to achieve this state and
                    have shown us the path by doing it themselves.{" "}
                  </li>
                  <li>
                    Palm Leaves, copper plate, stone inscriptions, and the
                    knowledge transfer through gurukulams by the siddhars are
                    the primary sources of existence of the most advanced
                    ethnicity - the Tamil people through which we are today
                    enjoying the fruits of the trees planted by our ancestors
                    thousands of year ago!..
                  </li>
                </ul>
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-5 my-5">
                <Button className="bg-primary-900 text-white sm:text-white sm:bg-primary-900 sm:hover:bg-white sm:hover:text-primary-900 shadow-xl dark:bg-slate-200 dark:text-slate-900 mb-3 md:m-0">
                  Watch Video{" "}
                  <span className="ml-3 p-1 bg-green-400 rounded-full">
                    <svg
                      className="w-5 h-5 text-primary-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Button>
                <Button className="bg-primary-900 text-white sm:text-white sm:bg-primary-900 sm:hover:bg-white sm:hover:text-primary-900 shadow-xl dark:bg-slate-200 dark:text-slate-900">
                  Listen Audio
                  <span className="ml-3 p-1 bg-green-400 rounded-full">
                    <svg
                      className="w-5 h-5 text-primary-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 6a2 2 0 0 0-3.3-1.5l-4 3.4H4a2 2 0 0 0-2 2V14c0 1.2.9 2 2 2h1.6l4.1 3.5A2 2 0 0 0 13 18V6Z" />
                      <path
                        fillRule="evenodd"
                        d="M14.8 7.7a1 1 0 0 1 1.4 0 6.1 6.1 0 0 1 0 8.6 1 1 0 0 1-1.3 0 1 1 0 0 1 0-1.5 4 4 0 0 0-.1-5.7 1 1 0 0 1 0-1.4Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M17.7 4.8a1 1 0 0 1 1.4 0 10.2 10.2 0 0 1 0 14.4 1 1 0 0 1-1.4 0 1 1 0 0 1 0-1.4 8.2 8.2 0 0 0 0-11.6 1 1 0 0 1 0-1.4Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
              <div className="pl-3">
                <h3 className="font-bold text-xl sm:text-3xl mt-2 sm:mt-2 !leading-[1.13] tracking-tight">
                  Almaa Velayudham
                </h3>
                <p className="text-slate-600 font-medium">Founder & Chairman</p>
                <p className="text-slate-600 font-medium">Almaa Groups</p>
              </div> */}
            </div>

            <NcImage
              containerClassName="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]"
              src={mdSectionImg}
              alt="Almaa Groups Founder"
            />
          </div>
        </div>
      </section>

      {/* WHY SIDDHA MEDICINE SECTION */}
      <section className="container mb-40">
        <Heading
          className="mb-8"
          rightDescText="Medicine?"
          fontClass="text-2xl md:text-4xl font-bold"
        >
          Why Siddha
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <div className="lg:pl-20">
            <NcImage
              className="h-auto object-contain"
              src={whyAlmaaImg}
              alt="Almaa Greatness"
            />
          </div>
          <div>
            <AccordionInfo data={SIDDHA_SCIENCE.accordionData} />
          </div>
        </div>
      </section>

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="container">
        <EmailSubscribeSection />
      </section>
    </>
  );
};

export default SiddhaScience;
