import React from "react";
import Battery from "./image/icon-battery.svg";
import Process from "./image/process.svg";
import backgroundImage from "./image/background-grid.svg";
import { AnimatedSection } from "./animatedsection";

export default function Section3() {
  return (
    <div
      id="section-3"
      className="w-full h-full bg-[#989696] bg-[position:6.35rem_0rem] p-[14px] pb-[100px] pt-0 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section id="promise nav-blue locked-1" className="w-auto pt-[190px]">
        <div id="gird-1">
          <div id="col-1" className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <AnimatedSection
                id="block-sectionBlock-anima-in"
                className="bg-white border border-black rounded-md w-full lg:w-[339px] mb-4 lg:mb-0"
                animationClass="slide-in-left"
              >
                <div
                  id="sectionBlock-top"
                  className="h-[55px] justify-between flex border-b border-black"
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
                      alt="Smiley Icon"
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
                  className="border border-black rounded-[5px] pr-[17px] leading-[146.3px] bg-[#fff]"
                >
                  <div className="pl-[20px] border-b border-black relative text-[90px] lg:text-[133px] flex items-center">
                    <div className="lg:flex">
                      <h1 className="lg:h-0 h-[100px]">TODO </h1>
                      <h1 className="xs:pl-[100px] sm:pl-[20px] pl-[70px]">
                        APP
                      </h1>
                    </div>

                    <div id="section-couter1">
                      <h1 className="font-pp-right">02</h1>
                      <p className=""></p>
                    </div>
                  </div>
                  <div className="lg:text-[133px] text-[100px] flex items-center justify-end bg-[#fff]">
                    SYSTEM
                  </div>
                </h1>
              </div>
            </div>

            <div
              id="col-1-image"
              className="w-full lg:ml-[14px] lg:w-[429.5px] bg-[#FFFF] flex items-center rounded-[5px] mt-4 lg:mt-0"
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
  );
}
