import Slider from "./Slider";
import bg from '../../Assets/Simple Shiny.svg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const WorkFlow = ({ev}) => {
  useEffect(() => {
    Aos.init();
  }, []);

    return (
      <div className="relative bg-black bg-opacity-70  my-10">
        <div className="container relative z-10 mx-auto">
          <div className="flex flex-col-reverse lg:grid grid-cols-4 justify-center items-center py-10">
            <div data-aos="fade-up-right" className="col-span-2">
              <div className="md:grid mb-20 grid-cols-2 text-center">
                <div className="md:p-6 space-y-5 ">
                  <h1 className="uppercase text-5xl py-5 text-transparent bg-clip-text bg-gradient-to-t from-[#F8D17C] to-[#D29842] text-center font-serif">
                    Planning
                  </h1>
                  <p className="text-gray-200 md:h-36">
                    We pride ourselves on crafting unforgettable moments through
                    meticulous event planning. With a wealth of experience,
                    creativity, and a deep passion for making dreams come true,
                    we specialize in orchestrating flawless events, including
                    birthdays and weddings.
                  </p>
                  <hr className="border-1 border-yellow-300" />
                </div>
                <div className="md:p-6 space-y-5 ">
                  <h1 className="uppercase text-5xl py-5 text-transparent bg-clip-text bg-gradient-to-t from-[#F8D17C] to-[#D29842] text-center font-serif">
                    Design
                  </h1>
                  <p className="text-gray-200 md:h-36">
                    As expert event planners, our mission is to turn your dreams
                    into reality. We specialize in crafting unforgettable
                    moments for every occasion, from birthdays to weddings and
                    beyond. Our design philosophy is rooted in creativity,
                    precision, and a deep understanding.
                  </p>
                  <hr className="border-1 border-yellow-300" />
                </div>
                <div className="md:p-6 space-y-5 ">
                  <h1 className="uppercase text-5xl py-5 text-transparent bg-clip-text bg-gradient-to-t from-[#F8D17C] to-[#D29842] text-center font-serif">
                    Production
                  </h1>
                  <p className="text-gray-200 md:h-36">
                    Behind the scenes, our expert planners work tirelessly to
                    manage logistics seamlessly. We coordinate with vendors,
                    caterers, and entertainers to ensure smooth execution.
                  </p>
                  <hr className="border-1 border-yellow-300" />
                </div>
                <div className="md:p-6 space-y-5 ">
                  <h1 className="uppercase text-5xl py-5 text-transparent bg-clip-text bg-gradient-to-t from-[#F8D17C] to-[#D29842] text-center font-serif">
                    Cultivation
                  </h1>
                  <p className="text-gray-200 md:h-36">
                    We take pride in our unique approach to event planning,
                    which we fondly refer to as "Cultivation." Cultivation is
                    not just a service; it's a philosophy that guides every
                    event we curate.
                  </p>
                  <hr className="hidden md:flex border-1 border-yellow-300" />
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <Slider ev={ev}></Slider>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="absolute top-0 -z-0 opacity-50 w-full h-full"
            src={bg}
            alt=""
          />
        </div>
      </div>
    );
};

export default WorkFlow;