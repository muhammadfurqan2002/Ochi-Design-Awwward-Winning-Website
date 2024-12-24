import ServiceReviews from "./ServiceReviews";
import Capabilities from "./Capabilities";
import ClientCount from "./ClientCount";
import Recommend from "./Recommend";
import ReadyProject from "../ReadyProject";

function ServiceLanding() {
  return (
    <>
      <div className="bg-black w-full min-h-screen relative pt-1">
        <div className="mt-36 px-10  relative inline-block">
          <h1 className="text-8xl uppercase tracking-tighter font-bold">
            Services
          </h1>
        </div>
        <div className="border-t-[1px] border-b-[1px]  mt-20 text-5xl  font-sans">
          <h1 className="px-10 pt-5 pb-20 ">
            We create <span className="underline">eye-catching</span>and{" "}
            <span className="underline">eye-opening</span> <br /> presentations
            that educate, inspire and influence <br /> action.
          </h1>
        </div>

        <div className="px-10 pb-20 bg-black flex items-start justify-between py-5">
          <div>
            <h1>
              We do this by following <br />
              simple approach:
            </h1>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <h1 className="underline ">Goal defines it all</h1>
              <p>
                What do you want to achieve? Understanding the purpose of your
                presentation allows us to tailor it to ensure it hits the mark
                and drives results.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="underline">Goal defines it all</h1>
              <p>
                What do you want to achieve? Understanding the purpose of your
                presentation allows us to tailor it to ensure it hits the mark
                and drives results.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="underline">Goal defines it all</h1>
              <p>
                What do you want to achieve? Understanding the purpose of your
                presentation allows us to tailor it to ensure it hits the mark
                and drives results.
              </p>
            </div>
          </div>
        </div>
        <ServiceReviews />
      </div>
      <Capabilities />
      <ClientCount />
      <Recommend />
      <ReadyProject />
    </>
  );
}

export default ServiceLanding;
