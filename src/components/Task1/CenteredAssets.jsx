import React, { useState } from "react";
import person1 from "../../assets/Task1/image20.png";
import happy from "../../assets/Task1/happy.gif";
import person2 from "../../assets/Task1/image-1.png";
import person3 from "../../assets/Task1/image.png";
import person4 from "../../assets/Task1/image21.png";
import testimonial from "../../assets/Task1/testimonial.png";
import likegif from "../../assets/Task1/like.gif";
import likesgif from "../../assets/Task1/likes.gif";
import trophygif from "../../assets/Task1/trophy.gif";
import video from "../../assets/Task1/video.png";

const CenteredAssets = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="absolute inset-0 z-0">
        <img
          src={likegif}
          alt="like"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered ? "top-[20%] left-[45%]" : "top-[30%] left-[45%]"
          }`}
        />

        <img
          src={person3}
          alt="person3"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered
              ? "top-[10%] left-[65%] animate-bounce"
              : "top-[30%] left-[55%]"
          }`}
        />

        <img
          src={person4}
          alt="person4"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered
              ? "bottom-[50%] right-[15%] animate-bounce"
              : "bottom-[50%] right-[30%]"
          }`}
        />

        <img
          src={likesgif}
          alt="likes"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered ? "bottom-[35%] right-[20%]" : "bottom-[35%] right-[32%]"
          }`}
        />

        <img
          src={video}
          alt="video"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered
              ? "bottom-[15%] left-[65%] animate-bounce"
              : "bottom-[30%] left-[55%]"
          }`}
        />

        <img
          src={trophygif}
          alt="trophy"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered ? "bottom-[15%] left-[45%]" : "bottom-[30%] left-[45%]"
          }`}
        />

        <img
          src={person1}
          alt="person1"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered
              ? "bottom-[15%] left-[25%] animate-bounce"
              : "bottom-[30%] left-[37%]"
          }`}
        />

        <img
          src={happy}
          alt="happy"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered ? "bottom-[45%] left-[20%]" : "bottom-[35%] left-[30%]"
          }`}
        />

        <img
          src={testimonial}
          alt="testimonial"
          className={`absolute w-20 transition-all duration-500 hover:border-2 border-sky-600 ${
            isHovered
              ? "top-[10%] left-[30%] animate-bounce"
              : "top-[29%] left-[33%]"
          }`}
        />

        <img
          src={person2}
          alt="person2"
          className={`absolute w-20 transition-all duration-500 ${
            isHovered
              ? "top-[25%] left-[15%] animate-bounce"
              : "top-[45%] left-[28%]"
          }`}
        />
      </div>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${
          isHovered ? "cursor-pointer" : ""
        } h-[80%] w-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      />
    </>
  );
};

export default CenteredAssets;
