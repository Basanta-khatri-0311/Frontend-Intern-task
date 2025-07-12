import React from "react";
import job from "../../assets/Task2/Job.svg";

const Card4 = () => {
  return (
    <div className="flex items-center gap-6 bg-[#A88964] w-[550px] h-[220px] rounded-2xl px-4 py-4">
      <div>
        <p className="font-[Poppins] text-2xl font-bold text-white mb-2">
          Achieve & Showcase
        </p>
        <p className="font-[outfit] text-white font-medium text-lg mb-2">
          Build your portfolio, get job-ready.
        </p>
        <p className="font-[outfit] text-white text-sm font-normal">
          Your journey ends with achievement. Each completed project builds a
          portfolio showcasing your skills and job readiness, bringing you
          closer to that dream job, promotion, or your own venture.
        </p>
      </div>
      <img className="h-[220px] -mr-24" src={job} alt="" />
    </div>
  );
};

export default Card4;
