import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
      <div className="flex absolute justify-between items-center inset-x-0.6 inset-y-0 right-3">
        {times.map((timeItem, index) => (
          <svg
            key={uuidv4()}
            values={timeItem}
            className="colorBtn"
            onClick={() => handleClick(timeItem, index)}
            style={{
              cursor: "pointer",
              backgroundColor: index <= currentIndex ? "#FF1B2A" : "white",
              height: "20px",
              width: "20px",
              marginRight: "2px",
              borderRadius: "10px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#dcd8d9"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(4,4)">
                <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,14.359 11.641,26 26,26c14.359,0 26,-11.641 26,-26c0,-14.359 -11.641,-26 -26,-26zM32,10c12.15,0 22,9.85 22,22c0,12.15 -9.85,22 -22,22c-12.15,0 -22,-9.85 -22,-22c0,-12.15 9.85,-22 22,-22zM30.5,14l0.5,4h2l0.5,-4zM44.02148,18.56445l-10.77148,9.63867c-0.40324,-0.13366 -0.82519,-0.20222 -1.25,-0.20312c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c0.24246,-0.00084 0.48434,-0.02372 0.72266,-0.06836l8.09375,6.70703l1.82422,-1.82227l-6.70898,-8.0957c0.12053,-0.65784 0.0742,-1.3354 -0.13477,-1.9707l9.63867,-10.77148zM14,30.5v3l4,-0.5v-2zM50,30.5l-4,0.5v2l4,0.5zM31,46l-0.5,4h3l-0.5,-4z"></path>
              </g>
            </g>
          </svg>
        ))}
      </div>
    </>
  );
};
