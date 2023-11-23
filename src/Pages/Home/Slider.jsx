
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/effect-cards";

import "./silder.css";


import {Mousewheel, EffectCards, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Slider({ ev }) {

  

  return (
    <div className="">
      <Swiper
        effect={"cards"}
        mousewheel={true}
        modules={[EffectCards, Mousewheel, Autoplay]}
        className="mySwiper2 "
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        {ev.map((e) => (
          <SwiperSlide key={e.id} className="swiper-slide100 rounded-xl">
            <img className="" src={e.thumbnail_img} alt="" />
            <h4 className="absolute text-3xl shadow-sm p-2 w-full shadow-black font-extrabold text-stroke-3 text-yellow-500 bottom-10 rounded bg-black bg-opacity-50">
              {e.title_sm}
            </h4>
            <Link
              to={`/category/${e.id}`}
              className="h-full bottom-0 absolute  w-full"
            ></Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
Slider.propTypes = {
  ev: PropTypes.array,
};






