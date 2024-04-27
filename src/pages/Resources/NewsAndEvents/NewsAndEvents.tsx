import { useNavigate } from "react-router-dom";
import AppSlider from "../../../components/AppSlider/AppSlider";
import Heading from "../../../components/Heading/Heading";
import NcImage from "../../../shared/NcImage/NcImage";
import video1Img from "../../../assets/HOME PAGE/9-video-1.jpg";
import video2Img from "../../../assets/HOME PAGE/9-video-2.jpg";
import video3Img from "../../../assets/HOME PAGE/9-video-3.jpg";

const NEWS_AND_EVENTS = [
  {
    id: 1,
    src: video1Img,
    heading: "Heading 1",
    categoryType: "LifeStyle",
    dateAdded: "04<sup>th</sup> Feb 2024",
  },
  {
    id: 2,
    src: video2Img,
    heading: "Heading 2",
    categoryType: "Food Practice",
    dateAdded: "02<sup>nd</sup> Feb 2024",
  },
  {
    id: 3,
    src: video3Img,
    heading: "Heading 3",
    categoryType: "LifeStyle",
    dateAdded: "05<sup>th</sup> Feb 2024",
  },
];

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
            <div className="flex flex-col items-center">
              <h2 className="my-3 text-black-500 text-xl">{item.heading}</h2>
              <p
                className="text-gray-500"
                dangerouslySetInnerHTML={{ __html: item.dateAdded }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="container my-40">
      <AppSlider
        data={NEWS_AND_EVENTS}
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
