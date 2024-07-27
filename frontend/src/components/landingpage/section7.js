import React from "react";
import "./section7.css";
import { Teamcard1 } from "./teamcard1";
import { Teamcard2 } from "./teamcard2";
import { Teamcard3 } from "./teamcard3";
import { Teamcard4 } from "./teamcard4";
import backgroundImage from "./image/background-grid.svg";

export const Section7 = () => {
  return (
    <>
      <div
        className=" w-full h-full bg-[#989696] top-0 left-0 right-0 bottom-0 bg-[position:6.35rem_0rem] pb-[333px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div id="team nav-blue locked">
          <div
            id="team-top"
            className="relative pt-[160px] pl-[90.5px] pr-[90.5px] mb-[12px]"
          >
            <h2 id="h2 h-anima">
              <h1
                id="h-line"
                className=" uppercase  pr-[47.6px] text-[133.33px] leading-[125px] tracking-wide"
              >
                <span className="pr-[22px]">Our</span>
                <span>Team</span>
              </h1>
            </h2>
            <p
              id="body body-large"
              className="mt-[66.6px] w-[533px] text-[23.8px] leading-[30.95px]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              We know that this system works because we’ve used it to grow our
              own PT clinic. Now, we’re here to help you with yours.
            </p>
            <div id="section-couter2" className=" top-[74px]">
              <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px]">
                05
              </h1>
              <p className=""></p>
            </div>
          </div>
          <div id="team-bottom" className=" relative  pr-[20px] ">
            <div
              id="team-cards"
              className="flex flex-wrap flex-row-reverse gap-x-[14px] "
            >
              <Teamcard1 />
              <Teamcard2 />
              <Teamcard3 />
              <Teamcard4 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
