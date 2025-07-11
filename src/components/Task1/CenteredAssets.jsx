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
import playVideo from "../../assets/Task1/video.mp4";
import TestimonialImage from "./TestimonialImage";
import VideoTestimonial from "./VideoTestimonial";

const CenteredAssets = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-[80%] w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
    >
      <img
        src={likegif}
        alt="like"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered ? "top-[15%] left-[45%]" : "top-[25%] left-[45%]"
        }`}
      />

      <img
        src={person3}
        alt="person3"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered
            ? "top-[10%] left-[65%] animate-bounce"
            : "top-[25%] left-[55%]"
        }`}
      />

      <img
        src={person4}
        alt="person4"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered
            ? "bottom-[50%] right-[10%] animate-bounce"
            : "bottom-[50%] right-[25%]"
        }`}
      />

      <img
        src={likesgif}
        alt="likes"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered ? "bottom-[25%] right-[15%]" : "bottom-[30%] right-[30%]"
        }`}
      />

      <VideoTestimonial video={video} isHovered={isHovered} playVideo={playVideo}/>

      <img
        src={trophygif}
        alt="trophy"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered ? "bottom-[2%] left-[45%]" : "bottom-[25%] left-[45%]"
        }`}
      />

      <img
        src={person1}
        alt="person1"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered
            ? "bottom-[5%] left-[25%] animate-bounce"
            : "bottom-[25%] left-[37%]"
        }`}
      />

      <img
        src={happy}
        alt="happy"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered ? "bottom-[40%] left-[10%]" : "bottom-[30%] left-[30%]"
        }`}
      />

      <TestimonialImage isHovered={isHovered} testimonial={testimonial} />

      <img
        src={person2}
        alt="person2"
        className={`absolute w-20 transition-all duration-500 ${
          isHovered
            ? "top-[20%] left-[5%] animate-bounce"
            : "top-[40%] left-[25%]"
        }`}
      />
    </div>
  );
};

export default CenteredAssets;
