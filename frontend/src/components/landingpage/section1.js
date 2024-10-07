import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./image/background-grid.svg";
import PaperM from "./image/icon-paper-m.svg";
import PatchHero from "./image/Patch_hero.gif";
import VenIcon from "./image/icon-venn.svg";
import BucketPicon from "./image/icon-bucket-p.svg";
import ArrowThin from "./image/arrow-thin-blue.svg";
import { Patch } from "./patch";
import { AnimatedSection } from "./animatedsection.js";
import { motion } from "framer-motion";
import "./section1.css";
import "./home.css";

export default function Section1() {
  const navigate = useNavigate();
  const handleSignInClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div
        id="section1"
        className="w-full min-h-screen bg-[#989696] bg-[position:6.35rem_0rem] p-4 md:p-8 relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="bg-black w-auto bg-[position:-6.4rem_5rem] rounded-[0.5rem] p-4 md:p-8"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex sticky top-0 items-center justify-between w-auto h-auto pt-2 md:pt-4">
            <p
              className="text-[#fff] text-center md:text-left flex-none md:ml-10"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              <Patch />
            </p>
            <button
              onClick={handleSignInClick}
              className="bg-blue-500 text-white rounded text-base px-2 py-1 md:px-4 md:py-2"
            >
              Sign In
            </button>
          </div>

          <h1 className="font-pp-right flex items-center justify-center flex-col leading-tight text-center my-8 md:my-16">
            <motion.span
              className="text-5xl md:text-[10vw] text-[aliceblue] leading-tight"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              SIMPLIFY YOUR TASKS
            </motion.span>
            <motion.span
              className="text-5xl md:text-[10vw] text-[aliceblue] leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              ACHIEVE MORE
            </motion.span>
          </h1>

          <div
            id="homeheader-mid"
            className="mt-8 flex flex-col md:flex-row justify-around mx-4 md:mx-28 mb-8 space-y-8 md:space-y-0 md:space-x-8"
          >
            <AnimatedSection
              id="homeheader-midline"
              className="h-24 md:h-[6rem] w-full md:w-[23rem] justify-around overflow-hidden relative will-change-height items-center mt-8 border-t border-b border-white border-opacity-50 hidden md:flex"
              animationClass="slide-in-left"
            >
              <img
                src={PaperM}
                alt="Icon Paper M"
                className="w-[3.5rem] h-[1.8rem]"
              />
              <h1 className="uppercase tracking-[0.03em] text-[1.2rem] text-[aliceblue] h-[1.5rem] font-pp-right">
                MANAGE YOUR TIME EFFORTLESSLY
              </h1>
            </AnimatedSection>
            <AnimatedSection
              id="homedeader-image"
              className="h-[220px] md:h-[23.5rem] w-full md:w-[23.5rem] bg-[#ffff] rounded-[0.5rem] flex items-center justify-center"
              animationClass="slide-in-bottom"
            >
              <img
                src={PatchHero}
                alt="Patch Hero Icon"
                className="p-[1.5rem] w-[90%] h-[90%] object-contain"
              />
            </AnimatedSection>
            <AnimatedSection
              id="homeheader-midline1"
              className="h-24 md:h-[6rem] w-full md:w-[23rem] flex justify-around overflow-hidden relative will-change-height items-center mt-8  border-t border-b border-white border-opacity-50 custom-mt-32"
              animationClass="slide-in-right"
            >
              <h1 className="uppercase tracking-[0.03em] text-base md:text-[1.2rem] text-[aliceblue] h-[1.5rem] font-pp-right contents">
                LIVE MORE EFFECTIVELY
              </h1>
              <img
                src={VenIcon}
                alt="Ven Icon"
                className="w-[3.5rem] h-[1.8rem]"
              />
            </AnimatedSection>
          </div>

          <div
            id="homeHeader-bottom"
            className="pb-8 mx-4 md:mx-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <AnimatedSection
              id="homeHeader-bottom-iconLeft"
              className="bg-white w-[5rem] py-[0.5rem] justify-center items-center rounded-[0.5rem] hidden md:flex"
              animationClass="slide-in-left"
            >
              <img src={BucketPicon} alt="Bucket-P Icon" />
            </AnimatedSection>
            <AnimatedSection
              id="homeHeader-bottom-letter"
              className="text-[#fff] w-full md:w-[26rem] text-base md:text-xl text-center md:mr-[35px]"
              animationClass="slide-in-bottom"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Set goals to pave your path, achieve dreams to fulfill your
              potential.
            </AnimatedSection>
            <AnimatedSection
              id="homeHeader-bottom-iconRight"
              className="w-[2.7rem] py-[0.5rem] justify-center items-center rounded-[0.5rem] bg-[#fff] hidden md:flex"
              animationClass="slide-in-right"
            >
              <img src={ArrowThin} alt="Arrow Thin" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
}
