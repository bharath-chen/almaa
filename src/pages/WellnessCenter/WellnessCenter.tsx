import { FC } from "react";
import Heading from "../../components/Heading/Heading";
import NcImage from "../../shared/NcImage/NcImage";
import AccordionInfo from "../../containers/ProductDetailPage/AccordionInfo";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import MetaTags from "../../shared/MetaTags/MetaTags";
import { WELLNESS_CENTER } from "../../data/WELLNESS_CENTER";
import wellnessCenterImg from "../../assets/03-Wellness Center/Wellness Center.jpg";
import SectionHero from "../../pages/Library/SectionHero";
import rightImg from "../../assets/06-Library/About.png";
import useMetaTags from "../../hooks/useMetaTags";

interface WellnessCenterProps {
  className?: string;
}

const WellnessCenter: FC<WellnessCenterProps> = ({ className = "" }) => {
  const { metaTag: metaTagProps } = useMetaTags();

  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      <div
        className={`nc-PageAbout overflow-hidden relative ${className}`}
        data-nc-id="PageAbout"
      >
        {/*SEO*/}
        {metaTagProps && <MetaTags metaTagProps={metaTagProps} />}

        {/* NATURE AND SINDHANAI SIDDHAR SECTION */}
        <section className="container mt-40 mb-40">
          <SectionHero
            rightImg={rightImg}
            heading="Vela Siddha Village Resorts "
            btnText=""
            subHeading="Epitome Of Preventive Health - Integrated Preventive Health care with the Amalgamation of Classical Siddha Principles, traditional architecture and One noble cause of “Health for All”"
          />
        </section>

        {/* MD SECTION */}
        <section className="container mb-40">
          <div className={`nc-SectionPromo2`}>
            <div className="relative flex flex-col justify-center lg:flex-row lg:justify-end bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
              <div className="lg:w-[55%] max-w-lg relative lg:top-14">
                <h2 className="text-2xl tracking-normal font-bold">
                  Sindhanai Sitthar Almaa Velayudham
                </h2>
                <div className="block mt-6">
                  <ul className="pl-5 dashed list-inside leading-7 text-md text-slate-500 dark:text-slate-400">
                    <li>
                      Spanning over an area of 11 acres, with the Javadhu Malai
                      foothills as its natural boundary Vela Siddha Village
                      Resort is truly a Magnanimous Site for Health &
                      rejuvenation. The smell of the fresh air with the breeze
                      makes this place a divine destination for holistic health
                      Care.
                    </li>
                    <li>
                      Not a Treatment but a lifestyle - Health starts from
                      within ourselves. The ability to tackle our lethargy and
                      make ours is a trick that we can easily learn from here.
                      The Rejuvenation mind helps the body and the rejuvenation
                      of the body helps the mind. The relatability of the
                      Mind-body's health axis and the alignment are the prime
                      factors responsible for health & Vela Siddha Villag
                      Resorts Makes sure that it is taken care of.
                    </li>
                    <li>
                      Food thy Medicine; உணவே மருந்து - From Thiruvalluvar to
                      agathiyar and even the father of modern medicine
                      Hippocrates himself has agreed on to the Importance of
                      Quality and nutrient food for the sustenance of life. You
                      cannot feast but can essentially learn what to cook when
                      to cook & how to cook to be disease-free from Vela Siddha
                      village resorts.
                    </li>
                  </ul>
                </div>
              </div>

              <NcImage
                containerClassName="relative block lg:absolute lg:left-0 lg:bottom-10 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(50%-35px)]"
                src={wellnessCenterImg}
                alt="Almaa Groups Founder"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mb-40">
          <Heading className="mb-8" fontClass="text-2xl md:text-4xl font-bold">
            FAQ
          </Heading>
          <div className="grid grid-cols-1 gap-4 place-content-center">
            <div>
              <AccordionInfo data={WELLNESS_CENTER.faq} />
            </div>
          </div>
        </section>

        {/* EMAIL SUBSCRIBE SECTION */}
        <EmailSubscribeSection />
      </div>
    </div>
  );
};

export default WellnessCenter;
