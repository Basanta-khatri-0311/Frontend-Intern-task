import React from "react";
import Heading from "../components/Task3/Heading";

const Task3 = () => {
  return (
    <div className="h-[90%] bg-gray-100 flex items-center justify-center p-4 font-inter">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Heading/>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-red-600 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 cursor-pointer">
              <span>View all Courses</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
            <div className="flex flex-wrap gap-4 mb-8 mt-12">
              {/* Placeholder icons - replace with actual icons or SVGs */}
              <div className="bg-white p-3 rounded-full shadow-md">
                <img
                  src="https://placehold.co/32x32/ff0000/ffffff?text=R"
                  alt="React Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <img
                  src="https://placehold.co/32x32/00ff00/ffffff?text=V"
                  alt="Vue Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <img
                  src="https://placehold.co/32x32/0000ff/ffffff?text=A"
                  alt="Angular Icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <img
                  src="https://placehold.co/32x32/ffff00/000000?text=JS"
                  alt="JS Icon"
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-7xl font-extrabold leading-none">
                23<span className="text-4xl align-top">+</span>
              </p>
              <p className="text-2xl font-semibold mt-2">All Courses</p>
              <p className="text-lg opacity-90">
                courses you're powering through right now.
              </p>
            </div>
          </div>

          {/* Upcoming Courses Card */}
          <div className="bg-red-100 text-red-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Removed "Kshitiz Rajan" as it's not in the new image */}
            <div className="flex flex-col h-full justify-center text-center">
              {" "}
              {/* Centered content */}
              <p className="text-4xl font-bold mb-2">Upcoming</p>
              <p className="text-4xl font-bold mb-4">Courses</p>
              <p className="text-lg opacity-90">
                exciting new courses waiting to boost your skills.
              </p>
            </div>
            <div className="mt-auto text-center">
              <p className="text-7xl font-extrabold leading-none">
                05<span className="text-4xl align-top">+</span>
              </p>
            </div>
          </div>

          {/* Ongoing Courses Card */}
          <div className="bg-red-100 text-red-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="flex flex-col h-full justify-center text-center">
              {" "}
              {/* Centered content */}
              <p className="text-4xl font-bold mb-2">Ongoing</p>
              <p className="text-4xl font-bold mb-4">Courses</p>
              <p className="text-lg opacity-90">
                currently happening—don't miss out on the action!
              </p>
            </div>
            <div className="mt-auto text-center">
              <p className="text-7xl font-extrabold leading-none">
                10<span className="text-4xl align-top">+</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task3;
