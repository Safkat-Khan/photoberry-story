import { useLoaderData } from "react-router-dom";
import logo from "../../Assets/Logo/Photoberry Golden 2.png";
import CardForService from "./CardForService";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
 



const Services = () => {
const events = useLoaderData()
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
useEffect(() => {
  Aos.init();
}, []);
console.log(events)

  return (
    <div className="bg-black">
      <div data-aos="fade-up" className="pt-40 ">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img className="w-36 lg:w-52" src={logo} alt="" />
            <h1 className="capitalize text-center text-7xl mt-10 p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
              Our services
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-5 md:space-y-0 md:grid grid-cols-2 gap-5 px-5">
        {events.slice(0, 6).map((ev) => (
          <CardForService
          
            key={ev.id}
            ev={ev}
          ></CardForService>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-full px-5 md:w-[45.7%]">
          {events.slice(5, 6).map((ev) => (
            <CardForService key={ev.id} ev={ev}></CardForService>
          ))}
        </div>
      </div>
      <h1 className="capitalize text-center text-7xl py-36 p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
        your satisfaction is our main priority
      </h1>
    </div>
  );
};

export default Services;
