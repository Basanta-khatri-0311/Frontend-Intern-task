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

  const images = [
    {
      src: likegif,
      alt: "like",
      defaultPos: "top-[30%] left-[45%]",
      hoverPos: "top-[20%] left-[45%]",
      bounce: false,
    },
    {
      src: person3,
      alt: "person3",
      defaultPos: "top-[30%] left-[55%]",
      hoverPos: "top-[10%] left-[65%]",
      bounce: true,
    },
    {
      src: person4,
      alt: "person4",
      defaultPos: "bottom-[50%] right-[30%]",
      hoverPos: "bottom-[50%] right-[15%]",
      bounce: true,
    },
    {
      src: likesgif,
      alt: "likes",
      defaultPos: "bottom-[35%] right-[32%]",
      hoverPos: "bottom-[35%] right-[20%]",
      bounce: false,
    },
    {
      src: video,
      alt: "video",
      defaultPos: "bottom-[30%] left-[55%]",
      hoverPos: "bottom-[15%] left-[65%]",
      bounce: true,
    },
    {
      src: trophygif,
      alt: "trophy",
      defaultPos: "bottom-[30%] left-[45%]",
      hoverPos: "bottom-[15%] left-[45%]",
      bounce: false,
    },
    {
      src: person1,
      alt: "person1",
      defaultPos: "bottom-[30%] left-[37%]",
      hoverPos: "bottom-[15%] left-[25%]",
      bounce: true,
    },
    {
      src: happy,
      alt: "happy",
      defaultPos: "bottom-[35%] left-[30%]",
      hoverPos: "bottom-[45%] left-[20%]",
      bounce: false,
    },
    {
      src: testimonial,
      alt: "testimonial",
      defaultPos: "top-[29%] left-[33%]",
      hoverPos: "top-[10%] left-[30%]",
      bounce: true,
    },
    {
      src: person2,
      alt: "person2",
      defaultPos: "top-[45%] left-[28%]",
      hoverPos: "top-[25%] left-[15%]",
      bounce: true,
    },
  ];

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-0">
        {images.map(({ src, alt, defaultPos, hoverPos, bounce }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className={`absolute w-20 transition-all duration-500 ${
              isHovered ? hoverPos : defaultPos
            } ${isHovered && bounce ? "animate-bounce" : ""}`}
          />
        ))}
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
