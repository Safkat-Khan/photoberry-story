
import PropTypes from 'prop-types';



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import './services.css';


import {
  EffectCoverflow,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import ServiceCard from '../../Components/ServiceCard';



const Services = ({ev}) => {

 
    return (
      <div className="my-10 space-y-10 container mx-auto">
        <div className="text-center">
          <h1 className="text-6xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] text-center font-serif">
            Our Service Offerings Diverse Spectrum
          </h1>
        </div>
        <Swiper
          className="swiper_container00 "
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          mousewheel={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Mousewheel, EffectCoverflow, Autoplay]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
        >
          {ev.map((event) => (
            <SwiperSlide className="swiper-slide000" key={event.id}>
              <ServiceCard event={event}></ServiceCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

Services.propTypes = {
    ev: PropTypes.array.isRequired
};

export default Services;