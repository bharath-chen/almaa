import { useEffect, useState } from "react";
import Slider from "react-slick";
import { CanceledError } from "../../services/api-client";
import carouselService from "../../services/carousel-service";
import { Banner } from "../../models/banner";
import NcImage from "../../shared/NcImage/NcImage";
import styles from "./AppCarousel.module.css";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <svg
//       style={{ ...style, display: "block", color: "red" }}
//       onClick={onClick}
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className={"size-6 " + className}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m8.25 4.5 7.5 7.5-7.5 7.5"
//       />
//     </svg>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <svg
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className={"size-6 " + className}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M15.75 19.5 8.25 12l7.5-7.5"
//       />
//     </svg>
//   );
// };

const AppCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // lazyLoad: true,
    adaptiveHeight: true,
  };

  const [banners, setBanners] = useState<Banner[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = carouselService.getAll<Banner>();

    request
      .then((res) => {
        setBanners(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => cancel();
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.banner_id} className={styles.bannerSlide}>
            <NcImage
              src={banner.banner_image}
              alt={banner.banner_content}
              className={styles.bannerImage}
            />
            <div className={styles.bannerContent}>
              <h2>{banner.banner_content}</h2>
              <ButtonPrimary>
                <a href={banner.link}>Buy now</a>
              </ButtonPrimary>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AppCarousel;
