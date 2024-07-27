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
      <div className="flex mr-[75px] w-8 absolute justify-between items-center inset-x-0.6 inset-y-0 right-3">
        {times.map((timeItem, index) => (
          <img
            src={index <= currentIndex ? PromoRed : PromoWhite}
            alt="icon"
            key={uuidv4()}
            values={timeItem}
            className="colorBtn"
            onClick={() => handleClick(timeItem, index)}
            style={{
              cursor: "pointer",
              height: "20px",
              width: "20px",
              marginRight: "2px",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </>
  );
};
