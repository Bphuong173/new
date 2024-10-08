import React from "react";
import Client3 from "./image/client_3.webp";
import ClientLogo3 from "./image/clientLogo_3.webp";

export const Slider3 = ({ currentSlide, handleNext, handlePrevious }) => {
  return (
    <>
      <div id="people-slides" className="pl-[14px]">
        <div
          id="people-slide block"
          className="lgl:pt-[28.5px] pt-[14px] lg:pb-[24px] pb-[10px] lg:pl-[28.5px] pl-[14px] lg:pr-[28.5px] pr-[14px] lg:w-[1058px] w-auto h-auto sm:h-[649px] bg-[#fff] border border-[black] rounded-[5px]"
        >
          {/* Mobile layout (320px - 600px) */}
          <div className="sm:hidden">
            <div className="flex flex-row w-full border-b border-[black] pb-4">
              <div id="testimonial-image-mobile" className="w-1/2 pr-2">
                <img
                  src={Client3}
                  alt="Client Icon"
                  className="h-[175px] w-full object-cover"
                />
              </div>
              <div
                id="testimonial-author-mobile"
                className="w-1/2 pl-2 text-[12px]"
              >
                <h1 className="text-[14px] leading-[18px]">
                  Nick Hagen
                  <span className="text-[10px] tracking-[0.5px] pl-[3px]">
                    PT
                  </span>
                </h1>
                <span className="text-[9px] leading-[16px] uppercase">
                  Founder of East Side Movement
                </span>
                <img
                  src={ClientLogo3}
                  alt="Client Logo"
                  className="h-[30px] mt-[70px] ml-[70px] bg-black"
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <div
                id="testimonial-main-mobile"
                className="w-full relative rounded-[5px] h-auto pt-[14px] pl-[14px] pr-[14px] pb-[14px] bg-slate-300"
              >
                <h1
                  id="testimonial-quote-mobile"
                  className="font-pp-right text-[16px] leading-[25px] tracking-0 uppercase"
                >
                  "appTodo revolutionized our teamwork. Its intuitive interface
                  lets us manage projects, set goals, and achieve faster
                  results."
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop layout (> 600px) */}
          <div className="hidden sm:block">
            <div
              id="testimonial-top"
              className="flex border-b h-[390px] border-[black] items-center justify-between"
            >
              <div
                id="testimonial-image"
                className="lg:max-w-[272px] lg:min-w-[272px] border-r border-[black]"
              >
                <img
                  src={Client3}
                  alt="Client Icon"
                  className="lg:h-[389px] h-[350px] lg:max-w-[272px] lg:pr-[30px] pr-[14px] lg:pb-[30px] pb-0"
                />
              </div>
              <div className="lg:pb-[30px] pb-0 lg:pl-0 pl-[14px] ">
                <div
                  id="testimonial-main"
                  className="lg:w-[696px] w-[190px] relative rounded-[5px] lg:h-[364px] h-[350px] lg:pt-[38px]  lg:pl-[57px]  lg:pr-[57px] lg:pb-[25px]  bg-slate-300"
                >
                  <h1
                    id="testimonial-quote"
                    className="font-pp-right lg:pt-0 lg:pl-0 lg:pr-0 pt-[14px] pl-[14px] pr-[14px] lg:text-[29px] text-[16px] lg:leading-[43px] leading-[25px] lg:tracking-[1.5px] tracking-0 uppercase"
                  >
                    "appTodo revolutionized our teamwork. Its intuitive
                    interface lets us manage projects, set goals, and achieve
                    faster results."
                  </h1>
                  <div
                    id="testimonial-author"
                    className="lg:w-[620px] w-auto absolute bottom-0 border-t border-[black] pb-[43.2px] h-[89px] border-opacity-30 lg:pt-[24px] lg:pl-0 pl-[5px] pt-[5px] text-[14.2px]"
                  >
                    <h1 className="lg:text-[19px] text-[14px] leading-[22.85px]">
                      Nick Hagen
                      <span className="text-[12.3px] tracking-[0.6px] pl-[5px]">
                        PT
                      </span>
                    </h1>
                    <span className="lg:text-[11.4px] text-[10px] leading-[22.85px] uppercase">
                      Founder of East Side Movement
                    </span>
                    <picture>
                      <img
                        src={ClientLogo3}
                        alt="Client Logo"
                        className="absolute lg:top-[30%] top-[50%] h-[44px] right-[9.5px]"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="testimonial-mid"
            className="flex lg:pl-[302.8px] pl-[10px] h-[167.62px] pt-[11.4px] pb-[22.85px] relative border-b border-[black]"
          >
            <h1
              id="subheading"
              className="text-[19px] absolute top-[20px] left-0 uppercase tracking-[0.57px] leading-[17.9px]"
            >
              The Results
            </h1>
            <div
              id="testimonial-result"
              className="lg:min-w-[190.4px] lg:max-w-[190.4px] "
            >
              <h1 className="lg:text-[90.4px] text-[60px] flex lg:pt-[45px] pt-[60px] leading-[1.8px]">
                12<span className="text-[61.9px] pt-[10px]">x</span>
              </h1>
              <p
                style={{ fontFamily: "Archivo, sans-serif" }}
                className=" lg:text-[17px] text-[15px] lg:pt-[40px] pt-[30px] "
              >
                ROI on Google Ads Spend
              </p>
            </div>
            <div
              id="testimonial-result-2"
              className="min-w-[190.4px] max-w-[190.4px] lg:pl-[25px] pl-[20px]"
            >
              <h1 className="lg:text-[90.4px] text-[60px] leading-[1.8px] flex lg:pt-[45px] pt-[60px]">
                50<span className="text-[61.9px] flex pt-[10px]">+</span>
              </h1>
              <p
                style={{ fontFamily: "Archivo, sans-serif" }}
                className="text-[17px] pt-[30px] "
              >
                Google Reviews from quarterly campaign
              </p>
            </div>
            <div
              id="testimonial-result-3"
              className="min-w-[190.4px] max-w-[190.4px] pl-[25px] hidden lg:block"
            >
              <h1 className="text-[90.4px] leading-[1.8px] flex pt-[45px]">
                100
                <span className="text-[61.9px] flex pt-[10px]">k</span>
              </h1>
              <p
                style={{ fontFamily: "Archivo, sans-serif" }}
                className="text-[16px] pt-[30px] "
              >
                While working with Patch did their first 100k month
              </p>
            </div>
          </div>
          <div id="testimonial-bottom" className="uppercase pt-[19px]">
            <h1 className="text-[19px]">Testimonial: 003</h1>
          </div>
        </div>
      </div>
    </>
  );
};
