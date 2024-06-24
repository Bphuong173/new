import React from "react";
import Step1 from "./image/icon-step-1.svg";
import Step2 from "./image/icon-step-2.svg";
import Step3 from "./image/icon-step-3.svg";
import backgroundImage from "./image/background-grid.svg";

export const Section4 = () => {
  return (
    <>
      <div id="section-4">
        <section
          id="steps init locked move first-slide"
          className="w-full h-[1500px]"
        >
          <div id="steps-sticky" className="w-full h-[866.6px] relative">
            <div
              id="block block-white nav-black"
              className="w-[695px] h-[480px] border border-[black] bg-[#fff] rounded-[5px]"
            >
              <div
                id="top step-top"
                className="w-[693px] h-[55px] border-b border-[black] flex items-center justify-between"
              >
                <h1 className="w-[204.76px] h-[55px] font-pp-right text-[23.8px] border-r border-[black] flex items-center justify-center">
                  PROCESS - STEPS
                </h1>
                <div
                  id="steps-icon"
                  className="w-[83px] h-[54px] border-l border-[black] flex items-center justify-center"
                >
                  <img
                    src={Step1}
                    alt="Step Icon 1"
                    className=" flex items-center justify-center "
                  />
                </div>
              </div>
              <div
                id="mid"
                className="w-[693px] h-[186px] border-b border-[black] flex items-center"
              >
                <div className="w-[204.76px] h-[184px] border-r border-[black] text-[170px] flex items-center justify-center">
                  <h1 className="h-[184px] flex items-center justify-center">
                    01
                  </h1>
                </div>

                <h1 className="w-[488px] h-[185px] text-[66.66px] pt-[34px] pr-[31px] pb-[34px] pl-[31px]">
                  STOP THE LEAK
                </h1>
              </div>
              <div
                id="bottom"
                className="w-[693px] h-[479px] pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
              >
                <h1
                  id="subheading"
                  className="w-[641px] h-[26.85px] mb-[19px] text-[28.5px]"
                >
                  {" "}
                  CUSTOM MARKETING PLAN
                </h1>
                <div id="body body-large" className="w-[642px] h-[100px]">
                  <p
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className="text-[23.8px]"
                  >
                    Most business owners are too busy to focus on marketing and
                    don't have the time. Customers are slipping through the
                    cracks and we don't ever have time to notice.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="block block-white nav-black-1"
              className="w-[695px] h-[480px] border border-[black] bg-[#fff] rounded-[5px] absolute right-[14px] top-[425px]"
            >
              <div
                id="top step-top-1"
                className="w-[693px] h-[55px] border-b border-[black] flex items-center justify-between"
              >
                <h1 className="w-[204.76px] h-[55px] font-pp-right text-[23.8px] border-r border-[black] flex items-center justify-center">
                  PROCESS - STEPS
                </h1>
                <div
                  id="steps-icon-1"
                  className="w-[83px] h-[54px] border-l border-[black] flex items-center justify-center"
                >
                  <img
                    src={Step2}
                    alt="Step Icon 2"
                    className=" flex items-center justify-center "
                  />
                </div>
              </div>
              <div
                id="mid-1"
                className="w-[693px] h-[186px] border-b border-[black] flex items-center"
              >
                <div className="w-[204.76px] h-[184px] border-r border-[black] text-[170px] flex items-center justify-center">
                  <h1 className="h-[184px] flex items-center justify-center">
                    02
                  </h1>
                </div>

                <h1 className="w-[488px] h-[185px] text-[66.66px] pt-[34px] pr-[31px] pb-[34px] pl-[31px] leading-[57px]">
                  BUILD A BETTER BUCKET
                </h1>
              </div>
              <div
                id="bottom-1"
                className="w-[693px] h-[479px] pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
              >
                <h1
                  id="subheading-1"
                  className="w-[641px] h-[26.85px] mb-[19px] text-[28.5px]"
                >
                  {" "}
                  BUILDING THE SYSTEM
                </h1>
                <div id="body body-large-1" className="w-[642px] h-[100px]">
                  <p
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className="text-[23.8px]"
                  >
                    Quarterly marketing campaigns, email nurture sequences, and
                    customer funnels all built for you 100% hands off. We'll
                    find the customers, you focus on your business.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="block block-white nav-black-2"
              className="w-[695px] h-[480px] border border-[black] bg-[#fff] rounded-[5px] absolute top-[848px]"
            >
              <div
                id="top step-top-2"
                className="w-[693px] h-[55px] border-b border-[black] flex items-center justify-between"
              >
                <h1 className="w-[204.76px] h-[55px] font-pp-right text-[23.8px] border-r border-[black] flex items-center justify-center">
                  PROCESS - STEPS
                </h1>
                <div
                  id="steps-icon-2"
                  className="w-[83px] h-[54px] border-l border-[black] flex items-center justify-center"
                >
                  <img
                    src={Step3}
                    alt="Step Icon 3"
                    className=" flex items-center justify-center "
                  />
                </div>
              </div>
              <div
                id="mid-2"
                className="w-[693px] h-[186px] border-b border-[black] flex items-center"
              >
                <div className="w-[204.76px] h-[184px] border-r border-[black] text-[170px] flex items-center justify-center">
                  <h1 className="h-[184px] flex items-center justify-center">
                    03
                  </h1>
                </div>

                <h1 className="w-[488px] h-[185px] text-[66.66px] pt-[34px] pr-[31px] pb-[34px] pl-[31px] leading-[57px]">
                  OVERFILL THE BUCKET
                </h1>
              </div>
              <div
                id="bottom-2"
                className="w-[693px] h-[479px] pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
              >
                <h1
                  id="subheading-2"
                  className="w-[641px] h-[26.85px] mb-[19px] text-[28.5px] "
                >
                  {" "}
                  REACH NEW HEIGHTS
                </h1>
                <div id="body body-large-2" className="w-[642px] h-[100px]">
                  <p
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className="text-[23.8px]"
                  >
                    With the Patch system in place, ads, marketing, and SEO will
                    be flowing. You can expect a lot of new faces to walk in the
                    door.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
