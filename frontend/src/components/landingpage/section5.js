import React from "react";
import RootIcon from "./image/icon-root.svg";
import Bullet from "./image/bullet.svg";
import Star from "./image/star.svg";
import { AnimatedSection } from "./animatedsection";
import { motion } from "framer-motion";

export default function Section5() {
  return (
    <>
      <section id="section-5" className="overflow-hidden">
        <div id="love nav-blue locked" className="w-full relative bg-[#ececec]">
          <div
            id="love-main"
            className="w-full min-h-[100vh] lg:h-[1348px] lg:max-h-[1348px]"
          >
            <div id="section-couter2" className="">
              <h1 className="font-pp-right text-[27px] absolute bottom-[5px] left-[5px]">
                03
              </h1>
              <p className=""></p>
            </div>
            <div
              id="love-content"
              className="w-full h-auto lg:h-[693px] px-4 lg:pl-[85px] pt-[100px] lg:pt-[178px]"
            >
              <div id="h1 h-anim anima- in" className="mb-8 lg:mb-[70px]">
                <motion.h1
                  id="h-line"
                  className="text-4xl lg:text-[133px] leading-tight"
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
                  className="text-4xl lg:text-[133px] leading-tight"
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
                <div
                  id="h-line2"
                  className="text-4xl lg:text-[133px] flex flex-wrap"
                >
                  <motion.h1
                    className="mr-2"
                    initial={{ y: -30 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: 0.2,
                    }}
                  >
                    YOUR
                  </motion.h1>
                  <motion.h1
                    className="w-full lg:w-[275px] h-[60px] lg:h-[113px] bg-[#fff] flex items-center justify-center rounded-[10px]"
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
                className="text-2xl lg:text-[47.6px] leading-tight pt-4 lg:pt-[40px]"
              >
                Manage tasks and upload avatar.
                <br />
                Keep tasks up to date.
              </h1>
            </div>
            <AnimatedSection
              animationClass="slide-in-right"
              id="love-blockWrap"
              className="w-[90%] lg:w-[361px] h-auto lg:h-[277px] bg-[#fff] rounded-[5px] border border-[black] mx-auto lg:mx-0 lg:absolute lg:right-[70px] lg:top-[630px] mt-8 lg:mt-0"
            >
              <div
                id="sectionBlock-top"
                className="w-full lg:w-[359px] h-[55px] border-b border-[black] flex"
              >
                <h1 className="text-[23.8px] w-full lg:w-[277.5px] flex items-center justify-center">
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
                className="w-full lg:w-[359px] h-auto lg:h-[220px] p-4 lg:pt-[17px] lg:pr-[21px] lg:pb-[22px] lg:pl-[21px] leading-[24px] relative"
              >
                <div
                  id="body"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                  className="text-[19px]"
                >
                  <div className=""> YOUR TASK MANAGEMENT MADE SIMPLE:</div>

                  <ul className="pl-[19px] mt-[17px] w-full lg:w-[317px] leading-[36px]">
                    <ul className="relative">
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[-15px] top-[13px]"
                      />
                      <li>Add new Task</li>
                    </ul>
                    <ul className="relative">
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[-15px] top-[13px]"
                      />
                      <li>Update details task</li>
                    </ul>
                    <ul className="relative">
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[-15px] top-[13px]"
                      />
                      <li>Remove completed or unnecessary tasks</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div
            id="love-banner"
            className="w-full h-auto lg:h-[294px] mt-8 lg:mt-0 lg:absolute lg:top-[1056px] overflow-hidden"
          >
            <div
              id="rollingBanner1"
              className="h-[98px] w-full bg-[#212121] border-b border-[#fff] relative flex items-center uppercase overflow-hidden"
            >
              <div
                id="rollingBanner-rail1"
                className="flex items-center text-uppercase whitespace-nowrap animate-marquee"
              >
                <h1>FOLLOW THROUGHT ON TASKS</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Execute your tasks efficiently</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep your tasks on track</h1>
                <img src={Star} alt="Star Icon" />
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
              className="h-[98px] w-full bg-[#989696] border-b border-[#fff] relative flex items-center uppercase overflow-hidden"
            >
              <div
                id="rollingBanner-rail-2"
                className="flex items-center text-uppercase whitespace-nowrap animate-marquee"
              >
                <h1>FOLLOW THROUGHT ON TASKS</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Execute your tasks efficiently</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep your tasks on track</h1>
                <img src={Star} alt="Star Icon" />
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
              className="h-[98px] w-full bg-[#212121] border-b border-[#fff] relative flex items-center uppercase overflow-hidden"
            >
              <div
                id="rollingBanner-rail1"
                className="flex items-center text-uppercase whitespace-nowrap animate-marquee"
              >
                <h1>FOLLOW THROUGHT ON TASKS</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Execute your tasks efficiently</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Keep your tasks on track</h1>
                <img src={Star} alt="Star Icon" />
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
