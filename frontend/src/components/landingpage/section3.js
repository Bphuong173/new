import React from "react";
import Battery from "./image/icon-battery.svg";
import Process from "./image/process.svg";
import backgroundImage from "./image/background-grid.svg";
import { AnimatedSection } from "./animatedsection";

export const Section3 = () => {
  return (
    <>
      <div
        id="section-3"
        className="w-full h-full bg-[#989696] p-[14px] pb-[100px] pt-0 relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <section id="promise nav-blue locked-1" className="w-auto pt-[190px]">
          <div id="gird-1">
            <div id="col-1" className="flex">
              <div className="flex-1">
                <AnimatedSection
                  id="block-sectionBlock-anima-in"
                  className="bg-white border border-black rounded-md w-[339px]"
                  animationClass="slide-in-left"
                >
                  <div
                    id="sectionBlock-top"
                    className="h-[55px] flex justify-between border-b border-black"
                  >
                    <div className="flex items-center justify-center w-full">
                      <h1 className="font-pp-right text-[24px]">OUR PROCESS</h1>
                    </div>
                    <div
                      id="sectionBlock-icon"
                      className="w-[83.8px] border-l border-black flex items-center justify-center"
                    >
                      <img
                        src={Battery}
                        alt="Battery Icon"
                        className="w-[60px] h-[31px]"
                      />
                    </div>
                  </div>
                  <div
                    id="sectionBlock-bottom"
                    className="pt-[20px] pl-[20px] flex items-center justify-center"
                  >
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="pb-[20px] text-[19px]"
                    >
                      We use our tried and true structure to cater to your
                      specific needs.
                    </p>
                  </div>
                </AnimatedSection>
                <div id="block-1" className="mt-[14px]">
                  <h1
                    id="h1-anima-in"
                    className="border border-black rounded-[5px] mr-[14px] pr-[17px] leading-[146.3px] bg-white"
                  >
                    <div className="pl-[29.5px] border-b border-black relative text-[133px] flex items-center">
                      THE PATCH
                      <div id="section-couter1">
                        <h1 className="font-pp-right">02</h1>
                      </div>
                    </div>
                    <div className="text-[133px] flex items-center justify-end bg-white">
                      SYSTEM
                    </div>
                  </h1>
                </div>
              </div>
              <div
                id="col-1-image"
                className="w-full lg:w-[429.5px] bg-white flex items-center rounded-[5px] mt-4 lg:mt-0"
              >
                <img
                  src={Process}
                  alt="Process Icon"
                  className="p-[47.6px] w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
