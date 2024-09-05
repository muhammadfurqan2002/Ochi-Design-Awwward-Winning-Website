import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { BiPointer } from "react-icons/bi";
import { TbPointerCog } from "react-icons/tb";
const teamMembers = [
  {
    name: "Ihor Hulyahrodskyy",
    title: "Founder and CEO",
    image:
      "https://ochi.design/wp-content/uploads/2022/05/IMG_3112-1-304x330.jpg", // Replace with actual image URL
  },
  {
    name: "ANNA SYROTA",
    title: "Presentation Designer",
    image:
      "https://ochi.design/wp-content/uploads/2022/05/Kseniia-Palamarchuk-304x330.jpg", // Replace with actual image URL
  },
];

const Slider = () => {
  useEffect(() => {
    const id = document.getElementById("card-box");
    console.log(id.childNodes[4]);

    id.addEventListener("mouseenter", function (e) {
      gsap.to(id.childNodes[4], {
        opacity: 1,
        scale: 1,
      });
    });
    id.addEventListener("mouseleave", function (e) {
      gsap.to(id.childNodes[4], {
        opacity: 0,
        scale: 0,
      });
    });

    id.addEventListener("mousemove", function (dets) {
      gsap.to(id.childNodes[4], {
        x: dets.x - id.getBoundingClientRect().x - 90,
        y: dets.y - id.getBoundingClientRect().y - 110,
        cursor:"pointer"
      });
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  return (
    <div className="px-10 w-full md:px-32 flex  items-center overflow-hidden relative z-40  justify-center  min-h-screen">
      <div
        onClick={nextMember}
        id="card-box"
        className="relative h-[450px] w-full shadow-3xl  p-8 bg-gray-100 rounded-md  flex items-start"
      >
        {/* Background effect for stacked cards */}
        <div className="hidden md:flex absolute top-0  w-full h-full bg-opacity-0  items-center justify-center">
          <div className="bg-gray-400 right-10 opacity-50 w-[25px] h-[95%] absolute rounded-md -z-10 transform   translate-x-full ">
            <div className="bg-gray-400 w-full right-2 opacity-60   h-[88%] absolute rounded-md -z-20 transform translate-x-full  translate-y-[6.5%]"></div>
          </div>
        </div>

        {/* Actual card content */}
        <div className="absolute h-[90%]  text-black top-6 left-6 flex flex-col justify-between items-start">
          <h4>Ochi.</h4>
          <h1 className="text-5xl font-extrabold tracking-tighter uppercase">
            {teamMembers[currentIndex].name.split(" ")[0]}
            <br />
            {teamMembers[currentIndex].name.split(" ")[1]}
          </h1>
        </div>
        <div className="ml-auto relative flex items-start flex-col gap-3 text-black text-xs">
          <img
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            className="w-60 h-60 object-cover rounded-lg"
          />
          <h4>{teamMembers[currentIndex].title}</h4>
        </div>
        <div className="absolute font-extrabold bottom-6 right-6 text-5xl text-black">
          {`${currentIndex + 1}/${teamMembers.length}`}
        </div>
        <div className="absolute opacity-0 scale-0 ease-in  font-bold duration-75 bg-green-500 h-28 flex items-center justify-center w-28 rounded-full">
          <h4>NEXT</h4>
        </div>
      </div>
    </div>
  );
};

export default Slider;
