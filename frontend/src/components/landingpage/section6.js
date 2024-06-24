import React from "react";
import Bubble from "./image/icon-bubble.svg";
import backgroundImage from "./image/background-grid.svg";

export const Section6 = () => {
  return (
    <>
      <section id="section-6">
        <div
          id="people nav-blue locked"
          className="w-[1440px] h-[1888px] absolute top-[6309px] ml-[-14px] bg-[#989696] pt-[190px] pr-[14px] pl-[14px] pb-[142px]"
        >
          <div id="people-top grid" className="h-[300px] mb-[57px]">
            <div className="flex">
              <div
                id="block sectionBlock anima in-2"
                className="bg-white border border-[black] rounded-md w-[339px] h-[153.4px]"
              >
                <div
                  id="sectionBlock-top-2"
                  className="w-[337px] h-[55px] justify-between flex border-b border-[black] "
                >
                  <div className="flex items-center justify-center w-[253px]">
                    <h1 className="font-pp-right  text-[24px]">
                      CLIENT RESULTS
                    </h1>
                  </div>

                  <div
                    id="sectionBlock-icon-2"
                    className="w-[83.8px] h-[54px] border-l border-[black] flex items-center justify-center"
                  >
                    <img
                      src={Bubble}
                      alt="Bubble Icon"
                      className="w-[60px] h-[31px]"
                    />
                  </div>
                </div>
                <div
                  id="sectionBlock-bottom-2"
                  className="w-[337px] h-[96px] flex items-center justify-center"
                >
                  <p
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className="w-[295px] h-[57px] text-[19px]"
                  >
                    Our system works, and we’re proud to share success stories.
                  </p>
                </div>
              </div>
              <div id="block-2" className="w-[1058px] h-[300px] pl-[14px]  ">
                <h1
                  id="h1-anima-in-2"
                  className="w-[1058px] h-[300px] border border-[black] rounded-[5px] pl-[33.33px]  bg-[#fff]"
                >
                  <div
                    className="pl-[29.5px] h-[146.66px] w-[1022.78px]  border-b border-[black] relative text-[133px] flex items-center"
                    style={{ letterSpacing: "2.66px" }}
                  >
                    REAL PEOPLE.
                    <div id="section-couter3">
                      <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px]">
                        02
                      </h1>
                      <p className=""></p>
                    </div>
                  </div>
                  <div
                    className="w-[1022.78px] h-[147.66px] text-[133px] flex items-center justify-end bg-[#fff] pr-[19px]"
                    style={{ letterSpacing: "2.66px" }}
                  >
                    REAL RESULTS.
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
