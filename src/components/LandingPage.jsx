import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import NavBar from "./NavBar";
import Marque from "./Marque";
import About from "./About";
import Eyes from "./Eyes";
import Feature from "./Feature";
import Reviews from "./Reviews";
import Cards from "./Cards";
import ReadyProject from "./ReadyProject";

function LandingPage() {
  return (
    <>
    <NavBar/>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.3"
        className="w-full h-screen bg-zinc-900 pt-1"
      >
        <div className="text-structure mt-32 px-10">
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className=" w-[10vw] mt-3 rounded-md h-[5.5vw] -top-[0.1vw] relative bg-red-500"
                  ></motion.div>
                )}
                <h1
                  className='uppercase  text-8xl leading-[6.5vw]  h-full tracking-tighter font-["Founders Grotesk"] font-bold '
                  key={index}
                >
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t-[1px] border-zinc-700 mt-[120px] flex justify-between py-5 px-10 items-center">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              className="text-md font-[Neue_Montrea] tracking-tight  leading-none"
              key={index}
            >
              {item}
            </p>
          ))}
          <div className="start flex gap-2  items-center">
            <div className="uppercase px-2 py-1  border-[1px] font-[Neue_Montrea] border-zinc-200 rounded-full">
              start the project
            </div>
            <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-200 rounded-full">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Reviews/>
      <Cards />
      <ReadyProject/>
    </>
  );
}

export default LandingPage;
