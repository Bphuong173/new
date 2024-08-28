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
                  {/* GET BACK */} MANAGE YOUR TASKS
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
                  {/* TO WHAT */} EASILY ADD, EDIT
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
                    {/* YOU */} AND
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
                    {/* LOVE */} DELETE
                  </motion.h1>
                </div>
              </div>

              <h1
                id="subeading"
                className="lg:text-[47.6px] text-[30px] leading-[52px] lg:pt-[40px]"
              >
                {/* SPEND TIME WITH YOUR PATIENTS. */}
                Stay organized by managing your tasks effortlessly. You can
                easily add new tasks, edit existing ones, or delete tasks that
                are no longer needed. 
                <br></br>
                {/* NOT WITH YOUR EMAIL. */}
                This flexibility ensures your task list is
                always up to date, allowing you to focus on what truly matters.
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
                  {/* 100% DONE FOR YOU. */} FULLY MANAGED FOR YOU
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
                  <div className="">
                    {" "}
                    {/* Our team of experts will create custom content made just for
                    you: */} YOUR TASK MANAGEMENT MADE SIMPLE:
                  </div>

                  <ul className="pl-[19px] mt-[17px]  h-[104px] w-[317px] leading-[36px]">
                    <ul>
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[20px] top-[93px]"
                      />
                      {/* <l1>Quarterly Marketing Campaigns</l1> */}
                      <li>Add new Task: enter new tasks</li>
                    </ul>
                    <ul>
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[20px] top-[130px]"
                      />
                      {/* <l1>Email Nurture Sequences</l1> */}
                      <l1>Edit Tasks: Update details task </l1>
                    </ul>
                    <ul>
                      <img
                        src={Bullet}
                        alt="Bullet Icon"
                        className="w-[9.5px] h-[9.5px] absolute left-[20px] top-[167px]"
                      />
                      {/* <l1>Funnel Builds for Local Events</l1> */}
                      <l1>Delete Task: Remove completed or unnecessary tasks</l1>
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
                <h1>GET OFF THE COMPUTER * AND INTO A SAUNA</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>PRACTICE YOGA * NOT YOUR ELEVATOR PITCH</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>GO SKIING * NOT SKIMMING EMAILS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>RETURN TO HIKING * NOT HUSTLING</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>DIVE INTO THE POOL * NOT SPREADSHEETS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>HIT THE GYM * NOT THE GRIND</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>EXPLORE NATURE * NOT SALES FUNNELS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Swim in the ocean * not in objectives</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Go paddleboarding * not profit-chasing</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>GET OFF THE COMPUTER * AND INTO A SAUNA</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Practice yoga * Not Your Elevator Pitch</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Go Skiing * Not Skimming Emails</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Return to hiking * Not Hustling</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Dive into the pool * Not Spreadsheets</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Hit the gym * Not the Grind</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Explore Nature * Not Sales Funnels</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Swim in the ocean * not in objectives</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Go paddleboarding * not profit-chasing</h1>
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
                <h1>GET OFF THE COMPUTER * AND INTO A SAUNA</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>PRACTICE YOGA * NOT YOUR ELEVATOR PITCH</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>GO SKIING * NOT SKIMMING EMAILS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>RETURN TO HIKING * NOT HUSTLING</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>DIVE INTO THE POOL * NOT SPREADSHEETS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>HIT THE GYM * NOT THE GRIND</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>EXPLORE NATURE * NOT SALES FUNNELS</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Swim in the ocean * not in objectives</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>Go paddleboarding * not profit-chasing</h1>
                <img src={Star} alt="Star Icon"></img>
                <h1>GET OFF THE COMPUTER * AND INTO A SAUNA</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Practice yoga * Not Your Elevator Pitch</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Go Skiing * Not Skimming Emails</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Return to hiking * Not Hustling</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Dive into the pool * Not Spreadsheets</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Hit the gym * Not the Grind</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Explore Nature * Not Sales Funnels</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Swim in the ocean * not in objectives</h1>
                <img src={Star} alt="Star Icon" />
                <h1>Go paddleboarding * not profit-chasing</h1>
                <img src={Star} alt="Star Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
