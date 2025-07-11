import React from "react";

const TestimonialImage = ({isHovered , testimonial}) => {
  return (
    <div
      className={`absolute w-20 h-20 transition-all duration-500  ${
        isHovered
          ? "top-[5%] left-[25%] animate-bounce"
          : "top-[25%] left-[33%]"
      }`}
    >
      {/* Image with peer */}
      <img
        src={testimonial}
        alt="testimonial"
        className="w-full h-full object-cover peer"
      />

      {/* Hover Text (Right side) */}
      <div
        className="absolute left-full top-1/2 -translate-y-1/2 -ml-2 px-4 py-1 text-[8px] font-normal shadow-lg whitespace-nowrap 
            opacity-0 bg-gray-200 peer-hover:opacity-100 transition-opacity duration-[1s] z-20"
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
          WebkitClipPath:
            "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
        }}
      >
        Amazing ⭐⭐⭐⭐⭐
      </div>

      {/* Testimonial Text (Below Image) */}
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-96 bg-white rounded-lg shadow-lg opacity-0 scale-0 -translate-y-16
    peer-hover:opacity-100 peer-hover:scale-70 peer-hover:translate-y-0 transition-all duration-[3s]  ease-out origin-top z-50"
      >
        <p className="font-[outfit] text-[1px] leading-tight text-[#2B2B2B]">
          I was amazed and impressed by the course structure as it was
          distinctly different from other courses in the market. The classes
          were highly interactive and the instructor was very humble and
          friendly. Recordings of the classes were provided within a short time
          after each class, which made revision very easy and beneficial. I have
          recommended the same course to my data-enthusiast friends.
        </p>
        <p className="text-right mt-2 text-xs font-normal text-gray-700">
          — Rajesh Dhakal, Digital Marketing Student
        </p>
      </div>
    </div>
  );
};

export default TestimonialImage;
