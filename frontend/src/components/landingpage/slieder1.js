import React from "react";
import Client from "./image/client_1.webp";
import ClientLogo from "./image/clientLogo_1.webp";
export const Slieder1 = ({ currentSlide, handleNext, handlePrevious }) => {
  return (
    <>
      <div id="people-slides" className="pl-[14px">
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
                    Patch helped us with our Google Ads and now we've seen a
                    huge return. compared to who we were previously Patch is
                    miles ahead more effective!
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
    </>
  );
};
