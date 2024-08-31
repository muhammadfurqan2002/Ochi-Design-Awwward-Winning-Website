import React from "react";
import { motion } from "framer-motion";
function WorkMarquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className="w-full  bg-green-900 rounded-tl-2xl rounded-tr-2xl">
      <div className="pt-28">
        <div className="text border-t-2 flex items-center overflow-hidden whitespace-nowrap border-b-2 border-zinc-300 pr-20">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[15vw] font-["Founders Grotesk"] font-bold pt-10 pb-10 leading-none uppercase '
          >
            we are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[15vw] font-["Founders Grotesk"] font-bold pt-10 pb-10 leading-none uppercase '
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
      <div className="w-full flex justify-between items-start px-10 py-10">
        <div>
          <h4>Latest Publications:</h4>
        </div>

        <div className="flex gap-2 items-start">
          <div>
            <div className="w-[15rem] hover:p-1">
              <img
                className="rounded-md"
                src="https://ochi.design/wp-content/uploads/2022/05/Frame-3878-650x650.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row items-center gap-2  mt-2">
              <span className="p-1 bg-white rounded-full"></span>
              <h4>Officevibe PPT template</h4>
            </div>
          </div>
          <div>
            <div className="w-[15rem] hover:p-1">
              <img
                className="rounded-md"
                src="https://ochi.design/wp-content/uploads/2023/02/Trawa-Energy-1-650x650.png"
                alt=""
              />
            </div>
            <div className="flex flex-row items-center gap-2  mt-2">
              <span className="p-1 bg-white rounded-full"></span>
              <h4>Officevibe PPT template</h4>
            </div>
          </div>
          <div>
            <div className="w-[15rem] hover:p-1">
              <img
                className="rounded-md"
                src="https://ochi.design/wp-content/uploads/2023/02/Teach-for-Ukraine-3-650x650.png"
                alt=""
              />
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <span className="p-1 bg-white rounded-full"></span>
              <h4>Officevibe PPT template</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkMarquee;
