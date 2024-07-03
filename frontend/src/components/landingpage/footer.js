import React from "react";
import LogoPatch from "./image/logo-patch.svg";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <div id="footer" className="px-[4.7px] pb-[4.7px] text-[#ffff] block">
        <div id="footer-inner">
          <div id="footer-top" className="flex h-[323.8px] gap-[4.7px]">
            <div
              id="footer-topleft"
              className="h-full w-[323px] px-[38px] py-[38px] rounded-[5px] bg-[#212121] text-[#fff]"
            >
              <div
                id="footer-logo"
                className="h-[84.75px] ml-[19px] mb-[66.66px]"
              >
                <img
                  src={LogoPatch}
                  alt="Logo Patch"
                  className="h-full object-contain"
                />
              </div>
              <div
                id="footer-col-u-hideMobile"
                className=" flex-1 leading-[14px]"
              >
                <h1
                  id="footer-header"
                  className="text-[14.2px] tracking-[0.7px] uppercase mb-[14.2px] block"
                >
                  Stay Connected
                </h1>
                <div>
                  <a
                    href="https://www.instagram.com/_jeremydupont/"
                    class="footer-link underlink py-[4.7px] text-[14.2px]"
                  >
                    Instagram
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/_jeremydupont/"
                    class="footer-link underlink py-[4.7px] text-[14.2px]"
                  >
                    LinkedIn
                  </a>
                </div>
                <div></div>
              </div>
            </div>
            <div class="footer-topRight">
              <div class="footer-row ">
                <div class="footer-subscribe flex-1">
                  <p class=" mb-[4.7px]">
                    {" "}
                    Stay up to date with all things Patch
                  </p>
                  <div class="subscribe h-[81px] w-full relative flex">
                    <input
                      class="w-full mr-[8px] bg-[#212121] pl-[5px] outline-none border-b border-[#7D7D7D] text-[23px]"
                      placeholder="First name*"
                    />
                    <input
                      class="w-full bg-[#212121] pl-[5px] outline-none border-b border-[#7D7D7D] text-[23px] "
                      placeholder="Email*"
                    />
                  </div>
                </div>
              </div>
              <div class="footer-row min-h-[115px] ">
                <div class="footer-col">
                  <h1 class="footer-header">More Info</h1>
                  <p>
                    <a
                      href="https://thepatchsystem.com/#process"
                      class="footer-link underlink"
                    >
                      Process
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://thepatchsystem.com/#offerings"
                      class="footer-link underlink"
                    >
                      Offerings
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://thepatchsystem.com/#team"
                      class="footer-link underlink"
                    >
                      Team
                    </a>
                  </p>
                </div>
                <div class="footer-col">
                  <h1 class="footer-header">SAY HELLO</h1>
                  <p>
                    <a
                      href="mailto:hello@patchsystem.com"
                      class="footer-link underlink"
                    >
                      hello@patchsystem.com
                    </a>
                  </p>
                </div>
                <div class="footer-col">
                  <h1 class="footer-header">Free Downloads</h1>
                  <p>
                    <a
                      href="https://thepatchsystem.com/marketing-freebie"
                      class="footer-link underlink"
                    >
                      Year Marketing Calender
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://thepatchsystem.com/phone-sales-course"
                      class="footer-link underlink"
                    >
                      Phone Sales Course
                    </a>
                  </p>
                </div>
                <div class="footer-col">
                  <h1 class="footer-header">Let's Patch it up</h1>
                  <a
                    href="https://thepatchsystem.com/demo-schedule"
                    class="button"
                  >
                    <h1 class="text-[19px] uppercase tracking-[0.5px] text-[black]">
                      Book a call
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <a
              href="https://thepatchsystem.com/terms-privacy"
              class="underlink "
            >
              <p>Terms and Privacy</p>
            </a>
            <p>Copyright Patch System 2024</p>
            <a href="https://thepatchsystem.com/#top" class="underlink ">
              <p>back to top</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
