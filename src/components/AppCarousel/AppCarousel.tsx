import { useEffect, useState } from "react";
import Slider from "react-slick";
import { CanceledError } from "../../services/api-client";
import carouselService from "../../services/carousel-service";
import { Banner } from "../../models/banner";
import NcImage from "../../shared/NcImage/NcImage";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";

const AppCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="w-full">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.banner_id} className="relative w-screen">
            <NcImage
              src={banner.banner_image}
              alt={banner.banner_content}
              className="w-screen h-[300px] md:h-[500px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-40 text-white pl-[40px] md:pl-40">
              <h2
                className="text-md xs:text-lg sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-left"
                dangerouslySetInnerHTML={{ __html: banner.banner_content }}
              ></h2>
              <ButtonPrimary className="bg-white hover:bg-white">
                <Link
                  to={banner.link}
                  className="text-black text-[12px] sm:text-[14px] md:text-[16px]"
                >
                  Buy now
                </Link>
              </ButtonPrimary>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AppCarousel;
