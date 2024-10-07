import React from "react";
import Step1 from "./image/icon-step-1.svg";
import Step2 from "./image/icon-step-2.svg";
import Step3 from "./image/icon-step-3.svg";
import backgroundImage from "./image/background-grid.svg";
import "./section4.css";

export default function Section4() {
  return (
    <>
      <div
        className="w-full h-full bg-[#ffff] top-0 left-0 right-0 bottom-0 bg-[position:6.35rem_0rem] relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div id="section-4" className="pb-[50px]">
          <section
            id="steps init locked move first-slide"
            className="w-full h-full"
          >
            <div id="steps-sticky" className="w-full h-full relative">
              <div id="block-custom-1" className="flex flex-col lg:flex-row">
                <div
                  id="block block-white nav-black"
                  className="max-w-[695px] 2xl:min-w-[970px] max-h-[full] lg:h-[470px] border mt-[14px] ml-[14px] border-[black] bg-[#fff] rounded-[5px] mb-8 mr-[14px] lg:mr-0 lg:mb-0"
                >
                  <div
                    id="top step-top"
                    className="border-b border-[black] flex items-center justify-between"
                  >
                    <h1 className="font-pp-right pl-[10px] pr-[10px] pt-[9px] pb-[9px] text-[23.8px] border-r border-[black] flex items-center justify-center">
                      PROCESS - STEPS
                    </h1>
                    <div
                      id="steps-icon"
                      className="w-[83px] h-[54px] border-l border-[black] flex items-center justify-center"
                    >
                      <img
                        src={Step1}
                        alt="Step Icon 1"
                        className="flex items-center justify-center"
                      />
                    </div>
                  </div>
                  <div
                    id="mid"
                    className="border-b border-[black] flex items-center"
                  >
                    <div className="border-r border-[black] text-[170px] flex items-center justify-center">
                      <h1 className="flex items-center justify-center h-[300px] lg:max-h-[185px] pl-[14px] pr-[14px]">
                        01
                      </h1>
                    </div>
                    <h1 className="create-account-heading  text-[35px] lg:text-[66.66px] pt-[34px]  pb-[34px] pl-[31px]">
                      CREATE ACCOUNT
                    </h1>
                  </div>
                  <div
                    id="bottom"
                    className="lg:pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
                  >
                    <h1
                      id="subheading"
                      className="lg:mb-[19px] text-[19px] lg:pt-0 pt-[5px] lg:text-[28.5px] "
                    >
                      STARTED EASILY CUSTOM MARKETING PLAN
                    </h1>
                    <div id="body body-large" className="">
                      <p
                        style={{ fontFamily: "Archivo, sans-serif" }}
                        className="lg:text-[23.8px] text-[16px]"
                      >
                        Sign up with your email, complete your profile,
                        customize your experience. Once set up, add tasks and
                        stay organized with the app!
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="block block-white nav-black-1"
                  className="lg:mt-[400px] 2xl:min-w-[900px] mt-[10px] ml-[14px] max-w-[695px] max-h-[480px] border border-[black] bg-[#fff] rounded-[5px] right-[14px] lg:mr-0 mr-[14px]  lg:mb-0 mb-[140px]"
                >
                  <div
                    id="top step-top-1"
                    className="border-b border-[black] flex items-center justify-between"
                  >
                    <h1 className="font-pp-right text-[23.8px] pl-[21px] pr-[20px] pt-[9px] pb-[9px] border-r border-[black] flex items-center justify-center">
                      PROCESS - STEPS
                    </h1>
                    <div
                      id="steps-icon-1"
                      className="w-[83px] h-[54px] border-l border-[black] flex items-center justify-center"
                    >
                      <img
                        src={Step2}
                        alt="Step Icon 2"
                        className="flex items-center justify-center"
                      />
                    </div>
                  </div>
                  <div
                    id="mid-1"
                    className="border-b border-[black] flex items-center"
                  >
                    <div className="border-r border-[black] text-[170px] flex items-center justify-center">
                      <h1 className="flex items-center justify-center h-auto lg:max-h-[185px] pl-[14px] pr-[14px]">
                        02
                      </h1>
                    </div>
                    <h1 className="create-account-heading  lg:text-[66.66px] text-[35px] pt-[34px] pr-[31px] pb-[34px] pl-[31px] leading-[57px]">
                      ADD YOUR TASKS
                    </h1>
                  </div>
                  <div
                    id="bottom-1"
                    className="lg:pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
                  >
                    <h1
                      id="subheading-1"
                      className="lg:mb-[19px] mb-[5px] lg:text-[28.5px] text-[19px] lg:pt-0 pt-[5px]"
                    >
                      ORGANIZING YOUR WORKFLOW
                    </h1>
                    <div id="body body-large-1" className="w">
                      <p
                        style={{ fontFamily: "Archivo, sans-serif" }}
                        className="lg:text-[23.8px] text-[16px]"
                      >
                        Easily add tasks by clicking "Add Project." Define each
                        project with a clear title and create smaller tasks with
                        specific names and durations to manage details
                        effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="block-custom-2"
                className="flex justify-center lg:justify-start"
              >
                <div
                  id="block block-white nav-black-2"
                  className="max-w-[695px] 2xl:min-w-[970px] max-h-[480px] mt-[-100px] border border-[black] bg-[#fff] rounded-[5px] ml-[14px] lg:mr-0 mr-[14px]"
                >
                  <div
                    id="top step-top-2"
                    className="border-b border-[black] flex items-center justify-between"
                  >
                    <h1 className="pt-[9px] pb-[9px] pl-[23px] pr-[23.5px] font-pp-right text-[23.8px] border-r border-[black] flex items-center justify-center">
                      PROCESS - STEPS
                    </h1>
                    <div
                      id="steps-icon-2"
                      className="w-[83px] h-[54px] border-l border-[black] flex items-center justify-center"
                    >
                      <img
                        src={Step3}
                        alt="Step Icon 3"
                        className="flex items-center justify-center"
                      />
                    </div>
                  </div>
                  <div
                    id="mid-2"
                    className="border-b border-[black] flex items-center"
                  >
                    <div className="border-r border-[black] text-[170px] flex items-center justify-center">
                      <h1 className="lg:max-h-[185px] h-auto pl-[14px] pr-[14px] flex items-center justify-center">
                        03
                      </h1>
                    </div>
                    <h1 className=" create-account-heading  lg:text-[66.66px] text-[35px] pt-[34px] pr-[31px] pb-[34px] pl-[31px] leading-[57px]">
                      TRACK YOUR TASKS
                    </h1>
                  </div>
                  <div
                    id="bottom-2"
                    className="lg:pt-[30px] pr-[25px] pb-[30px] pl-[25px]"
                  >
                    <h1
                      id="subheading-2"
                      className="lg:mb-[19px] mb-[5px lg:mt-0 mt-[5px] lg:text-[28.5px] text-[19px]"
                    >
                      STAY ON TOP OF YOUR PROGRESS
                    </h1>
                    <div id="body body-large-2" className="">
                      <p
                        style={{ fontFamily: "Archivo, sans-serif" }}
                        className="lg:text-[23.8px] text-[16px]"
                      >
                        Easily monitor task completion using the dashboard to
                        view, check off completed tasks, and see pending ones.
                        Regular reviews help identify improvement areas and
                        maintain motivation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
