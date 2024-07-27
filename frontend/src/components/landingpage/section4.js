import React from "react";
import Step1 from "./image/icon-step-1.svg";
import Step2 from "./image/icon-step-2.svg";
import Step3 from "./image/icon-step-3.svg";
import backgroundImage from "./image/background-grid.svg";

export const Section4 = () => {
  return (
    <>
      <div id="section-4" className="pb-[50px]">
        <section
          id="steps init locked move first-slide"
          className="w-full h-full "
        >
          <div id="steps-sticky" className="w-full h-full relative">
            <div id="block-custom-1" className="flex">
              <div
                id="block block-white nav-black"
                className=" max-w-[695px] max-h-[480px] border mt-[14px] ml-[14px] border-[black] bg-[#fff] rounded-[5px]"
              >
                <div
                  id="top step-top"
                  className=" border-b border-[black] flex items-center justify-between"
                >
                  <h1 className="font-pp-right pl-[10px] pr-[10px] pt-[9px] pb-[9px] text-[23.8px] border-r border-[black] flex items-center justify-center">
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
                  className=" border-b border-[black] flex items-center "
                >
                  <div className=" border-r border-[black] text-[170px] flex items-center justify-center">
                    <h1 className=" flex items-center justify-center max-h-[185px] pl-[14px] pr-[14px]">
                      01
                    </h1>
                  </div>

                  <h1 className=" text-[66.66px] pt-[34px] pr-[31px] pb-[34px] pl-[31px]">
                    STOP THE LEAK
                  </h1>
                </div>
                <div
                  id="bottom"
                  className=" pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
                >
                  <h1 id="subheading" className=" mb-[19px] text-[28.5px]">
                    {" "}
                    CUSTOM MARKETING PLAN
                  </h1>
                  <div id="body body-large" className="">
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[23.8px]"
                    >
                      Most business owners are too busy to focus on marketing
                      and don't have the time. Customers are slipping through
                      the cracks and we don't ever have time to notice.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="block block-white nav-black-1"
                className=" mt-[400px] ml-[21px] max-w-[695px] max-h-[480px] border border-[black] bg-[#fff] rounded-[5px] right-[14px] "
              >
                <div
                  id="top step-top-1"
                  className=" border-b border-[black] flex items-center justify-between"
                >
                  <h1 className=" font-pp-right text-[23.8px] pl-[21px] pr-[20px] pt-[9px] pb-[9px] border-r border-[black] flex items-center justify-center">
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
                  className=" border-b border-[black] flex items-center"
                >
                  <div className="  border-r border-[black] text-[170px] flex items-center justify-center">
                    <h1 className=" flex items-center justify-center max-h-[185px] pl-[14px] pr-[14px]">
                      02
                    </h1>
                  </div>

                  <h1 className=" text-[66.66px] pt-[34px] pr-[31px] pb-[34px] pl-[31px] leading-[57px]">
                    BUILD A BETTER BUCKET
                  </h1>
                </div>
                <div
                  id="bottom-1"
                  className=" pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
                >
                  <h1 id="subheading-1" className=" mb-[19px] text-[28.5px]">
                    {" "}
                    BUILDING THE SYSTEM
                  </h1>
                  <div id="body body-large-1" className="w">
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[23.8px]"
                    >
                      Quarterly marketing campaigns, email nurture sequences,
                      and customer funnels all built for you 100% hands off.
                      We'll find the customers, you focus on your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="block-custom-2">
              <div
                id="block block-white nav-black-2"
                className="max-w-[695px] max-h-[480px] mt-[-100px] border border-[black] bg-[#fff] rounded-[5px] ml-[14px]  "
              >
                <div
                  id="top step-top-2"
                  className=" border-b border-[black] flex items-center justify-between"
                >
                  <h1 className=" pt-[9px] pb-[9px] pl-[23px] pr-[23.5px] font-pp-right text-[23.8px] border-r border-[black] flex items-center justify-center">
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
                  className=" border-b border-[black] flex items-center"
                >
                  <div className=" border-r border-[black] text-[170px] flex items-center justify-center">
                    <h1 className="max-h-[185px] pl-[14px] pr-[14px] flex items-center justify-center">
                      03
                    </h1>
                  </div>

                  <h1 className=" text-[66.66px] pt-[34px] pr-[31px] pb-[34px] pl-[31px] leading-[57px]">
                    OVERFILL THE BUCKET
                  </h1>
                </div>
                <div
                  id="bottom-2"
                  className="  pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
                >
                  <h1 id="subheading-2" className=" mb-[19px] text-[28.5px] ">
                    {" "}
                    REACH NEW HEIGHTS
                  </h1>
                  <div id="body body-large-2" className="">
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[23.8px]"
                    >
                      With the Patch system in place, ads, marketing, and SEO
                      will be flowing. You can expect a lot of new faces to walk
                      in the door.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
