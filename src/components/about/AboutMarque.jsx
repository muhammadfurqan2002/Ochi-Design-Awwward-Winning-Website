import React from "react";
import { motion } from "framer-motion";
import Slider from "./Slider";
function AboutMarque() {
  return (
    <div
      className="w-full  bg-[#004D43] rounded-tl-2xl rounded-tr-2xl pb-20"
    >
      <div className="pt-28">
        <div className="text border-t-2 flex items-center overflow-hidden whitespace-nowrap border-b-2 border-zinc-300 pr-20">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[25vw] font-["Founders Grotesk"] font-bold pt-5 pb-5 tracking-tighter leading-none pl-10 uppercase '
          >
            Core of the team
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[25vw] font-["Founders Grotesk"] font-bold pt-5 pb-5 pl-10 tracking-tighter leading-none uppercase '
          >
            core of the team
          </motion.h1>
        </div>
        <div className="md:pt-10">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default AboutMarque;
