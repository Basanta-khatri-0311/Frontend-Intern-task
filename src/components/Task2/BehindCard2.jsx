import React, { useState } from "react";
import image2 from "../../assets/Task2/image2.png";
import image3 from "../../assets/Task2/image3.png";

const BehindCard2 = () => {
  const [isClicked, setIsClicked] = useState(false)
  const handelClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className="relative w-[550px] h-[220px] group">
      <div
        className="card-with-curves bg-[#5492A0] flex items-center gap-6 w-full h-full px-4 py-4 text-white z-10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-1000 relative"
      >
        {/* Left Button */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <button onClick={handelClick}  className="bg-white text-black p-2 rounded-full shadow">
            <i className="ri-arrow-left-line text-4xl"></i>
          </button>
        </div>

        {/* Right Button */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
          <button onClick={handelClick} className="bg-white text-black p-2 rounded-full shadow">
            <i className="ri-arrow-right-line text-4xl"></i>
          </button>
        </div>

        {/* Slide Content */}
        <div className={`${isClicked? "block" : "hidden"}`}>
          <div className="absolute top-9 left-[36px] font-[Poppins] font-bold leading-[120%] text-[14px]">
            <p>
              Focused faces—learning <br /> mode: ON!
            </p>
          </div>
          <div className="absolute top-0 left-[80px]">
            <img src={image2} alt="" />
          </div>
        </div>
        <div className={`${isClicked? "hidden" : "block"}`}>
          <div className="absolute top-9 left-[36px] font-[Poppins] font-bold leading-[120%] text-[14px]">
            <p>Laptops, lessons, and a whole lot of growth!</p>
          </div>
          <div className="absolute top-0 left-[80px]">
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindCard2;
