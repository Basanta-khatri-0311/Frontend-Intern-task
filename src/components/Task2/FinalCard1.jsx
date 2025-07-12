import React from "react";
import BehindCard1 from "./BehindCard1";
import FrontCard1 from "./FrontCard1";

const FinalCard1 = () => {
  return (
    <div className="relative w-[550px] h-[220px] group">
      {/* Card behind */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BehindCard1 />
      </div>

      {/* Card in front */}
      <div className="absolute top-0 left-0 w-full h-full z-10 transition-all duration-1000 group-hover:-translate-x-[200%] group-hover:opacity-0">
        <FrontCard1 />
      </div>
    </div>
  );
};

export default FinalCard1;
