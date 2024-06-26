import React from "react";
import Client2 from "./image/client_2.webp";
import ClientLogo2 from "./image/clientLogo_2.webp";
export const Slider2 = () => {
  return (
    <>
      <div id="people-slider first-slide init-2" className=" relative">
        <div id="people-slides" className="pl-[14px] ">
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
                  src={Client2}
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
                      Patch has been great for streamlining our process and
                      knowing where patients are in our Method Timeline.
                    </p>
                  </h1>
                  <div
                    id="testimonial-author"
                    class="m-w-[620px] absolute bottom-0 border-t border-[black] pb-[43.2px] h-[89px]  w-[620px] border-opacity-30 pt-[24px] text-[14.2px]"
                  >
                    <h1 className="text-[19px] leading-[22.85px]">
                      Dr. Jaxie Meth
                      <span className="text-[12.3px] tracking-[0.6px]">
                        PT, DPT
                      </span>
                    </h1>
                    <span className="text-[11.4px] leading-[22.85px] uppercase">
                      OWNER OF THE METHOD
                    </span>
                    <picture>
                      <img
                        src={ClientLogo2}
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
                  2<h1 className="text-[61.9px]  ">ND</h1>
                </h1>
                <p
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className="text-[17px] pt-[40px] "
                >
                  Grew enough to open their second location
                </p>
              </div>
              <div
                id="testimonial-result-2"
                className="min-w-[190.4px] max-w-[190.4px] pl-[25px]"
              >
                <h1 className="text-[90.4px] leading-[1.8px] flex pt-[45px]">
                  2<h1 className="text-[61.9px] flex pt-[10px] ">XD</h1>
                </h1>
                <p
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className="text-[17px] pt-[30px] "
                >
                  Their current providers
                </p>
              </div>
              <div
                id="testimonial-result-3"
                className="min-w-[190.4px] max-w-[190.4px] pl-[25px]"
              >
                <h1 className="text-[90.4px] leading-[1.8px] flex pt-[45px]">
                  100
                  <h1 className="text-[61.9px] flex pt-[10px] ">k</h1>
                </h1>
                <p
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className="text-[17px] pt-[30px] "
                >
                  While working with Patch did thier first 100k month
                </p>
              </div>
            </div>
            <div id="testimonial-bottom" className=" uppercase pt-[19px]">
              <h1 className="text-[19px]">Testimonial: 002</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
