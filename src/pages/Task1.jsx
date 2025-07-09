import React from "react";
import ButtonCompo from "../components/Task1/ButtonCompo";


const Task1 = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex gap-5 flex-col justify-center items-center">
        <p className="font-[outfit] font-normal text-[24px] leading-[100%] tracking-normal text-[#414141]">
          Hear How They Level Up Their Game!
        </p>
        <p className="font-[Poppins] font-bold text-[32px] leading-[120%] tracking-normal">
          Skill <span className="text-[#37a077] ">Masters</span> Unite! 🤝
        </p>
        <ButtonCompo/>
      </div>
    </div>
  );
};

export default Task1;
