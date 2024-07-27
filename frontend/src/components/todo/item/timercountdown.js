import React, { useState, useEffect } from "react";
import "./timercountdown.css";
import TimerBackGround from "./image/timer-bg.jpeg";
import TimerStart from "./image/timer-start.png";
import TimerPause from "./image/timer-pause.png";
import { Extendmodal } from "./extendmodal";
export const Timercountdown = ({
  onCountdownEnd,
  setCountdownActive,
  countdownActive,
  onClose,
  isEditing,
  setIsEditing,
  deleteTodo,
  todo,
  clockCompleted,
}) => {
  const initialTime = 2500;
  const [time, setTime] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive && time < initialTime) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        const calculatedPercentage = ((time + 1) / initialTime) * 100;
        setPercentage(calculatedPercentage);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, initialTime, isActive]);

  const startCountdown = () => {
    setCountdownActive(true);
    setIsActive(true);
  };

  const pauseCountdown = () => {
    setCountdownActive(false);
    setIsActive(false);
  };

  const resetCountdown = () => {
    setTime(0);
    setPercentage(0);
    setIsActive(false);
    setCountdownActive(false);
  };

  const formatTime = (seconds) => {
    if (seconds < 60) {
      return String(seconds);
    } else {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes)}:${String(remainingSeconds).padStart(2, "0")}`;
    }
  };

  useEffect(() => {
    if (time === initialTime) {
      console.log("Countdown ended");
      onCountdownEnd();
      setCountdownActive(false);
      onClose();
    }
  }, [time, initialTime, onCountdownEnd, onClose, setCountdownActive]);
  const conicGradientStyle = {
    background: `conic-gradient(red ${percentage}%, rgba(255,255,255,0.2) 0%)`,
  };
  return (
    <div
      className="bg-center flex w-[129px] ml-[-60px] h-[58px]  left-1/2 bottom-[16px] rounded-[8px] shadow-[0_0_8px_0_rgba(131,131,131,0.5)] absolute z-[800] bg-cover transition-all duration-200 overflow-y-auto justify-around items-center "
      style={{ backgroundImage: `url(${TimerBackGround})` }}
    >
      <Extendmodal
        setCountdownActive={setCountdownActive}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        todo={todo}
        deleteTodo={deleteTodo}
        clockCompleted={clockCompleted}
        countdownActive={countdownActive}
      />
      <div
        className="bg-center bg-cover"
        id="circle"
        style={conicGradientStyle}
      >
        <div
          id="circle-input"
          style={{ backgroundImage: `url(${TimerBackGround})` }}
          className="bg-center"
        ></div>
        <div className="font-bold" id="timer">
          {formatTime(time)}
        </div>
      </div>
      <div>
        <button onClick={isActive ? pauseCountdown : startCountdown}>
          {isActive ? (
            <img
              className="h-[26px] w-[26px] mt-1 bg-[26px]"
              src={TimerPause}
              alt="Timer Pause"
            />
          ) : (
            <img
              className="h-[26px] w-[26px] mt-1 bg-[26px] mr-[5px]"
              src={TimerStart}
              alt="Timer Start"
            />
          )}
        </button>
        {/* <button onClick={resetCountdown}>Reset</button> */}
      </div>
    </div>
  );
};
