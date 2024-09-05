import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import WorkEye from "../work/WorkEye";
import Slider from "./Slider";
function AboutOchi() {
  return (
    <div className="w-full h-full  bg-[#F1F1F1] text-black pt-1 relative pb-32">
      <div className="text-structure mt-32 px-10">
        {["We, are", "Ochi, design"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex overflow-hidden ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                  className=" w-[10vw] mt-4 mr-1 rounded-md h-[5.5vw] -top-[0.1vw] relative bg-red-500"
                ></motion.div>
              )}
              <motion.div
                initial="initial"
                whileHover="hovered"
                className="relative block overflow-hidden whitespace-nowrap leading-none"
              >
                <h1
                  className='uppercase  text-8xl leading-[7vw]  h-full tracking-tighter font-["Founders Grotesk"] font-bold '
                  key={index}
                >
                  {item.split(",").map((l, i) => (
                    <motion.span
                      variants={{
                        initial: {
                          y: 0,
                        },
                        hovered: {
                          y: "-100%",
                        },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        delay: 0.025 * i,
                      }}
                      key={i}
                      className="inline-block"
                    >
                      {l}
                    </motion.span>
                  ))}
                </h1>
                <h1
                  className='uppercase absolute  inset-0 text-8xl leading-[7vw]  h-full tracking-tighter font-["Founders Grotesk"] font-bold '
                  key={index}
                >
                  {item.split(",").map((l, i) => (
                    <motion.span
                      variants={{
                        initial: {
                          y: "100%",
                        },
                        hovered: {
                          y: 0,
                        },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        delay: 0.025 * i,
                      }}
                      key={i}
                      className="inline-block"
                    >
                      {l}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t-[1px] border-zinc-700 mt-[120px] flex justify-between py-5 px-10 items-start">
        <div>
          <h3>About Us:</h3>
        </div>
        <div className="w-[50vw] flex items-start justify-between ">
          <div className="flex w-[22vw] text-justify flex-col items-start gap-5">
            <div>
              In Ukrainian, ochi - means eyes. It's not just a beautiful word,
              but our philosophy. Almost everything that needs to be
              communicated is better shown than explained.
            </div>
            <div>
              We believe a great presentation evokes interest and drives
              business results far better than any saying can. Hence, we founded
              ochi to help you persuade colleagues and clients by creating
              eye-opening presentations.
            </div>
          </div>

          <div className="flex gap-2  items-center">
            <div className="uppercase px-3 py-1 text-sm  border-[1px] font-[Neue_Montrea] border-zinc-200 rounded-full">
              Our Work
            </div>
            <span className="border-[1px] rounded-full p-2 text-xs rotate-[45deg]  border-zinc-200">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
      <div className="relative h-[30vh] mt-10 mb-20">
        <WorkEye />
      </div>

      <div className="pt-20">
        <div className="border-zinc-700 border-b-[1px]">
          <h1 className="text-5xl tracking-tight pb-10 px-10">
            We save businesses from ugly and <br /> ineffective presentations.
          </h1>
        </div>
        <div className="px-10 py-20 flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/017091720030-1340x858.jpg"
            className="rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutOchi;
