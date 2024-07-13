import { FC } from "react";
import { Helmet } from "react-helmet-async";
import SocialsList from "../../shared/SocialsList/SocialsList";
import Label from "../../components/Label/Label";
import Input from "../../shared/Input/Input";
import Textarea from "../../shared/Textarea/Textarea";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import BackgroundSection from "../../components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "../../components/SectionPromo1";
import EmailSubscribeSection from "../../shared/EmailSubscribeSection/EmailSubscribeSection";
import GMap from "../../components/GMap/GMap";

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Krishnagiri Almaa Siddha Care Clinic Door No:-2/24 Mel Pudur Main Road, Next to PNS Institute, Krishnagiri-635001",
  },
  {
    title: "💌 EMAIL",
    desc: "nc.example@example.com",
  },
  {
    title: "☎ PHONE",
    desc: "+91 - 7401403002",
  },
];

const Support: FC<PageContactProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Almaa</title>
      </Helmet>
      <div className="">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Example Doe"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container my-20">
        <GMap height="400px" />
        {/* <div className="relative my-24 lg:my-32 py-24 lg:py-32">
          <BackgroundSection />
          <SectionPromo1 />
        </div> */}
      </div>

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="mt-40">
        <EmailSubscribeSection />
      </section>
    </div>
  );
};

export default Support;
