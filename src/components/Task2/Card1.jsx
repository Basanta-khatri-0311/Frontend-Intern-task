import React from "react";
import clarity from "../../assets/Task2/Clarity.svg";

const Card1 = () => {
  return (
    <div className="flex items-center gap-6 bg-[#F45B5B] w-[550px] h-[220px] rounded-2xl px-4 py-4 transition-all hover:-translate-x-[200%] hover:opacity-0 duration-1000">
      <img
        className="h-[220px] bounceimage-down -ml-24 self-center"
        src={clarity}
        alt=""
      />
      <div>
        <p className="font-[Poppins] text-right text-4xl font-bold text-white mb-2">
          Start with Clarity
        </p>
        <p className="font-[outfit] text-right text-white font-medium text-2xl mb-2">
          Step into a better learning path.
        </p>
        <p className="font-[outfit] text-right text-white text-sm font-normal">
          Overwhelmed by too many learning options? SkillShikshya provides a
          clear, curated roadmap from the start. Whether you're a beginner or
          upskilling, we have a path tailored to your growth.
        </p>
      </div>
    </div>
  );
};

export default Card1;
