import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PromoWhite from "./image/detail-pomo-blank.png";
import PromoRed from "./image/redPromo.png";
export const ClockIcon = ({ setTimeDuration, handleClockCompletedChange }) => {
  const time = 125;
  let times = [];
  for (let i = 0; i < time / 25; i++) {
    times.push(25);
  }

  const [currentIndex, setCurrentIndex] = useState(undefined);
  const handleClick = (timeItem, index) => {
    setCurrentIndex((prevIndex) => (prevIndex === index ? undefined : index));
    const totalSelectedTime = times
      .slice(0, index + 1)
      .reduce((acc, time) => acc + time, 0);

    setTimeDuration(totalSelectedTime);
    const newClockCompleted = times.slice(0, index + 1);

    handleClockCompletedChange(newClockCompleted);
  };
  return (
    <>
      <div className="flex mr-[75px] w-8 absolute justify-between items-center inset-x-0.6 lg:inset-y-0 top-[-16px] lg:right-3 right-[-65px]">
        {times.map((timeItem, index) => (
          <img
            src={index <= currentIndex ? PromoRed : PromoWhite}
            alt="icon"
            key={uuidv4()}
            values={timeItem}
            className="colorBtn cursor-pointer lg:h-[20px] h-[15px] lg:w-[20px] w-[15px] mr-[2px] rounded-[10px]"
            onClick={() => handleClick(timeItem, index)}
          />
        ))}
      </div>
    </>
  );
};
