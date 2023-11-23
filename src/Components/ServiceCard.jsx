
import PropTypes from 'prop-types';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
 



const ServiceCard = ({event}) => {
useEffect(() => {
  Aos.init();
}, []);



    const { id, category, thumbnail_img2, details_short, pricing, title } =
      event;


    return (
      <div className="hover:cursor-grab w-full">
        <div
          className={`card w-80 md:w-full  card-compact bg-gradient-to-r from-[#F8D17C] to-[#D29842] shadow-xl`}
        >
          <figure>
            <img
              src={thumbnail_img2}
              className="h-72 w-full md:h-96 object-cover"
              alt={category}
            />
          </figure>
          <div className="card-body">
            <h4 className="text-left capitalize p-2 font-semibold bg-gray-200 bg-opacity-50 rounded-xl ">
              {category}
            </h4>
            <h2 className="text-xl font-serif uppercase">{title}</h2>
            <div className="flex justify-center">
              <hr className="border-1 border-black w-52" />
            </div>
            <p className="tracking-wide capitalize">{details_short}</p>
            <div className="flex justify-center">
              <hr className="border-1 border-black w-20" />
            </div>
            <div className="space-y-1 mt-2 bg-black bg-opacity-50 text-white py-2 rounded-xl">
              <div>
                <h1 className=" uppercase font-thin tracking-wide">Pricing</h1>
                <p className="font-semibold">{pricing}</p>
              </div>
              <Link
                to={`/category/${id}`}
                className="btn btn-sm btn-ghost hover:text-gray-100"
              >
                Hire Us for {category} <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

ServiceCard.propTypes = {
    event: PropTypes.obj
};

export default ServiceCard;