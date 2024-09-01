import React from "react";
import ServiceRow from "./ServiceRow";

function ServiceReviews() {
  return (
    <div className="overflow-hidden w-full pt-8 pb-32">
      <div className="px-10 border-b-[1px] pb-10 border-white">
        <h1 className="text-5xl tracking-tight font-[Neue Montreal]">
          Holistic process
        </h1>
      </div>
      <div className="flex items-start justify-between pt-5 pb-10 px-10 border-b-[1px] border-white">
        <div>
          <h4 className="">01. Phase</h4>
        </div>

        <div className="w-1/2 flex items-start justify-between">
          <div className="flex flex-col gap-20 items-start">
            <h4>Discovery</h4>
            <div className="max-w-sm flex flex-col gap-5">
              <div className="w-[100px] h-[100px] bg-red-100 rounded-md"></div>
              <p>
                We define your goals, get to know your audience, and understand
                the context. Through a process of exploration, investigation,
                and research, we seek the insights that inform our future
                decisions.
              </p>
            </div>
          </div>
          <div className="text-gray-300">READ</div>
        </div>
      </div>
        <ServiceRow/>
        <ServiceRow/>
        <ServiceRow/>
        <ServiceRow/>
    </div>
  );
}

export default ServiceReviews;
