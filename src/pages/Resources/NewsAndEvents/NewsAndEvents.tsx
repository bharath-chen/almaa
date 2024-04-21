import { useNavigate } from "react-router-dom";
import AppSlider from "../../../components/AppSlider/AppSlider";
import Heading from "../../../components/Heading/Heading";
import { LIFE_STYLE_CARDS } from "../../../data/home";
import NcImage from "../../../shared/NcImage/NcImage";

const NewsAndEvents = () => {
  const navigate = useNavigate();
  const renderHealthAndLifestyleCard = (item: {
    id: number;
    src: string;
    heading: string;
    categoryType: string;
    dateAdded: string;
  }) => {
    return (
      <div
        className="grid grid-cols-1 gap-3 w-full cursor-pointer"
        onClick={() => navigate("/blog-single")}
      >
        <div className="flex flex-col">
          <NcImage
            className="rounded-[30px] object-contain w-full h-auto"
            src={item.src}
            alt={item.heading}
          />
          <div className="mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-between gap-5 px-2">
              <div className="flex flex-col">
                <div className="text-sm text-slate-500 rounded-lg py-1 px-2 flex-grow">
                  Sample Name
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-stretch text-sm text-slate-500">
                  <span>
                    <svg
                      className="w-6 h-6 text-slate-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    ></svg>
                  </span>
                  <span
                    className="self-center"
                    dangerouslySetInnerHTML={{ __html: item.dateAdded }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="container my-40">
      <AppSlider
        data={LIFE_STYLE_CARDS}
        className="glidejs_rb_ flow-root glide--swipeable glide--ltr glide--slider"
        glideClassName="glide__track"
        renderChildren={renderHealthAndLifestyleCard}
        glideOptions={{
          perView: 3,
          gap: 32,
          bound: true,
          breakpoints: {
            1280: {
              perView: 3,
            },
            1024: {
              gap: 20,
              perView: 3,
            },
            768: {
              gap: 20,
              perView: 2,
            },
            640: {
              gap: 20,
              perView: 1,
            },
            500: {
              gap: 20,
              perView: 1,
            },
          },
        }}
        itemWrapperClassName="w-full"
      >
        <Heading rightDescText="Videos" hasNextPrev>
          News & Events
        </Heading>
      </AppSlider>
    </section>
  );
};

export default NewsAndEvents;
