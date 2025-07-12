import React from "react";
import mentor from "../../assets/Task2/Mentor.svg";

const Card3 = () => {
  return (
    <div className="flex items-center gap-6 bg-[#6C64A8] w-[550px] h-[220px] rounded-2xl px-4 py-4">
      <img className="h-[220px] -ml-24" src={mentor} alt="" />
      <div>
        <p className="font-[Poppins] text-right text-2xl font-bold text-white mb-2">
          Get Mentored & Supported
        </p>
        <p className="font-[outfit] text-right text-white font-medium text-lg mb-2">
          You're not learning alone.
        </p>
        <p className="font-[outfit] text-right text-white text-sm font-normal">
          Stuck or need feedback? SkillShikshya’s community of mentors and
          learners has your back with live support, interactive discussions, and
          expert insights. You’re never on your own.
        </p>
      </div>
    </div>
  );
};

export default Card3;
