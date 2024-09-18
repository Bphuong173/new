import React from "react";
import RootIcon from "./image/icon-root.svg";
import Bullet from "./image/bullet.svg";
import Star from "./image/star.svg";
import { AnimatedSection } from "./animatedsection";
import { motion } from "framer-motion";

export default function Section5() {
  return (
    <>
      <section id="section-5" className="">
        <div
          id="love nav-blue locked"
          className="w-full relative bg-[#ececec]  "
        >
          <div id="love-main" className="w-full h-[1348px] max-h-[1348px] ">
            <div id="section-couter2" className="">
              <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px]">
                03
              </h1>
              <p className=""></p>
            </div>
            <div
              id="love-content"
              className="w-full h-[693px] pl-[85px] pt-[178px]"
            >
              <div
                id="h1 h-anim anima- in"
                className=" h-[340px] lg:mb-[70px] lg:mr-0 mr-[16px] mb-[50px] leading-[133px]"
              >
                <motion.h1
                  id="h-line"
                  className="text-[45px] lg:text-[133px]"
                  initial={{ y: -30 }}
                  animate={{ y: [0, -30, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  MANAGE YOUR
                </motion.h1>
                <motion.h1
                  id="h-line1"
                  className="text-[50px] lg:text-[133px]"
                  initial={{ y: -30 }}
                  animate={{ y: [0, -30, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: 0.1,
                  }}
                >
                  TASKS MASTER
                </motion.h1>
                <div id="h-line2" className="text-[50px] lg:text-[133px] flex">
                  <motion.h1
                    initial={{ y: -30 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.2,
                    }}
                  >
                    {/* YOU */}YOUR
                  </motion.h1>
                  <motion.h1
                    className="w-[275px] h-[113px] bg-[#fff] flex items-center justify-center rounded-[10px]"
                    initial={{ y: -30 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.3,
                    }}
                  >
                    TIME
                  </motion.h1>
                </div>
              </div>

              <h1
                id="subeading"
                className="lg:text-[47.6px] text-[28.5px] lg:ml-0 ml-[-38px] leading-[52px] pt-[30px] lg:pt-[40px]"
              >
                Manage tasks and upload avatar.
                <br></br>
                Keep tasks up to date.
              </h1>
            </div>
            <AnimatedSection
              animationClass="slide-in-right"
              id="love-blockWrap"
              className="w-[361px] h-[277px] bg-[#fff] rounded-[5px] border border-[black] absolute lg:right-[70px] top-[750px] lg:ml-0 ml-[34px]  lg:top-[630px]"
            >
              <div
                id="sectionBlock-top"
                className="w-[359px] h-[55px] border-b border-[black] flex"
              >
                <h1 className="text-[23.8px] w-[277.5px] flex items-center justify-center">
                  FULLY MANAGED FOR YOU
                </h1>
                <div
                  id="sectionBlock-Icon"
                  className="w-[83.8px] h-[55px] border-l border-[black] flex items-center justify-center"
                >
                  <img src={RootIcon} alt="Root Icon" />
                </div>
              </div>
              <div
                id="sectionBlock-Bottom"
                className="w-[359px] h-[220px] pt-[17px] pr-[21px] pb-[22px] pl-[21px] leading-[24px] relative"
              >
                <div
                  id="body"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className="text-[19px]"
                >
                  <div className=""> YOUR TASK MANAGEMENT MADE SIMPLE:</div>

                  <ul className="pl-[19px] mt-[17px]  h-[104px] w-[317px] leading-[36px]">
                    <ul>
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[20px] top-[93px]"
                      />

                      <li>Add new Task</li>
                    </ul>
                    <ul>
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[20px] top-[130px]"
                      />

                      <l1> Update details task </l1>
                    </ul>
                    <ul>
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[20px] top-[167px]"
                      />

                      <l1>Remove completed or unnecessary tasks</l1>
                    </ul>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div
            id="love-banner"
            className="w-full  h-[294px] absolute top-[1056px] overflow-hidden"
          >
            <div
              id="rollingBanner1"
              className="h-[98px] w-full bg-[#212121] border-b border-[#fff] relative flex items-center uppercase "
            >
              <div
                id="rollingBanner-rail1"
                className="max-w[1440px] flex items-center text-uppercase"
              >
                <h1>FOLLOW THROUGHT ON TASKS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Execute your tasks efficiently</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Keep your tasks on track</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Monitor your ongoing tasks</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Carry out your scheduled tasks</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Finish tasks as planned</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Optimize task execution</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Achieve tasks seamlessly</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1> Control the pace of your work</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1> Enhance how you finish tasks</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Ensure tasks are completed</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep your focus on goals</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Meet your daily task goals</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep tabs on progress</h1>
                <img src={Star} alt="Star Icon" />
                <h1> Organize your task efforts</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Put your plans into action</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Put your plans into action</h1>
                <img src={Star} alt="Star Icon" />
                <h1> Complete tasks accurately and efficiently</h1>
                <img src={Star} alt="Star Icon" />
              </div>
            </div>
            <div
              id="rollingBanner-2"
              className="h-[98px] w-full bg-[#989696]   border-b border-[#fff] relative flex items-center uppercase"
            >
              <div
                id="rollingBanner-rail-2"
                className=" max-w-[1440px] flex items-center text-uppercase"
              >
                <h1>FOLLOW THROUGHT ON TASKS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Execute your tasks efficiently</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Keep your tasks on track</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Monitor your ongoing tasks</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Carry out your scheduled tasks</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Finish tasks as planned</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Optimize task execution</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Achieve tasks seamlessly</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1> Control the pace of your work</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1> Enhance how you finish tasks</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Ensure tasks are completed</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep your focus on goals</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Meet your daily task goals</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep tabs on progress</h1>
                <img src={Star} alt="Star Icon" />
                <h1> Organize your task efforts</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Put your plans into action</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Put your plans into action</h1>
                <img src={Star} alt="Star Icon" />
                <h1> Complete tasks accurately and efficiently</h1>
                <img src={Star} alt="Star Icon" />
              </div>
            </div>
            <div
              id="rollingBanner-3"
              className="h-[98px] w-full bg-[#212121] border-b border-[#fff] relative flex items-center uppercase"
            >
              <div
                id="rollingBanner-rail1"
                className=" max-2-[1440px] flex items-center text-uppercase"
              >
                <h1>FOLLOW THROUGHT ON TASKS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Execute your tasks efficiently</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Keep your tasks on track</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Monitor your ongoing tasks</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Carry out your scheduled tasks</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Finish tasks as planned</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Optimize task execution</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Achieve tasks seamlessly</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1> Control the pace of your work</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1> Enhance how you finish tasks</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Ensure tasks are completed</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep your focus on goals</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Meet your daily task goals</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep tabs on progress</h1>
                <img src={Star} alt="Star Icon" />
                <h1> Organize your task efforts</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Put your plans into action</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Put your plans into action</h1>
                <img src={Star} alt="Star Icon" />
                <h1> Complete tasks accurately and efficiently</h1>
                <img src={Star} alt="Star Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
