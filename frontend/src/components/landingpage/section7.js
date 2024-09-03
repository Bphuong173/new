import React from "react";
import "./section7.css";
import { Teamcard1 } from "./teamcard1";
import { Teamcard2 } from "./teamcard2";
import { Teamcard3 } from "./teamcard3";
import { Teamcard4 } from "./teamcard4";
import backgroundImage from "./image/background-grid.svg";
import { AnimatedSection } from "./animatedsection";
import Iconpeople from "./image/icon-people.svg";

export default function Section7() {
  return (
    <>
      <div
        className=" w-full h-full bg-[#989696] top-0 left-0 right-0 bottom-0 bg-[position:6.35rem_0rem] pb-[333px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div id="team nav-blue locked" className="flex flex-col">
          <div
            id="team-top"
            className="relative pt-[160px]  lg:pl-[90.5px] pl-[20px] lg:pr-[90.5px] pr-[10px] mb-[12px]"
          >
            <h2 id="h2 h-anima">
              <h1
                id="h-line"
                className=" flex uppercase  pr-[47.6px] text-[60px] lg:text-[133.33px] leading-[125px] tracking-wide"
              >
                <span>
                  <AnimatedSection
                    animationClass="slide-in-bottom"
                    className="pr-[22px]"
                  >
                    Our
                  </AnimatedSection>
                </span>
                <span>
                  <AnimatedSection
                    animationClass="slide-in-bottom"
                    className="pr-[22px]"
                  >
                    Team
                  </AnimatedSection>
                </span>
              </h1>
            </h2>
            <p
              id="body body-large"
              className="lg:mt-[66.6px] mt-0 lg:w-[533px] w-auto text-[23.8px] leading-[30.95px]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Our team used this system to manage tasks effectively. Now, we’re
              ready to help you organize and complete your tasks efficiently.
            </p>
            <div id="section-couter2" className="">
              <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px]">
                05
              </h1>
              <p className=""></p>
            </div>
          </div>
          <div id="team-bottom" className=" relative  pr-[20px] ">
            <AnimatedSection
              animationClass="slide-in-left"
              id="block-sectionBlock-anima-in-2"
              className="bg-white border border-[black] rounded-md max-w-[339px]  h-[153.4px] absolute top-[150px] ml-[36px]"
            >
              <div
                id="sectionBlock-top-2"
                className=" h-[55px] justify-between flex border-b border-[black] pl-[21px] "
              >
                <div className="flex items-center justify-center ">
                  <h1 className="font-pp-right  text-[24px]">
                    THE USUAL SUSPECTS
                  </h1>
                </div>

                <div
                  id="sectionBlock-icon-2"
                  className="w-[83.8px] h-[54px] border-l border-[black] flex items-center justify-center"
                >
                  <img
                    src={Iconpeople}
                    alt="People Icon"
                    className="w-[60px] h-[31px]"
                  />
                </div>
              </div>
              <div
                id="sectionBlock-bottom-2"
                className=" pt-[17px] pr-[21px] pl-[21px] pb-[22px] h-[96px] flex items-center justify-center"
              >
                <p
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className=" h-[57px] text-[19px]"
                >
                  Meet our team of professionals, dedicated to make your life
                  easier.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div
            id="team-cards"
            className="flex flex-wrap flex-row-reverse gap-x-[14px] lg:mr-[32px] mr-[14px] lg:ml-0 ml-[14px] "
          >
            <Teamcard1 />
            <Teamcard2 />
            <Teamcard3 />
            <Teamcard4 />
          </div>
        </div>
      </div>
    </>
  );
}
