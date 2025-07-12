import React from "react";
import learn from "../../assets/Task2/Learn.svg";

const Card2 = () => {
  return (
    <div className="flex gap-6 bg-[#5492A0] w-[550px] h-[220px] rounded-2xl px-4 py-4 transition-all hover:-translate-x-[200%] hover:opacity-0 duration-1000">
      <div className="flex flex-col gap-2">
        <p className="font-[Poppins] text-2xl font-bold text-white mb-2">
          Learn By Doing
        </p>
        <p className="font-[outfit] text-white font-medium text-lg mb-2">
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
          className="w-full h-full object-contain bounceimage-up "
          src={learn}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card2;
