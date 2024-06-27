import React, { useState } from "react";
import Bubble from "./image/icon-bubble.svg";
import backgroundImage from "./image/background-grid.svg";
import { Slieder1 } from "./slieder1";
import { Slider2 } from "./slider2";
import { Slider3 } from "./slider3";
import Logo1 from "./image/logo1.webp";
import Logo2 from "./image/logo2.webp";
import Logo3 from "./image/logo3.webp";
import Logo4 from "./image/logo4.webp";
import Logo5 from "./image/logo5.webp";

export const Section6 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const handleNext = (e) => {
    e.preventDefault();
    if (currentSlide < 3) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <section id="section-6" className="mr-[-30px]">
        <div
          id="people nav-blue locked"
          className="w-full  ml-[-14px] bg-[#989696] pt-[190px] pr-[14px] pl-[14px] pb-[142px]"
        >
          <div id="people-top grid" className=" mb-[57px]">
            <div className="flex pl-[14px] pr-[14px]">
              <div
                id="block sectionBlock anima in-2"
                className="bg-white border border-[black] rounded-md max-w-[339px]  h-[153.4px]"
              >
                <div
                  id="sectionBlock-top-2"
                  className=" h-[55px] justify-between flex border-b border-[black] pl-[21px] "
                >
                  <div className="flex items-center justify-center ">
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
                  className=" pt-[17px] pr-[21px] pl-[21px] pb-[22px] h-[96px] flex items-center justify-center"
                >
                  <p
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className=" h-[57px] text-[19px]"
                  >
                    Our system works, and we’re proud to share success stories.
                  </p>
                </div>
              </div>
              <div id="block-2" className=" flex-1 h-[300px] pl-[14px]   ">
                <h1
                  id="h1-anima-in-2"
                  className=" h-[300px] border border-[black] rounded-[5px] pl-[33.33px]  bg-[#fff]"
                >
                  <div
                    className="pl-[29.5px] h-[146.66px]  border-b border-[black] relative text-[133px] flex items-center"
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
                    className=" h-[147.66px] text-[133px] flex items-center justify-end bg-[#fff] pr-[19px]"
                    style={{ letterSpacing: "2.66px" }}
                  >
                    REAL RESULTS.
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div
            id="people-slider first-slide init"
            className=" relative mb-[191px]"
          >
            {currentSlide === 1 && (
              <Slieder1
                currentSlide={currentSlide}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              />
            )}
            {currentSlide === 2 && <Slider2 />}
            {currentSlide === 3 && <Slider3 />}
            <div
              id="people-nav"
              className=" absolute right-0 top-0 flex pr-[14px]"
            >
              <span
                id="people-navButton-left"
                className={`w-[76px] mr-[12px] h-[76px] relative inline-flex items-center justify-center cursor-pointer rounded-[5px] bg-[#ececec] ${
                  currentSlide === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePrevious}
                disabled={currentSlide === 1}
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-x-[-1]"
                >
                  <path
                    d="M20.1531 18.7465H0.310515L0.310515 13.4903L20.1531 13.4903H20.903L20.3726 12.9602L11.9834 4.57419L16.1184 0.439135L31.7977 16.1184L16.1184 31.7977L11.9834 27.6626L20.3726 19.2767L20.903 18.7465H20.1531Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.621031"
                  />
                </svg>
              </span>
              <span
                id="people-navButton-right"
                className={`w-[76px] h-[76px] relative inline-flex items-center justify-center cursor-pointer rounded-[5px] bg-[#363639] ${
                  currentSlide === 3 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleNext}
                disabled={currentSlide === 3}
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1531 18.7465H0.310515L0.310515 13.4903L20.1531 13.4903H20.903L20.3726 12.9602L11.9834 4.57419L16.1184 0.439135L31.7977 16.1184L16.1184 31.7977L11.9834 27.6626L20.3726 19.2767L20.903 18.7465H20.1531Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.621031"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div id="people-bottom" className="h-[232px] overflow-hidden">
            <div id="people-client-1" className="h-[110.4px]  mb-[11.4px]">
              <div
                id="people-clientRail-1"
                className=" whitespace-nowrap absolute top-0 left-0 text-0 overflow-hidden"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                <span
                  id="block-1"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo1}
                    alt="Logo 1"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-2"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo2}
                    alt="Logo 2"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-3"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo3}
                    alt="Logo 3"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-4"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo4}
                    alt="Logo 4"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-5"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo5}
                    alt="Logo 5"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-1"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo1}
                    alt="Logo 1"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-2"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo2}
                    alt="Logo 2"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-3"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo3}
                    alt="Logo 3"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-4"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo4}
                    alt="Logo 4"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
                <span
                  id="block-5"
                  class="relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px] bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo5}
                    alt="Logo 5"
                    class="absolute h-[114px] left-[30%]"
                  />
                </span>
              </div>
            </div>
            <div
              id="people-client-2"
              className="h-[110.4px] relative mb-[11.4px]"
            >
              <div
                id="people-clientRail-2"
                className=" whitespace-nowrap absolute top-0 left-0 text-0 overflow-hidden"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                <span
                  id="block-1"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo1}
                    alt="Logo 1"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-2"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo2}
                    alt="Logo 2"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-3"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  {" "}
                  <img
                    src={Logo3}
                    alt="Logo 3"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-4"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo4}
                    alt="Logo 4"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-5"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo5}
                    alt="Logo 5"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-1"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo1}
                    alt="Logo 1"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-2"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo2}
                    alt="Logo 2"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-3"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  {" "}
                  <img
                    src={Logo3}
                    alt="Logo 3"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-4"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo4}
                    alt="Logo 4"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
                <span
                  id="block-5"
                  className=" relative inline-block w-[280px] h-[110.4px] mr-[11.4px] ml-[11.4px]  bg-[#fff] border border-[black] rounded-[5px]"
                >
                  <img
                    src={Logo5}
                    alt="Logo 5"
                    className=" absolute h-[114px]  left-[30%]"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
