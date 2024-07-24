import React, { useState } from "react";
import Smiley from "./image/icon-smiley.svg";
import backgroundImage from "./image/background-grid.svg";
import { AnimatedSection } from "./animatedsection";
import "./section2.css";
import Promise1 from "./image/promise_1.webp";
import Promise2 from "./image/promise_2.webp";
import Promise3 from "./image/promise_3.webp";
import Promise4 from "./image/promise_4.webp";
import Promise5 from "./image/promise_5.webp";
import Promise6 from "./image/promise_6.webp";
import Promise7 from "./image/promise_7.webp";
export default function Section2() {
  const images = [
    Promise1,
    Promise2,
    Promise3,
    Promise4,
    Promise5,
    Promise6,
    Promise7,
  ];
  const [hoveredImage, setHoveredImage] = useState(1);

  const handleMouseEnter = (imageNumber) => {
    setHoveredImage(imageNumber);
  };
  const handleMouseLeave = () => {
    setHoveredImage(1);
  };

  return (
    <>
      <div
        id="section-2"
        className=" w-full h-full bg-[#989696] top-0 left-0 right-0 bottom-0 bg-[position:6.35rem_0rem] p-[14px] pt-0 relative "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div id="promise nav-blue locked" className="w-full     ">
          <div id="grid" className=" flex justify-between">
            <div id="col" className="w-[339px] h-[1673px]">
              <AnimatedSection
                id="block-sectionBlock-anima-in"
                className="bg-white border border-[black] rounded-md w-[339px] h-[153.4px]"
                animationClass="slide-in-left"
              >
                <div
                  id="sectionBlock-top"
                  className="w-[337px] h-[55px] justify-between flex border-b border-[black] "
                >
                  <div className="flex items-center justify-center w-[253px]">
                    <h1 className="font-pp-right  text-[24px]">
                      THE PATCH PROMISE
                    </h1>
                  </div>

                  <div
                    id="sectionBlock-icon"
                    className="w-[83.8px] h-[54px] border-l border-[black] flex items-center justify-center"
                  >
                    <img
                      src={Smiley}
                      alt="Smiley Icon"
                      className="w-[60px] h-[31px]"
                    />
                  </div>
                </div>
                <div
                  id="sectionBlock-bottom"
                  className="w-[337px] h-[96px] flex items-center justify-center"
                >
                  <p
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className="w-[295px] h-[57px] text-[19px]"
                  >
                    Never worry about having enough customers. We got you
                    covered.
                  </p>
                </div>
              </AnimatedSection>
              <div
                id="promise-images"
                className="w-[339px] h-[414px] mt-[14px] bg-[#fff] rounded-[5px] border border-[black] sticky top-[50px]"
              >
                {hoveredImage && (
                  <img
                    src={images[hoveredImage - 1]}
                    alt={`Promise ${hoveredImage}`}
                  />
                )}
              </div>
            </div>
            <div id="col1" className=" bg-[#fff] rounded-[5px] ml-[14px]">
              <div
                id="promise-text"
                className="  relative  pt-[138px] pr-[124px] pb-[142px] pl-[167px]"
              >
                <div id="section-couter">
                  <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px] overflow-hidden">
                    01
                  </h1>
                  <p className=""></p>
                </div>
                <div>
                  <div id="content-block" className=" pt-[33px] pb-[33px] ">
                    <h1 className="font-pp-right w-[36px] h-[36px] border border-[black] text-[19px] flex items-center justify-center absolute top-[160px] left-[75px] ">
                      01
                    </h1>
                    <h1
                      className="font-pp-right text-[90.5px] leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      BUILD YOUR MARKETING MACHINE
                    </h1>
                  </div>
                  <div id="content-block1" className=" pt-[33px] pb-[33px] ">
                    <h1 className="font-pp-right  w-[36px] h-[36px] border border-[black] text-[19px] flex items-center justify-center absolute left-[75px] top-[370px]  ">
                      02
                    </h1>
                    <h1
                      className="font-pp-right text-[90.5px] leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    >
                      FIND MORE PATIENTS
                    </h1>
                  </div>
                  <div id="content-block2" className=" pt-[33px] pb-[33px] ">
                    <h1 className="font-pp-right  w-[36px] h-[36px] border border-[black] text-[19px] flex items-center justify-center absolute left-[75px] top-[580px] ">
                      03
                    </h1>
                    <h1
                      className="font-pp-right text-[90.5px] leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(3)}
                      onMouseLeave={handleMouseLeave}
                    >
                      AUTOMATE YOUR CUSTOMER JOURNEY
                    </h1>
                  </div>
                  <div id="content-block3" className=" pt-[33px] pb-[33px] ">
                    <h1 className="font-pp-right  w-[36px] h-[36px] border border-[black] text-[19px] flex items-center justify-center absolute left-[75px] top-[790px]  ">
                      04
                    </h1>
                    <h1
                      className="font-pp-right text-[90.5px] leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(4)}
                      onMouseLeave={handleMouseLeave}
                    >
                      DOUBLE YOUR MONTHLY REVENUE
                    </h1>
                  </div>
                  <div id="content-block4" className=" pt-[33px] pb-[33px] ">
                    <h1 className="font-pp-right  w-[36px] h-[36px] border border-[black] text-[19px] flex items-center justify-center absolute left-[75px] top-[1000px] ">
                      05
                    </h1>
                    <h1
                      className="font-pp-right text-[90.5px] leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(5)}
                      onMouseLeave={handleMouseLeave}
                    >
                      DONE FOR YOUR EMAIL MARKETING
                    </h1>
                  </div>
                  <div id="content-block5" className=" pt-[33px] pb-[33px] ">
                    <h1 className="font-pp-right  w-[36px] h-[36px] border border-[black] text-[19px] flex items-center justify-center absolute left-[75px] top-[1210px]  ">
                      06
                    </h1>
                    <h1
                      className="font-pp-right text-[90.5px] leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(6)}
                      onMouseLeave={handleMouseLeave}
                    >
                      5X YOUR GOOGLE ADS SPEND
                    </h1>
                  </div>
                  <div id="content-block6" className=" pt-[33px] pb-[33px] ">
                    <h1 className="font-pp-right w-[36px] h-[36px] border border-[black] text-[19px] flex items-center justify-center absolute left-[75px] top-[1420px] ">
                      07
                    </h1>
                    <h1
                      className="font-pp-right text-[90.5px] leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(7)}
                      onMouseLeave={handleMouseLeave}
                    >
                      SAVE 5 HOURS A WEEK
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
