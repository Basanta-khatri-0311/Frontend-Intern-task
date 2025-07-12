import React from "react";
import BehindCard2 from "./BehindCard2";
import FrontCard2 from "./FrontCard2";


const FinalCard2 = () => {
  return (
    <div className="relative w-[550px] h-[220px] group">
      {/* Card behind */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BehindCard2 />
      </div>

      {/* Card in front */}
      <div className="absolute top-0 left-0 w-full h-full z-10 transition-all duration-1000 group-hover:-translate-x-[200%] group-hover:opacity-0">
        <FrontCard2 />
      </div>
    </div>
  );
};

export default FinalCard2;
