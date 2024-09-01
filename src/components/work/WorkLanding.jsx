import React from "react";
import WorkEye from "./WorkEye";
import WorkPurpose from "./WorkPurpose";

function WorkLanding() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="bg-green-500 w-full h-[32rem] relative pt-1"
    >
      <div className="mt-32 px-10 relative inline-block">
        <h1 className="text-8xl tracking-tighter font-bold">WORK</h1>
        <span className="absolute tracking-tighter top-0 right-0">(11)</span>
      </div>
      <div data-scroll data-scroll-section data-scroll-speed="-.5" className="relative top-[45%]">
        <WorkEye />
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[80vw] rounded-tl-md rounded-tr-md  py-7 z-10  bg-[#BFDA62] absolute bottom-[4%]"></div>
        <div className="w-[90vw] rounded-tl-md rounded-tr-md py-6 z-20  bg-[#B8D25E] absolute bottom-[-2%]"></div>
      </div>
    </div>
  );
}

export default WorkLanding;
