import React from 'react';

const AboutUs = () => {
    return (
      <div className="flex flex-col text-center my-16 h-full justify-center items-center gap-5">
        <p className="uppercase tracking-wide">
          Located in Chittagong with a global reach for travel
        </p>
        <h2 className="text-5xl p-5 text-transparent bg-clip-text bg-gradient-to-b from-[#F8D17C] to-[#D29842] text-center font-serif">
          Crafting Unforgettable Moments <br /> Your Wedding and Event
          Specialists
        </h2>
        <div className="w-20 h-[1px] bg-black"></div>
        <p className="text-center">
          "From tailor-made weddings to exquisite corporate gatherings that{" "}
          <br />
          foster lasting connections, Fox Events possesses the artistry to turn{" "}
          <br />
          unique venues into indelible memories."
        </p>
      </div>
    );
};

export default AboutUs;