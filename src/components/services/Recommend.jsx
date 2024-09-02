import React from "react";
import { motion } from "framer-motion";
function Recommend() {
  return (
    <div className="w-full bg-green-900 rounded-tl-3xl rounded-tr-3xl pb-32">
      <div className=" pt-28">
        <div className="text border-t-2 flex items-center overflow-hidden whitespace-nowrap border-b-2 border-zinc-300 pr-20">
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[20vw] font-["Founders Grotesk"] font-bold p-0 m-0 leading-none uppercase '
          >
            OTHER WHY US
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
            className='text-[20vw] font-["Founders Grotesk"] font-bold p-0 m-0  leading-none uppercase '
          >
            OTHER WHYUS
          </motion.h1>
        </div>
      </div>
      <div className="w-full px-10 pt-5 flex items-start justify-between">
        <div>
          <h4>Ochi in numbers:</h4>
        </div>
        <div className="w-[45vw] grid grid-cols-2 gap-5">
          <div className="bg-slate-400 rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">01</h1>
              <div className="w-full flex items-start justify-between">
                <p className="underline text-sm font-mono tracking-tighter">
                  Communication
                </p>
                <p className="text-sm">READ</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-400 rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">01</h1>
              <div className="w-full flex items-start justify-between">
                <p className="underline text-sm font-mono tracking-tighter">
                  Communication
                </p>
                <p className="text-sm">READ</p>
              </div>
            </div>
          </div>
          <div className="bg-[#145B52] rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">01</h1>
              <div className="w-full flex items-start justify-between">
                <p className="underline text-md font-mono tracking-tighter">
                  Communication
                </p>
                <p className="text-md">READ</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-400 rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">01</h1>
              <div className="w-full flex items-start justify-between">
                <p className="underline text-sm font-mono tracking-tighter">
                  Communication
                </p>
                <p className="text-sm">READ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
