import React from "react";
import { motion } from "framer-motion";

function ClientCount() {
  return (
    <div className="overflow-hidden w-full pt-8 pb-20">
      <div className="px-20 border-b-[1px] pb-10 border-white">
        <h1 className="text-5xl tracking-tight font-[Neue Montreal]">
          Clients’ reviews
        </h1>
      </div>
      <div className="flex items-start justify-between pt-5 pb-[50px] px-10 border-b-[1px] border-white">
        <div>
          <h4 className="underline">Karman Ventures</h4>
        </div>
        <div className="flex flex-col gap-10 items-start">
          <h4>Services:</h4>
          <div className="flex flex-col gap-2 items-start">
            <span className="px-3 py-1 text-xs border flex items-center gap-5 rounded-full  border-white ">
              INVESTOR DECK
            </span>
            <span className="px-3 py-1 text-xs border flex items-center gap-5 rounded-full  border-white ">
              SALE DECK
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start">
          <h4>William Barnes</h4>
          <div className="max-w-sm flex flex-col gap-5">
            <div className="w-[100px] h-[100px] bg-red-100 rounded-md"></div>
            <p>
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        <div className="text-gray-300">READ</div>
      </div>
      <div className="flex items-center justify-between px-10 p-4 border-b-[1px] border-white">
        <h4 className="underline">Planetly</h4>
        <h4>Nina Walloch</h4>
        <h4 className="underline">READ</h4>
      </div>
      <div className="flex items-center justify-between px-10 p-4 border-b-[1px] border-white">
        <h4 className="underline">Planetly</h4>
        <h4>Nina Walloch</h4>
        <h4 className="underline">READ</h4>
      </div>
      <div className="flex items-center justify-between px-10 p-4 border-b-[1px] border-white">
        <h4 className="underline">Planetly</h4>
        <h4>Nina Walloch</h4>
        <h4 className="underline">READ</h4>
      </div>
      <div className="flex items-center justify-between px-10 p-4 border-b-[1px] border-white">
        <h4 className="underline">Planetly</h4>
        <h4>Nina Walloch</h4>
        <h4 className="underline">READ</h4>
      </div>
      <div className="flex items-center justify-between px-10 p-4 border-b-[1px] border-white">
        <h4 className="underline">Planetly</h4>
        <h4>Nina Walloch</h4>
        <h4 className="underline">READ</h4>
      </div>
      <div className="flex items-center justify-between px-10 p-4 border-b-[1px] border-white">
        <h4 className="underline">Planetly</h4>
        <h4>Nina Walloch</h4>
        <h4 className="underline">READ</h4>
      </div>
      <div className="w-full px-10 py-20 border-b-[1px] border-white">
        <img
          src="https://ochi.design/wp-content/uploads/2023/08/Group-61165.png"
          alt=""
        />
      </div>

      <div className="w-full px-10 pt-5 flex items-start justify-between">
        <div>
          <h4>Ochi in numbers:</h4>
        </div>
        <div className="w-[45vw] grid grid-cols-2 gap-5">
          <div className="bg-slate-400 rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">100+</h1>
              <p className="text-sm font-mono tracking-tighter">
                Clients from 17 Countries
              </p>
            </div>
          </div>
          <div className="bg-slate-400 rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">$280+</h1>
              <p className="text-sm font-mono tracking-tighter">
                Million raised for our clients
              </p>
            </div>
          </div>
          <div className="bg-slate-400 rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">90%</h1>
              <p className="text-sm font-mono tracking-tighter">
                Of our clients come back
              </p>
            </div>
          </div>
          <div className="bg-slate-400 rounded-md">
            <div className="flex flex-col p-5 items-start justify-between gap-28">
              <h1 className="text-5xl font-mono">98%</h1>
              <p className="text-sm font-mono tracking-tighter">
                Net Promoting Score
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientCount;
