import logo from '../../Assets/Logo/Photoberry Golden 2.png'
import { Link, useLoaderData } from 'react-router-dom';
import Tiles from './Exicuter';
import { Helmet } from 'react-helmet';
import Aos from "aos";
import "aos/dist/aos.css";
import  { useCallback, useEffect } from 'react';



const Details = () => {


    const event = useLoaderData()
useEffect(() => {
  Aos.init();
}, []);
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
   const {
    
     category,
     title,
  
     thumbnail_img2,
     detail_img,
     details,

     special_services,
     pricing
   } = event;




    return (
      <div className=" bg-black">
        <Helmet>
          <title>Photoberry | {category}</title>
        </Helmet>
        <div className="bg-black h-screen">
          <div className="relative">
            <img
              className="w-full h-screen object-cover opacity-50"
              src={thumbnail_img2}
              alt=""
            />
            <div className="flex justify-center items-center">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className="absolute top-[40%]"
              >
                <div className="flex flex-col justify-center items-center">
                  <img className="w-36 lg:w-52" src={logo} alt="" />
                  <h1 className="capitalize text-center text-7xl mt-10 p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                    {category}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="capitalize text-center text-6xl mt-10 p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-thin h-full font-">
            {title}
          </h1>
          <div className="md:flex flex-col justify-center items-center gap-5">
            <div className="text-gray-200 relative md:w-[50%] ">
              <p className="p-5">{details}</p>
            </div>
            <div className="flex justify-center items-center">
              <div
                data-aos="fade-down"
                data-aos-anchor-placement="top-center"
                className="w-96 font-serif p-5  bg-gradient-to-b from-[#F8D17C] to-[#D29842]  rounded-xl h-full"
              >
                <h2 className="text-2xl font-bold">Special Services</h2>
                <ul className="list-disc ml-4 font-normal">
                  {special_services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <div className="flex bg-gray-200 rounded-lg w-52 flex-col ">
              <div className="p-2">
                <h1 className=" font-serif uppercase text-center">Pricing</h1>
                <h1 className=" font-serif font-bold  uppercase text-center">
                  {pricing}
                </h1>
              </div>
              <Link
                to="/contact"
                className="btn rounded-t-none border-none font-serif duration-500 hover:border hover:border-white  bg-gradient-to-tr from-[#F8D17C] to-[#D29842] hover:bg-gradient-to-tl  text-black capitalize btn-neutral"
              >
                Contact Us For Booking
              </Link>
            </div>
          </div>
        </div>
        <div className="h-screen pb-56 lg:pb-28">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="text-7xl capitalize text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-vibes p-5 mt-10 -mb-10 text-center"
          >
            Some Of Our Previous {category} Stories
          </h1>
          <div
            className="w-full h-full"
           
          >
            <Tiles detail_img={detail_img}></Tiles>
          </div>
        </div>
      </div>
    );
};

export default Details;