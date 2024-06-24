import React from "react";
import backgroundImage from "./image/background-grid.svg";
import { useNavigate } from "react-router-dom";
import PaperM from "./image/icon-paper-m.svg";
import PatchHero from "./image/Patch_hero.gif";
import VenIcon from "./image/icon-venn.svg";
import BucketPicon from "./image/icon-bucket-p.svg";
import ArrowThin from "./image/arrow-thin-blue.svg";
import { Patch } from "./patch";
import "./home.css";

export const Section1 = () => {
  const navigate = useNavigate();
  const handleSignInClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <div
        id="section1"
        className=" w-full h-full bg-[#989696] top-0 left-0 right-0 bottom-0 bg-[position:6.35rem_0rem] p-[14px] relative "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className=" bg-black  w-auto  bg-[position:-6.4rem_5rem] rounded-[5px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="  flex items-center justify-between w-auto h-auto pt-[10px]">
            <p
              className="ml-[45px] w-auto h-auto text-[#fff]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              <Patch />
            </p>
            <button
              onClick={handleSignInClick}
              className=" bg-blue-500 text-white rounded mr-[40px] text-[20px] pl-[5px] pr-[5px] w-auto"
            >
              Sign In
            </button>
          </div>
          <h1 className="font-pp-right flex items-center justify-center flex-col leading-[129.5px] text-center">
            <span className=" text-[153px]  text-[aliceblue]">
              THE EASIEST WAY TO
            </span>
            <span className="text-[153px]  text-[aliceblue]">
              GET MORE PATIENTS
            </span>
          </h1>
          <div
            id="homeheader-mid"
            className="mt-[21px] flex justify-around ml-[113px] mr-[113px] mb-[38px] "
          >
            <div
              id="homeheader-midline"
              className="h-[94px] w-[369.5px] flex justify-around overflow-hidden relative will-change-height  items-center mt-[32px] border-t border-b border-white border-opacity-50"
            >
              <img
                src={PaperM}
                alt="Icon Paper M"
                className="w-[58.76px] h-[33.33px]"
              />
              <h1 className="uppercase tracking-[0.03em] text-[19px] text-[aliceblue] h-[21px] font-pp-right">
                PATCH UP YOUR MARKETING
              </h1>
            </div>
            <div
              id="homedeader-image"
              className="h-[375px] w-[375px] bg-[#ffff] rounded-[5px] flex items-center justify-center "
            >
              <img src={PatchHero} alt="Patch Hero Icon" className="p-[25px]" />
            </div>
            <div
              id="homeheader-midline1"
              className="h-[94px] w-[369.5px] flex justify-around overflow-hidden relative will-change-height  items-center mt-[32px] border-t border-b border-white border-opacity-50"
            >
              <h1 className="uppercase tracking-[0.03em] text-[19px] text-[aliceblue] h-[21px] font-pp-right">
                GROW YOUR BUSINESS
              </h1>
              <img
                src={VenIcon}
                alt="Ven Icon"
                className="w-[58.76px] h-[33.33px]"
              />
            </div>
          </div>
          <div
            id="homeHeader-bottom"
            className="h-[43px] relative pb-[100px] ml-[44px] mr-[44px] flex justify-between items-center "
          >
            <div
              id="homeHeader-bottom-iconLeft"
              className="bg-white w-[78px] pt-[6px] pb-[6px]  flex justify-center items-center rounded-[5px]"
            >
              <img src={BucketPicon} alt="Bucket-P Icon" />
            </div>
            <div
              id="homeHeader-bottom-letter"
              style={{ fontFamily: "Archivo, sans-serif" }}
              className="text-[#fff] w-[428.5px]  text-[19px] text-center"
            >
              Automate your marketing with our custom built CRM systems for
              clinic owners.
            </div>
            <div
              id="homeHeader-bottom-iconRight"
              className="w-[43px] pt-[7px] pb-[7px]  flex justify-center items-center rounded-[5px] bg-[#fff]  "
            >
              <img src={ArrowThin} alt="Arrow Thin" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
