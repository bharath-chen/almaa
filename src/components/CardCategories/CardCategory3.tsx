import { FC } from "react";
import NcImage from "../../shared/NcImage/NcImage";
import { Link, useNavigate } from "react-router-dom";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import { CATS_DISCOVER } from "../../components/DiscoverMoreSlider";

export interface CardCategory3Props {
  className?: string;
  featuredImage?: string;
  name?: string;
  desc?: string;
  color?: string;
  href?: string;
  btnText?: string;
  onBtnClick?: () => void;
  options?: { [key: string]: string };
}

const CardCategory3: FC<CardCategory3Props> = ({
  className = "",
  featuredImage = CATS_DISCOVER[2].featuredImage,
  name = CATS_DISCOVER[2].name,
  desc = CATS_DISCOVER[2].desc,
  color = CATS_DISCOVER[2].color,
  btnText = "Show me all",
  href = "/page-collection",
  options = {},
}) => {
  const navigate = useNavigate();
  const formattedDesc =
    desc.split(" ").length > 1 ? desc.split(" ").join("<br />") : desc;

  const routeToUrl = () => {
    if (Object.keys(options).length > 0) {
      navigate(href, { state: { ...options } });
    } else {
      navigate(href);
    }
  };

  return (
    <div
      className={`nc-CardCategory3 block ${className}`}
      data-nc-id="CardCategory3"
      onClick={routeToUrl}
    >
      <div
        className={`relative w-full aspect-w-16 aspect-h-11 sm:aspect-h-9 h-0 rounded-2xl overflow-hidden group ${color}`}
      >
        <div>
          <NcImage
            src={featuredImage}
            containerClassName="absolute inset-5 sm:inset-8"
            className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
          />
        </div>
        <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>

        <div>
          <div className="absolute inset-5 sm:inset-8 flex flex-col">
            <div className="max-w-xs">
              <span className={`block mb-2 text-sm text-slate-700`}>
                {name}
              </span>
              {desc && (
                <h2
                  className={`text-xl md:text-2xl text-slate-900 font-semibold`}
                  dangerouslySetInnerHTML={{ __html: formattedDesc }}
                ></h2>
              )}
            </div>
            <div className="mt-auto">
              <ButtonSecondary
                sizeClass="py-3 px-4 sm:py-3.5 sm:px-6"
                fontSize="text-sm font-medium"
                className="nc-shadow-lg"
              >
                {btnText}
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory3;
