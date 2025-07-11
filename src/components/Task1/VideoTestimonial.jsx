import React from "react";

const VideoTestimonial = ({ video, playVideo, isHovered }) => {
  return (
    <div
      className={`absolute w-20 h-20 transition-all duration-500 ${
        isHovered
          ? "bottom-[5%] left-[65%] animate-bounce"
          : "bottom-[25%] left-[55%]"
      }`}
    >
      {/* IMAGE (peer) */}
      <img
        src={video}
        alt="video"
        className="w-full h-full object-cover peer cursor-pointer"
      />

      {/* VIDEO: positioned relative to image, shown on image hover */}
      <video
        src={playVideo}
        autoPlay
        muted
        loop
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        w-28 h-16 rounded-md shadow-md opacity-0 scale-75
        transition-all duration-[2s] ease-out
        peer-hover:opacity-100 peer-hover:scale-300 peer-hover:-translate-y-2
        pointer-events-none"
      />
    </div>
  );
};

export default VideoTestimonial;
