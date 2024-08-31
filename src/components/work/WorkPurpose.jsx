import React from "react";
import Feature from "../Feature";
import WorkProjects from "./WorkProjects";

function WorkPurpose() {
  return (
    <div className="w-full min-h-screen pt-20 pb-40 px-10 text-white relative  z-40  bg-black ">
      <h1 className="text-5xl tracking-tighter font-normal">
        Purpose driven,{" "}
        <span className="underline">strategy-led presentations</span> <br />
        that people care about.
      </h1>
      <div>
        <WorkProjects/>
      </div>
    </div>
  );
}

export default WorkPurpose;
