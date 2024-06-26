import React from "react";
import BackGroundWhite from "./image/grid-white.svg";
import "./section8.css";
import ArrowDownRight from "./image/arrow-down-right.svg";
import { Features1 } from "./features1";
import { Features2 } from "./features2";
import { Features3 } from "./features3";
import { Features4 } from "./features4";

export const Section8 = () => {
  return (
    <>
      <div
        id="products-nav-blue-locked"
        style={{ backgroundImage: `url(${BackGroundWhite})` }}
        className=" w-full h-full relative top-0 left-0 right-0 bottom-0 pt-[217px] pb-[95px]  bg-[position:6.35rem_0rem]"
      >
        <div id="products-top" className="relative">
          <div>
            <h2 id="h2 h-anima" className="pl-[45.7px]">
              <h1
                id="h-line"
                className=" uppercase  pr-[47.6px] text-[133.33px] leading-[125px] tracking-wide "
              >
                <span className="pr-[22px]">Patch</span>
                <span>Service</span>
              </h1>
              <h1
                id="h-line"
                className=" uppercase  pr-[47.6px] text-[133.33px] leading-[125px] tracking-wide"
              >
                <span>Offerings</span>
              </h1>
              <div id="section-couter4">
                <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px]">
                  06
                </h1>
                <p className=""></p>
              </div>
            </h2>
          </div>
        </div>
        <div
          id="products-plans"
          className="mt-[76px] pb-[190.4px] relative top-0 "
        >
          <div>
            <div
              id="block"
              className=" absolute left-[44.7px] top-0 w-[249.5px] border border-[black] rounded-[5px] bg-[#fff] min-h-[151px]"
            >
              <div
                id="sectionBlock-top"
                className="h-[54px] border-b border-[black] flex justify-between items-center pl-[21px] overflow-hidden"
              >
                <span>
                  <h1
                    id="subheading"
                    className="text-[23.8px] uppercase tracking-[0.71px] leading-[22.3px]"
                  >
                    Choose a Plan
                  </h1>
                </span>
                <div
                  id="sectionBlock-icon"
                  className="flex w-[55px]  h-[54px] border-l border-[black] justify-center items-center pt-[11.4px] pr-[11.4px] pb-[11.4px] pl-[11.4px]"
                >
                  <img
                    src={ArrowDownRight}
                    alt="ArrowDownRight"
                    className="h-full w-full text-[14px]"
                  />
                </div>
              </div>
              <div
                id="sectionBlock-bottom"
                className="pt-[17px] pl-[21px] pr-[21px] pb-[22px]"
              >
                <div
                  className="text-19px] leading-[28.5px]"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  Find what you need for your business
                </div>
              </div>
            </div>
          </div>
          <div
            id="products-sticky"
            className="top-[19px]; w-[1062px] ml-[359px] z-[2] sticky pl-[20px] top-0"
          >
            <div
              id="products-stickyInner-block "
              className="relative flex flex-1 overflow-hidden will-change-height bg-[#fff] border border-[black] rounded-[5px] min-h-[223px]"
            >
              <div
                id="products-productHeader-1"
                className=" px-[30.5px] py-[28.5px]"
              >
                <h1 className=" uppercase text-[47.6px] leading-[42.8px] tracking-[0.95px] w-[9.5px] mb-[23.8px]">
                  Beginner
                </h1>
                <p
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className=" relative border-t border-[#d3d3d3]   pr-[157px] text-[13px] leading-[14.2px] py-[12.3px] flex justify-between"
                >
                  6-Month Commitment
                </p>
                <h1 className=" text-[19px] mt-[9.5px] text-[#fff] h-[47.6px] bg-[#ff622b] rounded-[5px] inline-flex whitespace-nowrap px-[33px] items-center justify-center relative overflow-hidden cursor-pointer uppercase">
                  Inquire
                </h1>
              </div>
              <div
                id="products-productHeader-2"
                className=" px-[30.5px] my-[-1px] rounded-[5px] py-[28.5px] border border-black"
              >
                <h1 className=" uppercase text-[47.6px] leading-[42.8px] tracking-[0.95px] w-[9.5px] mb-[23.8px]">
                  Intermediate
                </h1>
                <p
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className=" relative border-t border-[#d3d3d3]   pr-[157px] text-[13px] leading-[14.2px] py-[12.3px] flex justify-between"
                >
                  6-Month Commitment
                </p>
                <h1 className=" text-[19px] mt-[9.5px] text-[#fff] h-[47.6px] bg-[#ff622b] rounded-[5px] inline-flex whitespace-nowrap px-[33px] items-center justify-center relative overflow-hidden cursor-pointer uppercase">
                  Inquire
                </h1>
              </div>
              <div
                id="products-productHeader-3"
                className=" px-[30.5px] py-[28.5px]"
              >
                <h1 className=" uppercase text-[47.6px] leading-[42.8px] tracking-[0.95px] w-[9.5px] mb-[23.8px]">
                  Advanced
                </h1>
                <p
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className=" relative border-t border-[#d3d3d3]   pr-[157px] text-[13px] leading-[14.2px] py-[12.3px] flex justify-between"
                >
                  6-Month Commitment
                </p>
                <h1 className=" text-[19px] mt-[9.5px] text-[#fff] h-[47.6px] bg-[#ff622b] rounded-[5px] inline-flex whitespace-nowrap px-[33px] items-center justify-center relative overflow-hidden cursor-pointer uppercase">
                  Inquire
                </h1>
              </div>
            </div>
          </div>
          <div
            id="products-features"
            className="relative flex justify-evenly  mt-[47.6px] py-[28.5px] mb-0"
          >
            <Features1 />
            <Features2 />
            <Features3 />
            <Features4 />
          </div>
        </div>
      </div>
    </>
  );
};
