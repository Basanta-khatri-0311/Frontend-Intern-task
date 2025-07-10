import React from "react";

const ButtonCompo = () => {
  return (
    <button className="group font-[outfit] font-semibold text-[18px] leading-[100%] tracking-normal text-[#2B2B2B]  flex items-center gap-1 ">
      View all Testimonials{" "}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="size-4 text-[#2B2B2B] transition-transform duration-300 group-hover:translate-x-1 arrow-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </button>
  );
};

export default ButtonCompo;
