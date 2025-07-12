import React from "react";
import Heading from "../components/Task3/Heading";
import angular from "../assets/Task3/task3/Frame-1.png";
import react from "../assets/Task3/task3/Frame.png";
import vector from "../assets/Task3/task3/Group-1.png";
import vue from "../assets/Task3/task3/Group.png";

const Task3 = () => {
  return (
    <div className="h-[90%] bg-gray-100 flex items-center justify-center p-4 font-inter">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <Heading />

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#C33241] text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white text-[#C33241] px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 cursor-pointer">
              <span>View all Courses</span>
            </div>
            <div className="flex flex-wrap gap-4 mb-8 mt-12">
              <div className="bg-white p-3 rounded-full shadow-md">
                <img src={react} alt="React Icon" className="w-8 h-8" />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <img src={vue} alt="Vue Icon" className="w-8 h-8" />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <img src={angular} alt="Angular Icon" className="w-8 h-8" />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <img src={vector} alt="JS Icon" className="w-8 h-8" />
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
          <div className="bg-red-100 text-[#C33241] rounded-2xl shadow-lg p-8 flex flex-col justify-between relative overflow-hidden">
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
          <div className="bg-red-100 text-[#C33241] rounded-2xl shadow-lg p-8 flex flex-col justify-between relative overflow-hidden">
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
