import React from "react";
import behindimage from '../../assets/Task2/behindimage.png'

const BehindCard1 = () => {
  return (
    <div className="relative w-[550px] h-[220px]">
      <div
        className="card-with-curves bg-[#F45B5B] flex items-center gap-6 w-full h-full px-4 py-4 text-white z-10 
      opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
      >
        {/* Left Button */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <button className="bg-white text-black p-2 rounded-full shadow">
            <i className="ri-arrow-left-line text-4xl"></i>
          </button>
        </div>

        {/* Right Button */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
          <button className="bg-white text-black p-2 rounded-full shadow">
            <i className="ri-arrow-right-line text-4xl"></i>
          </button>
        </div>
         <div className="relative">
          <img  className="w-[350px] h-[350px]" src={behindimage} alt="behindimage" />
        </div>
        <div className="absolute top-14 left-[320px] font-[Poppins] font-bold leading-[120%] text-[20px]"><p>Clarity unlocked—stickers, sips, and skills all in one go!</p></div>
      </div>
    </div>
  );
};

export default BehindCard1;
