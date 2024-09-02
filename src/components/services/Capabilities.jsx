import React, { useState } from "react";

function Capabilities() {
  const [floor1, setFloor1] = useState(true);
  const [floor2, setFloor2] = useState(true);
  return (
    <div className="bg-black w-full min-h-screen pb-20">
      <div className="px-10 pt-28 pb-20  border-b-[1px] border-gray-400">
        <h1 className="text-5xl">
          <span className="underline">Let’s be honest.</span> There are really
          no excuses to have a bad presentation anymore. No one has time for
          poorly communicated ideas. Focus on what you do best — growing your
          business, while we do our best at making your presentations awesome.
        </h1>
      </div>
      <div className="w-full relative flex items-start justify-between px-10 pt-5">
        <div>Our Capabilities:</div>
        <div
          className={`absolute      ease-in duration-300 ${
            floor1 && "opacity-0 w-[10vw]"
          } w-[15vw] left-[30vw] rounded-md bg-red-100`}
        >
          <img
            className="w-full rounded-md h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Asset-39-20-663x448.jpg"
            alt=""
          />
        </div>
        <div
          className={`absolute   ease-in duration-300 ${
            floor2 && "opacity-0  w-[10vw]"
          } w-[15vw] top-[53vh] left-[30vw] rounded-md bg-red-100`}
        >
          <img
            className="w-full rounded-md h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Asset-39-20-663x448.jpg"
            alt=""
          />
        </div>
        <div className="w-[50%] gap-10 grid grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <h3>RAISE FUNDS</h3>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div
                onMouseEnter={() => setFloor1(false)}
                onMouseLeave={() => setFloor1(true)}
                className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]"
              >
                INVESTOR DUCK
              </div>
              <div
                onMouseEnter={() => setFloor1(false)}
                onMouseLeave={() => setFloor1(true)}
                className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]"
              >
                STARTUP PITCH
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <h3>SELL PRODUCTS</h3>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                BUSINESS PROPOSAL
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                COMPANY PRESENTATION
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                SALES DECK
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                PRODUCT PRESENTATION
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                SERVICE DECK
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <h3>HIRE & MANAGE PEOPLE</h3>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div
                onMouseEnter={() => setFloor2(false)}
                onMouseLeave={() => setFloor2(true)}
                className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]"
              >
                BIG NEWS DECK
              </div>
              <div
                onMouseEnter={() => setFloor2(false)}
                onMouseLeave={() => setFloor2(true)}
                className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]"
              >
                BRANDED TEMPLATE
              </div>
              <div
                onMouseEnter={() => setFloor2(false)}
                onMouseLeave={() => setFloor2(true)}
                className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]"
              >
                ONBOARDING PRESENTATION
              </div>
              <div
                onMouseEnter={() => setFloor2(false)}
                onMouseLeave={() => setFloor2(true)}
                className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]"
              >
                PROGRESS REPORT
              </div>
              <div
                onMouseEnter={() => setFloor2(false)}
                onMouseLeave={() => setFloor2(true)}
                className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]"
              >
                POLICY DECK % PLAYBOOK
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <h3>ADDITIONAL</h3>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                AGENCY
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                BRANDING
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                CORPORATE TRAINING
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                REDESIGN
              </div>
              <div className="px-3 py-1 text-sm rounded-full flex justify-center items-start border-[1px]">
                REVIEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
