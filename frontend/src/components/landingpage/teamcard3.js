import React from "react";

import DownRightIcon from "./image/arrow-down-right.svg";
import StarBlueIcon from "./image/star-blue-circle.svg";
import Ally from "./image/team-Phuong.jpg";
export const Teamcard3 = () => {
  return (
    <div
      id="teamCard block-3"
      class="w-[448px] h-[633px] relative overflow-hidden cursor-pointer lg:ml-[7px] ml-0 p-[25.7px] bg-white rounded-[5px] border border-[black] lg:mt-[340px] mt-[40px]"
    >
      <div
        id="teamCard-side  "
        className="w-[43px] h-[43px] absolute bottom-[14px]"
      >
        <img src={DownRightIcon} alt=" Down Right Icon" />
      </div>
      <div id="teamCard-image">
        <picture>
          <img src={Ally} alt="Kelly" />
        </picture>
      </div>
      <div id="teamCard-frontContent" className="pt-[22px]">
        <h1
          id="subheading"
          className=" mb-[11.4px] text-[30.4px] block tracking-[0.9px] leading-[28.6px] uppercase"
        >
          Bao Phuong
        </h1>
        <p
          className=" text-[19px] leading-[28.5px]"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          {/* With experience in project management. Mr. Phuong is
          passionate about helping others achieve their goals through effective
          task management. */}
          Founder & Product Developer
        </p>
      </div>
      <div id="teamCard-backContent"></div>
      <div id="teamCard-side " className=" absolute top-[30px] right-[30px]">
        <img src={StarBlueIcon} alt="Star Blue Icon" />
      </div>
    </div>
  );
};
