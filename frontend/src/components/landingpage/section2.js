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
        className="w-full h-full bg-[#989696] p-[14px] pt-0 relative bg-[position:6.35rem_0rem]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div id="promise nav-blue locked" className="w-full">
          <div id="grid" className="flex flex-col lg:flex-row justify-between">
            <div id="col" className="w-full lg:w-[339px] h-auto lg:h-[1673px]">
              <AnimatedSection
                id="block-sectionBlock-anima-in"
                className="bg-white border border-black rounded-md  w-[300px] lg:w-[339px] h-[153.4px] "
                animationClass="slide-in-left"
              >
                <div
                  id="sectionBlock-top"
                  className="lg:w-[337px] w-auto h-[55px] flex justify-between border-b border-black lg:pl-0 pl-[15px"
                >
                  <div className="flex items-center justify-center w-auto lg:w-[253px] lg:pl-0 pl-[20px">
                    <h1 className="font-pp-right  text-[24px]">
                      THE PATCH PROMISE
                    </h1>
                  </div>
                  <div
                    id="sectionBlock-icon"
                    className="w-[83.8px] h-[54px] border-l border-black flex items-center justify-center"
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
                  className="lg:w-[337px] w-auto h-[96px] flex items-center justify-center"
                >
                  <p
                    style={{ fontFamily: "Archivo, sans-serif" }}
                    className="lg:w-[295px] w-auto lg:pl-0 pl-[5px] h-[57px] text-[19px]"
                  >
                    Never worry about having enough customers. We got you
                    covered.
                  </p>
                </div>
              </AnimatedSection>
              <div
                id="promise-images"
                className="hidden lg:block w-[339px] h-[414px] mt-[14px] bg-white rounded-[5px] border border-black sticky top-[50px]"
              >
                {hoveredImage && (
                  <img
                    src={images[hoveredImage - 1]}
                    alt={`Promise ${hoveredImage}`}
                  />
                )}
              </div>
            </div>
            <div id="section-couter" className="bg-white">
              <h1 className="font-pp-right text-xl lg:text-[27px] absolute bottom-[5px] left-[5px] overflow-hidden ">
                01
              </h1>
              <p className=""></p>
            </div>
            <div
              id="col1"
              className="bg-white rounded-[5px] mt-6 lg:mt-0 lg:ml-[14px]"
            >
              <div
                id="promise-text"
                className="relative pt-[138px] pr-[124px] pb-[142px] pl-[167px]"
              >
                <div>
                  <div
                    id="content-block"
                    className="pt-[33px] pb-[33px]  lg:w-auto w-[181px] lg:ml-0 -ml-[100px]"
                  >
                    <h1
                      id="inside"
                      className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute top-[160px] left-[75px] lg:-ml-0 -ml-[50px]"
                    >
                      01
                    </h1>
                    <h1
                      id="letter"
                      className="font-pp-right text-4xl lg:text-[90.5px] leading-tight lg:leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      BUILD YOUR MARKETING MACHINE
                    </h1>
                    {hoveredImage === 1 && (
                      <img
                        src={images[0]}
                        alt="Promise 1"
                        className=" absolute w-[200px] h-[230px] right-[10px] top-[110px] lg:hidden sm:block"
                      />
                    )}
                  </div>

                  <div
                    id="content-block1"
                    className="pt-[33px] flex items-center  pb-[33px] lg:w-auto w-[181px] lg:ml-0 -ml-[100px]"
                  >
                    <h1
                      id="inside1"
                      className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute left-[75px] top-[390px] lg:-ml-0 -ml-[50px]"
                    >
                      02
                    </h1>
                    <h1
                      id="letter1"
                      className="font-pp-right text-4xl lg:text-[90.5px] leading-tight lg:leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    >
                      FIND MORE PATIENTS
                    </h1>
                    {hoveredImage === 2 && (
                      <img
                        src={images[1]}
                        alt="Promise 2"
                        className=" absolute w-[200px] h-[230px] right-[10px] top-[270px] lg:hidden sm:block"
                      />
                    )}
                  </div>
                  <div
                    id="content-block2"
                    className="pt-[33px] flex items-center  pb-[33px] lg:w-auto w-[181px] lg:ml-0 -ml-[100px]"
                  >
                    <h1
                      id="inside2"
                      className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute left-[75px] top-[550px] lg:-ml-0 -ml-[50px]"
                    >
                      03
                    </h1>
                    <h1
                      id="letter2"
                      className="font-pp-right text-4xl lg:text-[90.5px] leading-tight lg:leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(3)}
                      onMouseLeave={handleMouseLeave}
                    >
                      AUTOMATE YOUR CUSTOMER JOURNEY
                    </h1>
                    {hoveredImage === 3 && (
                      <img
                        src={images[2]}
                        alt="Promise 3"
                        className=" absolute w-[200px] h-[230px] right-[10px] top-[490px] lg:hidden sm:block"
                      />
                    )}
                  </div>
                  <div
                    id="content-block3"
                    className="pt-[33px] flex items-center  pb-[33px] lg:w-auto w-[181px] lg:ml-0 -ml-[100px]"
                  >
                    <h1
                      id="inside3"
                      className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute left-[75px] top-[780px] lg:-ml-0 -ml-[50px]"
                    >
                      04
                    </h1>
                    <h1
                      id="letter3"
                      className="font-pp-right text-4xl lg:text-[90.5px] leading-tight lg:leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(4)}
                      onMouseLeave={handleMouseLeave}
                    >
                      DOUBLE YOUR MONTHLY REVENUE
                    </h1>
                    {hoveredImage === 4 && (
                      <img
                        src={images[3]}
                        alt="Promise 4"
                        className=" absolute w-[200px] h-[230px] right-[10px] top-[700px] lg:hidden sm:block"
                      />
                    )}
                  </div>
                  <div
                    id="content-block4"
                    className="pt-[33px] flex items-center  pb-[33px] lg:w-auto w-[181px] lg:ml-0 -ml-[100px]"
                  >
                    <h1
                      id="inside4"
                      className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute left-[75px] top-[980px] lg:-ml-0 -ml-[50px]"
                    >
                      05
                    </h1>
                    <h1
                      id="letter4"
                      className="font-pp-right text-4xl lg:text-[90.5px] leading-tight lg:leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(5)}
                      onMouseLeave={handleMouseLeave}
                    >
                      DONE FOR YOUR EMAIL MARKETING
                    </h1>
                    {hoveredImage === 5 && (
                      <img
                        src={images[4]}
                        alt="Promise 5"
                        className=" absolute w-[200px] h-[230px] right-[10px] top-[930px] lg:hidden sm:block"
                      />
                    )}
                  </div>
                  <div
                    id="content-block5"
                    className="pt-[33px] flex items-center  pb-[33px] lg:w-auto w-[181px] lg:ml-0 -ml-[100px]"
                  >
                    <h1
                      id="inside5"
                      className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute left-[75px] top-[1190px] lg:-ml-0 -ml-[50px]"
                    >
                      06
                    </h1>
                    <h1
                      id="letter5"
                      className="font-pp-right text-4xl lg:text-[90.5px] leading-tight lg:leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(6)}
                      onMouseLeave={handleMouseLeave}
                    >
                      5X YOUR GOOGLE ADS SPEND
                    </h1>
                    {hoveredImage === 6 && (
                      <img
                        src={images[5]}
                        alt="Promise 6"
                        className=" absolute w-[200px] h-[230px] right-[10px] top-[1150px] lg:hidden sm:block"
                      />
                    )}
                  </div>
                  <div
                    id="content-block6"
                    className="pt-[33px] flex items-center  pb-[33px] lg:w-auto w-[181px] lg:ml-0 -ml-[100px]"
                  >
                    <h1
                      id="inside6"
                      className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute left-[75px] top-[1370px] lg:-ml-0 -ml-[50px]"
                    >
                      07
                    </h1>
                    <h1
                      id="letter6"
                      className="font-pp-right text-4xl lg:text-[90.5px] leading-tight lg:leading-[70px]"
                      onMouseEnter={() => handleMouseEnter(7)}
                      onMouseLeave={handleMouseLeave}
                    >
                      SAVE 5 HOURS A WEEK
                    </h1>
                    {hoveredImage === 7 && (
                      <img
                        src={images[6]}
                        alt="Promise 7"
                        className=" absolute w-[200px] h-[230px] right-[10px] top-[1350px] lg:hidden sm:block"
                      />
                    )}
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
