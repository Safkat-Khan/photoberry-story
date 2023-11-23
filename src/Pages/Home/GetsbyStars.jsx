import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import wedding from "../../Assets/wedding-1.jpg";
import wedding2 from "../../Assets/wedding-3.jpg";
import wedding3 from "../../Assets/wedding-4.jpg";
import wedding4 from "../../Assets/wedding-6.jpg";
import wedding5 from "../../Assets/wedding-7.jpg";
import wedding6 from "../../Assets/wedding-8.jpg";
import logo from '../../Assets/Logo/Photoberry Golden 2.png'

import { Swiper, SwiperSlide } from "swiper/react";
import Aos from 'aos'
import 'aos/dist/aos.css'



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./styles.css";

// import required modules
import {EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";


export default function GetsbyStars() {
  



  return (
    <div className="h-full">
      <div className=" bg-black bg-opacity-70 h-screen relative">
        <div className="absolute w-screen h-screen z-10">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars />
          </Canvas>
        </div>

        <div className="flex justify-center h-full items-center">
          <div className="-mt-36 md:-mt-32 lg:mt-0 absolute z-20">
            <img className="w-28 lg:w-52" src={logo} alt="" />
          </div>
        </div>

        <div className="absolute h-screen top-0  w-full">
          <>
            <Swiper
              spaceBetween={0}
              effect={"fade"}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[EffectFade, Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-black w-full h-screen opacity-80">
                  <img
                    src={wedding}
                    className="opacity-50 h-screen w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className=" bottom-0 lg:bottom-24 md:bottom-0 w-full text-center absolute">
                  <h1 className="text-7xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                    Your Dream Event, Our Expertise
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black w-full h-screen opacity-80">
                  <img
                    src={wedding2}
                    className="opacity-50 h-screen w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className=" bottom-0 lg:bottom-24 md:bottom-0 w-full text-center absolute">
                  <h1 className="text-7xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                    Turning Visions into Reality
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black w-full h-screen opacity-80">
                  <img
                    src={wedding3}
                    className="opacity-50 h-screen w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className=" bottom-0 lg:bottom-24 md:bottom-0 w-full text-center absolute">
                  <h1 className="text-7xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                    Crafting Memories, One Event at a Time
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black w-full h-screen opacity-80">
                  <img
                    src={wedding4}
                    className="opacity-50 h-screen w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className=" bottom-0 lg:bottom-24 md:bottom-0 w-full text-center absolute">
                  <h1 className="text-7xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                    Elevate Your Celebrations
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black w-full h-screen opacity-80">
                  <img
                    src={wedding5}
                    className="opacity-50 h-screen w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className=" bottom-0 lg:bottom-24 md:bottom-0 w-full text-center absolute">
                  <h1 className="text-7xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                    Exceptional Events, Extraordinary Memories
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black w-full h-screen opacity-80">
                  <img
                    src={wedding6}
                    className="opacity-50 h-screen w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className=" bottom-0 lg:bottom-24 md:bottom-0 w-full text-center absolute">
                  <h1 className="text-7xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                    Turning Moments into Masterpieces
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#E3B15C"
          size={0.005}
          sizeAtnormalation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
