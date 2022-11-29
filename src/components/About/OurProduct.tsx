import type { FC } from "react";
import { color } from "../Landing/FeaturedPro";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export interface OurProductProps {
  imgSrc: string;
  id: number;
  summary: string;
  description: string;
  productUrl: string;
}

const OurProduct: FC<OurProductProps> = (props) => {
  const { imgSrc, id, summary, description, productUrl } = props;
  const colors: color[] = [
    { firstColor: "#FE7831", secondColor: "#FFDEBE" },
    { firstColor: "#8AA8F8", secondColor: "#315BFF" },
    { firstColor: "#FF3C78", secondColor: "#FFB2B2" },
  ];
  const textColors: string[] = ["#315BFF", "#FE7831", "#FF3C78", "#02BE83"];

  const styles = {
    background: `linear-gradient(270deg, ${colors[id].firstColor} 0%, ${colors[id].secondColor} 100%)`,
  };

  return (
    <div className="w-[85%] h-fit flex flex-col items-start justify-center gap-[1.5rem] pl-4 lsm:items-center">
      <div className="w-[70%] h-[12rem] relative flex items-center justify-center">
        <div
          className="w-[10rem] h-[10rem] rounded-full miniTablet:h-[8rem] md:h-[10rem]"
          style={{ ...styles }}
        ></div>
        <img
          src={imgSrc}
          className="absolute translate-x-4 rotate-[-30deg] scale-100 miniTablet:scale-[2] xLgMd:scale-150 xlarge:scale-100 "
          alt=""
        />
      </div>
      <span className="text-xl font-bold text-[rgb(10,8,58)] tracking-wide lsm:text-center">
        {summary}
      </span>
      <p className="text-base tracking-wide text-gray-800 font-medium lg:text-base lsm:text-center ">
        {description}
      </p>
      <Link
        to={`/${productUrl}`}
        className={` text-sm font-semibold flex items-center justify-center gap-2`}
        style={{ color: textColors[id] }}
      >
        Shop collection
        <FiArrowRight />
      </Link>
    </div>
  );
};

export default OurProduct;
