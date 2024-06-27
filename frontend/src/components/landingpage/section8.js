import React, { useState } from "react";
import Bubble from "./image/icon-bubble.svg";
import backgroundImage from "./image/background-grid.svg";
import Client from "./image/client_1.webp";
import ClientLogo from "./image/clientLogo_1.webp";

export const Section6 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    if (currentSlide < 3) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
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
                  <h1 className="font-pp-right  text-[24px]">CLIENT RESULTS</h1>
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

        {/* Slider Section */}
        <div id="people-slider first-slide init" className="relative">
          {currentSlide === 1 && (
            <div id="people-slides" className="pl-[14px]">
              <div
                id="people-slide block"
                className="pt-[28.5px] pb-[24px] pl-[28.5px] pr-[28.5px] w-[1058px] h-[649px] bg-[#fff] border border-[black] rounded-[5px]"
              >
                <div
                  id="testimonial-top"
                  className="flex border-b h-[390px] border-[black] items-center justify-between"
                >
                  <div
                    id="testimonial-image"
                    className="max-w-[272px] min-w-[272px] border-r border-[black]"
                  >
                    <img
                      src={Client}
                      alt="Client Icon"
                      className="h-[389px] max-w-[272px] pr-[30px] pb-[30px]"
                    />
                  </div>
                  <div className="pb-[30px]">
                    <div
                      id="testimonial-main"
                      className="w-[696px] relative rounded-[5px] h-[364px] pt-[38px] pl-[57px] pr-[57px] pb-[25px] bg-slate-300"
                    >
                      <h1
                        id="testimonial-quote"
                        className="font-pp-right text-[38px] leading-[43px] tracking-[1.5px] uppercase"
                      >
                        <p>
                          Patch helped us with our Google Ads and now we've seen
                          a huge return. compared to who we were previously
                          Patch is miles ahead more effective!
                        </p>
                      </h1>
                      <div
                        id="testimonial-author"
                        class="m-w-[620px] absolute bottom-0 border-t border-[black] pb-[43.2px] h-[89px]  w-[620px] border-opacity-30 pt-[24px] text-[14.2px]"
                      >
                        <h1 className="text-[19px] leading-[22.85px]">
                          Amy Hooper
                          <span className="text-[12.3px] tracking-[0.6px]">
                            PT, DPT
                          </span>
                        </h1>
                        <span className="text-[11.4px] leading-[22.85px] uppercase">
                          Founder of East Side Movement
                        </span>
                        <picture>
                          <img
                            src={ClientLogo}
                            alt="Client Logo"
                            className="absolute top-[30%] h-[44px] right-[9.5px]"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="testimonial-mid"
                  className=" flex pl-[302.8px] h-[167.62px] pt-[11.4px] pb-[22.85px] relative border-b border-[black]"
                >
                  <h1
                    id="subheading"
                    className="text-[19px] absolute top-[20px] left-0 uppercase tracking-[0.57px] leading-[17.9px]"
                  >
                    The Results
                  </h1>
                  <div
                    id="testimonial-result"
                    className="min-w-[190.4px] max-w-[190.4px] "
                  >
                    <h1 className="text-[90.4px] flex pt-[45px] leading-[1.8px]">
                      10
                      <h1 className="text-[61.9px]  ">x</h1>
                    </h1>
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[17px] pt-[40px] "
                    >
                      ROI on Google Ads Spend
                    </p>
                  </div>
                  <div
                    id="testimonial-result-2"
                    className="min-w-[190.4px] max-w-[190.4px] pl-[25px]"
                  >
                    <h1 className="text-[90.4px] leading-[1.8px] flex pt-[45px]">
                      20
                      <h1 className="text-[61.9px] flex pt-[10px] ">K+</h1>
                    </h1>
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[17px] pt-[30px] "
                    >
                      Made each month over the past year{" "}
                    </p>
                  </div>
                </div>
                <div id="testimonial-bottom" className=" uppercase pt-[19px]">
                  <h1 className="text-[19px]">Testimonial: 001</h1>
                </div>
              </div>
            </div>
          )}

          {currentSlide === 2 && (
            <div id="people-slides" className="pl-[14px]">
              <div
                id="people-slide block"
                className="pt-[28.5px] pb-[24px] pl-[28.5px] pr-[28.5px] w-[1058px] h-[649px] bg-[#fff] border border-[black] rounded-[5px]"
              >
                <div
                  id="testimonial-top"
                  className="flex border-b h-[390px] border-[black] items-center justify-between"
                >
                  <div
                    id="testimonial-image"
                    className="max-w-[272px] min-w-[272px] border-r border-[black]"
                  >
                    <img
                      src={Client}
                      alt="Client Icon"
                      className="h-[389px] max-w-[272px] pr-[30px] pb-[30px]"
                    />
                  </div>
                  <div className="pb-[30px]">
                    <div
                      id="testimonial-main"
                      className="w-[696px] relative rounded-[5px] h-[364px] pt-[38px] pl-[57px] pr-[57px] pb-[25px] bg-slate-300"
                    >
                      <h1
                        id="testimonial-quote"
                        className="font-pp-right text-[38px] leading-[43px] tracking-[1.5px] uppercase"
                      >
                        <p>
                          Patch helped us with our Google Ads and now we've seen
                          a huge return. compared to who we were previously
                          Patch is miles ahead more effective!
                        </p>
                      </h1>
                      <div
                        id="testimonial-author"
                        class="m-w-[620px] absolute bottom-0 border-t border-[black] pb-[43.2px] h-[89px]  w-[620px] border-opacity-30 pt-[24px] text-[14.2px]"
                      >
                        <h1 className="text-[19px] leading-[22.85px]">
                          Amy Hooper
                          <span className="text-[12.3px] tracking-[0.6px]">
                            PT, DPT
                          </span>
                        </h1>
                        <span className="text-[11.4px] leading-[22.85px] uppercase">
                          Founder of East Side Movement
                        </span>
                        <picture>
                          <img
                            src={ClientLogo}
                            alt="Client Logo"
                            className="absolute top-[30%] h-[44px] right-[9.5px]"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="testimonial-mid"
                  className=" flex pl-[302.8px] h-[167.62px] pt-[11.4px] pb-[22.85px] relative border-b border-[black]"
                >
                  <h1
                    id="subheading"
                    className="text-[19px] absolute top-[20px] left-0 uppercase tracking-[0.57px] leading-[17.9px]"
                  >
                    The Results
                  </h1>
                  <div
                    id="testimonial-result"
                    className="min-w-[190.4px] max-w-[190.4px] "
                  >
                    <h1 className="text-[90.4px] flex pt-[45px] leading-[1.8px]">
                      10
                      <h1 className="text-[61.9px]  ">x</h1>
                    </h1>
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[17px] pt-[40px] "
                    >
                      ROI on Google Ads Spend
                    </p>
                  </div>
                  <div
                    id="testimonial-result-2"
                    className="min-w-[190.4px] max-w-[190.4px] pl-[25px]"
                  >
                    <h1 className="text-[90.4px] leading-[1.8px] flex pt-[45px]">
                      20
                      <h1 className="text-[61.9px] flex pt-[10px] ">K+</h1>
                    </h1>
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[17px] pt-[30px] "
                    >
                      Made each month over the past year{" "}
                    </p>
                  </div>
                </div>
                <div id="testimonial-bottom" className=" uppercase pt-[19px]">
                  <h1 className="text-[19px]">Testimonial: 002</h1>
                </div>
              </div>
            </div>
          )}

          {currentSlide === 3 && (
            <div id="people-slides" className="pl-[14px]">
              <div
                id="people-slide block"
                className="pt-[28.5px] pb-[24px] pl-[28.5px] pr-[28.5px] w-[1058px] h-[649px] bg-[#fff] border border-[black] rounded-[5px]"
              >
                <div
                  id="testimonial-top"
                  className="flex border-b h-[390px] border-[black] items-center justify-between"
                >
                  <div
                    id="testimonial-image"
                    className="max-w-[272px] min-w-[272px] border-r border-[black]"
                  >
                    <img
                      src={Client}
                      alt="Client Icon"
                      className="h-[389px] max-w-[272px] pr-[30px] pb-[30px]"
                    />
                  </div>
                  <div className="pb-[30px]">
                    <div
                      id="testimonial-main"
                      className="w-[696px] relative rounded-[5px] h-[364px] pt-[38px] pl-[57px] pr-[57px] pb-[25px] bg-slate-300"
                    >
                      <h1
                        id="testimonial-quote"
                        className="font-pp-right text-[38px] leading-[43px] tracking-[1.5px] uppercase"
                      >
                        <p>
                          Patch helped us with our Google Ads and now we've seen
                          a huge return. compared to who we were previously
                          Patch is miles ahead more effective!
                        </p>
                      </h1>
                      <div
                        id="testimonial-author"
                        class="m-w-[620px] absolute bottom-0 border-t border-[black] pb-[43.2px] h-[89px]  w-[620px] border-opacity-30 pt-[24px] text-[14.2px]"
                      >
                        <h1 className="text-[19px] leading-[22.85px]">
                          Amy Hooper
                          <span className="text-[12.3px] tracking-[0.6px]">
                            PT, DPT
                          </span>
                        </h1>
                        <span className="text-[11.4px] leading-[22.85px] uppercase">
                          Founder of East Side Movement
                        </span>
                        <picture>
                          <img
                            src={ClientLogo}
                            alt="Client Logo"
                            className="absolute top-[30%] h-[44px] right-[9.5px]"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="testimonial-mid"
                  className=" flex pl-[302.8px] h-[167.62px] pt-[11.4px] pb-[22.85px] relative border-b border-[black]"
                >
                  <h1
                    id="subheading"
                    className="text-[19px] absolute top-[20px] left-0 uppercase tracking-[0.57px] leading-[17.9px]"
                  >
                    The Results
                  </h1>
                  <div
                    id="testimonial-result"
                    className="min-w-[190.4px] max-w-[190.4px] "
                  >
                    <h1 className="text-[90.4px] flex pt-[45px] leading-[1.8px]">
                      10
                      <h1 className="text-[61.9px]  ">x</h1>
                    </h1>
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[17px] pt-[40px] "
                    >
                      ROI on Google Ads Spend
                    </p>
                  </div>
                  <div
                    id="testimonial-result-2"
                    className="min-w-[190.4px] max-w-[190.4px] pl-[25px]"
                  >
                    <h1 className="text-[90.4px] leading-[1.8px] flex pt-[45px]">
                      20
                      <h1 className="text-[61.9px] flex pt-[10px] ">K+</h1>
                    </h1>
                    <p
                      style={{ fontFamily: "Archivo, sans-serif" }}
                      className="text-[17px] pt-[30px] "
                    >
                      Made each month over the past year{" "}
                    </p>
                  </div>
                </div>
                <div id="testimonial-bottom" className=" uppercase pt-[19px]">
                  <h1 className="text-[19px]">Testimonial: 003</h1>
                </div>
              </div>
            </div>
          )}

          <div id="slider-controls" className="flex justify-center mt-4">
            <button
              onClick={handlePrevious}
              className={`mr-4 p-2 ${
                currentSlide === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentSlide === 1}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className={`ml-4 p-2 ${
                currentSlide === 3 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentSlide === 3}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
