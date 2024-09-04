import React, { useState } from "react";

const teamMembers = [
  {
    name: "Ihor Hulyahrodskyy",
    title: "Founder and CEO",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Another Member",
    title: "Role",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Yet Another Member",
    title: "Role",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Fourth Member",
    title: "Role",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  return (
    <div className="px-10 w-full md:px-32 flex bg-[#004D43] items-center overflow-hidden relative z-40 top-20  justify-center shadow-2xl min-h-screen">
      <div className="relative h-[450px] w-full shadow-3xl  p-8 bg-gray-100 rounded-md  flex items-start">
        {/* Background effect for stacked cards */}
        <div className="hidden md:flex absolute top-0  w-full h-full bg-opacity-0  items-center justify-center">
          <div className="bg-gray-400 right-10 opacity-50 w-[25px] h-[95%] absolute rounded-md -z-10 transform translate-x-full ">
            <div className="bg-gray-400 w-full right-2 opacity-60   h-[90%] absolute rounded-md -z-20 transform translate-x-full translate-y-[5%]"></div>
          </div>
        </div>

        {/* Actual card content */}
        <div className="absolute top-6 left-6">
          <h1 className="text-4xl font-bold">
            {teamMembers[currentIndex].name.split(" ")[0]}
            <br />
            {teamMembers[currentIndex].name.split(" ")[1]}
          </h1>
        </div>
        <div className="ml-auto relative flex items-center">
          <img
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            className="w-60 h-60 object-cover rounded-lg"
          />
          <button
            onClick={nextMember}
            className="absolute p-3 bg-lime-500 text-white rounded-full"
            style={{ left: "50%", transform: "translate(-50%, 50%)" }}
          >
            NEXT
          </button>
        </div>
        <div className="absolute bottom-6 right-6 text-2xl">
          {`${currentIndex + 1}/${teamMembers.length}`}
        </div>
      </div>
    </div>
  );
};

export default Slider;
