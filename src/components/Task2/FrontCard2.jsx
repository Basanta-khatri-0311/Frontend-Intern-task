import React from "react";
import learn from "../../assets/Task2/Learn.svg";

const FrontCard2 = () => {
  return (
    <div
      className="flex items-center gap-6 bg-[#5492A0] w-full h-full 
      rounded-4xl px-4 py-4"
    >
      {/* Image container with fixed size */}
      {/* Text content */}
      <div className="text-white flex flex-col gap-4">
        <p className="font-[Poppins] text-4xl font-bold mb-2">Learn By Doing</p>
        <p className="font-[outfit] font-normal text-2xl mb-2">
          Practical skills, real projects.
        </p>
        <p className="font-[outfit] text-white text-sm font-normal">
          Theory is great, but action is better. At SkillShikshya, you learn by
          doing. Hands-on projects and real-world scenarios help you build,
          break, and create—leading to true mastery.
        </p>
      </div>
      <div className="h-[300px] w-[800px] -mr-24">
        <img
          className="w-full h-full object-contain bounceimage-up"
          src={learn}
          alt="learn"
        />
      </div>
    </div>
  );
};

export default FrontCard2;
