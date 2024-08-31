import { delay, motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";

function WorkProjects() {
  const [isHovering, setHovering] = useState(false);
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10 flex items-center flex-col">
      <div className=" flex flex-col gap-[8vw]">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer relative w-1/2 h-[80vh]">
            <div className="flex items-center gap-2 py-2 px-1">
              <span className="bg-white p-1 rounded-full"></span>
              <span>Cardboard Spaceship</span>
            </div>
            <motion.div
              onHoverEnd={() => handleHoverEnd(0)}
              onHoverStart={() => handleHover(0)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="hover:p-1 ease-linear duration-150"
            >
              <h1 className="absolute flex text-[#CDEA68] left-full text-[150px] z-10 overflow-hidden leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 font-[founders Grotesk">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    animate={cards[0]}
                    className="inline-block "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <div className=" w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                  alt=""
                />
              </div>
            </motion.div>
            <div className="flex items-start gap-3 py-4">
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
            </div>
          </div>
          <div className="cardContainer relative w-1/2 h-[80vh]">
            <div className="flex items-center gap-2 py-2 px-1">
              <span className="bg-white p-1 rounded-full"></span>
              <span>AH2 & Matt Horn</span>
            </div>
            <motion.div
              onHoverEnd={() => handleHoverEnd(1)}
              onHoverStart={() => handleHover(1)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="hover:p-1 ease-linear duration-150 "
            >
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full text-[150px] leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 font-[founders Grotesk">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    animate={cards[1]}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className=" w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover "
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt=""
                />
              </div>
            </motion.div>
            <div className="flex items-start gap-3 py-4">
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
            </div>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer relative w-1/2 h-[80vh]">
            <div className="flex items-center gap-2 py-2 px-1">
              <span className="bg-white p-1 rounded-full"></span>
              <span>Cardboard Spaceship</span>
            </div>
            <motion.div
              onHoverEnd={() => handleHoverEnd(2)}
              onHoverStart={() => handleHover(2)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="hover:p-1 ease-linear duration-150"
            >
              <h1 className="absolute flex text-[#CDEA68] left-full text-[150px] z-10 overflow-hidden leading-none tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 font-[founders Grotesk">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    animate={cards[2]}
                    className="inline-block "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <div className=" w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                  alt=""
                />
              </div>
            </motion.div>
            <div className="flex items-start gap-3 py-4">
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
            </div>
          </div>
          <div className="cardContainer relative w-1/2 h-[80vh]">
            <div className="flex items-center gap-2 py-2 px-1">
              <span className="bg-white p-1 rounded-full"></span>
              <span>AH2 & Matt Horn</span>
            </div>
            <motion.div
              onHoverEnd={() => handleHoverEnd(3)}
              onHoverStart={() => handleHover(3)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="hover:p-1 ease-linear duration-150 "
            >
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full text-[150px] leading-none tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 font-[founders Grotesk">
                {"PREMIUM BLEND".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    animate={cards[3]}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className=" w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full bg-cover "
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt=""
                />
              </div>
            </motion.div>
            <div className="flex items-start gap-3 py-4">
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
              <span className="px-3 py-1 border border-white rounded-full text-white text-xs">
                PITCH DECK
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProjects;
