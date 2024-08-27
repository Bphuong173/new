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
        className="w-full h-full bg-[#989696] top-0 left-0 right-0 bottom-0 bg-[position:6.35rem_0rem] p-[1rem] relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="bg-black w-auto bg-[position:-6.4rem_5rem] rounded-[0.5rem]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex  sticky top-0 items-center justify-between w-auto h-auto pt-[0.5rem]">
            <p
              className="text-[#fff] text-center md:text-left flex-none md:ml-[2.5rem] md:mr-0 sm:ml-[2.5rem] sm:mr-[2.5rem]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              <Patch />
            </p>
            <button
              onClick={handleSignInClick}
              className="bg-blue-500 text-white rounded md:mr-[2.5rem] text-[1.25rem] md:text-base px-[0.5rem] mt-[0.5rem] md:mt-0"
            >
              Sign In
            </button>
          </div>
          <h1 className="font-pp-right flex items-center justify-center flex-col leading-[8rem] text-center">
            <motion.span
              className="text-[10vw] text-[aliceblue] leading-tight"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              THE EASIEST WAY TO
            </motion.span>
            <motion.span
              className="text-[10vw] text-[aliceblue]  leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              GET MORE PATIENTS
            </motion.span>
          </h1>
          <div
            id="homeheader-mid"
            className="mt-[1rem] flex flex-col md:flex-row  justify-around mx-[7rem] mb-[2rem]"
          >
            <AnimatedSection
              id="homeheader-midline"
              className="h-[6rem] w-full md:w-[23rem]   justify-around overflow-hidden relative will-change-height items-center mt-[2rem] border-t border-b border-white border-opacity-50 hidden sm:flex"
              animationClass="slide-in-left"
            >
              <img
                src={PaperM}
                alt="Icon Paper M"
                className="w-[3.5rem] h-[1.8rem]"
              />
              <h1 className="uppercase tracking-[0.03em] text-[1.2rem] text-[aliceblue] h-[1.5rem] font-pp-right">
                PATCH UP YOUR MARKETING
              </h1>
            </AnimatedSection>
            <AnimatedSection
              id="homedeader-image"
              className="lg:h-[23.5rem] h-[220px] w-full md:w-[23.5rem] bg-[#ffff] rounded-[0.5rem] flex items-center justify-center"
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
              className="h-[6rem] w-full md:w-[23rem] flex justify-around overflow-hidden relative will-change-height items-center mt-[2rem] border-t border-b border-white border-opacity-50 "
              animationClass="slide-in-right"
            >
              <h1 className="uppercase tracking-[0.03em] text-[1.2rem] text-[aliceblue] h-[1.5rem] font-pp-right">
                GROW YOUR BUSINESS
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
            className="h-[2.5rem] relative pb-[6rem] mx-[2.5rem] flex flex-col md:flex-row justify-between items-center"
          >
            <AnimatedSection
              id="homeHeader-bottom-iconLeft"
              className="bg-white w-[5rem] py-[0.5rem]  justify-center items-center rounded-[0.5rem] hidden sm:flex"
              animationClass="slide-in-left"
            >
              <img src={BucketPicon} alt="Bucket-P Icon" />
            </AnimatedSection>
            <AnimatedSection
              id="homeHeader-bottom-letter"
              className="text-[#fff] w-full md:w-[26rem] text-[1.2rem] text-center"
              animationClass="slide-in-bottom"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Automate your marketing with our custom built CRM systems for
              clinic owners.
            </AnimatedSection>
            <AnimatedSection
              id="homeHeader-bottom-iconRight"
              className="w-[2.7rem] py-[0.5rem]  justify-center items-center rounded-[0.5rem] bg-[#fff] hidden sm:flex"
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
