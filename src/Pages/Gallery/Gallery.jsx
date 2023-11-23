import { imageListClasses } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import './gallery.css'
import { useEffect, useState } from "react";
import {RxCross1} from 'react-icons/rx'
import logo from "../../Assets/Logo/Photoberry Golden 2.png";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
 


const Gallery = () => {
    const gallery = useLoaderData()
   const [modal,setModal] = useState(false)
   const [imgUrl,setImgUrl] = useState('')

useEffect(() => {
  Aos.init();
}, []);

    const getImg = (url) => {
        setImgUrl(url)
        setModal(true)
    }
console.log(imgUrl)
    return (
      <div className="bg-black pb-10">
        <Helmet>
          <title>Photoberry | Gallery</title>
        </Helmet>
        <div data-aos="fade-up" className="pt-40 ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img className="w-36 lg:w-52" src={logo} alt="" />
              <h1 className="capitalize text-center text-7xl mt-10 p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] font-bold h-full font-vibes">
                some of our incredible stories
              </h1>
            </div>
          </div>
        </div>
        <div className={modal ? "modalIn modalOp" : "modalIn"}>
          <img src={imgUrl} alt="" />
          <RxCross1
            onClick={() => setModal(false)}
            className="text-black hover:cursor-pointer fixed top-5 right-5 text-3xl rounded-full bg-yellow-50 p-1"
          />
        </div>
        <div className="gallery h-full pt-20">
          {gallery.map((g) => (
            <div
              data-aos="fade-up"
              onClick={() => getImg(g.url)}
              className="pics"
              key={g.id}
            >
              <img className="w-full" src={g.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Gallery;