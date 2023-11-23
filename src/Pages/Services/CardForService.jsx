import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const CardForService = ({ ev }) => {
  const { id, category, thumbnail_img2, details_short, pricing, title } = ev;
useEffect(() => {
  Aos.init();
}, []);
  return (
    <div
      data-aos="fade-up"
      className={`card card-compact  bg-gradient-to-r from-[#F8D17C] to-[#D29842] shadow-xl`}
    >
      <figure>
        <img
          className="h-[500px] w-full object-cover"
          src={thumbnail_img2}
          alt={category}
        />
      </figure>
      <div className="p-5 text-center space-y-5">
        <h4 className=" capitalize p-2 text-xl font-semibold bg-gray-200 bg-opacity-50 rounded-xl ">
          {category}
        </h4>
        <h2 className="text-2xl font-serif uppercase">{title}</h2>
        <div className="flex justify-center">
          <hr className="border-1 border-black w-52" />
        </div>
        <p className="tracking-wide capitalize">{details_short}</p>
        <div className="flex justify-center">
          <hr className="border-1 border-black w-20" />
        </div>
        <div className="space-y-1 mt-2 bg-black bg-opacity-50 text-white pt-5 py-3 rounded-xl">
          <div>
            <h1 className=" uppercase font-thin tracking-wide">Pricing</h1>
            <p className="font-semibold">{pricing}</p>
          </div>
          <Link
            to={`/category/${id}`}
            className="btn btn- btn-ghost hover:text-gray-100"
          >
            Hire Us for {category} <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

CardForService.propTypes = {
  ev: PropTypes.obj,
};

export default CardForService;
