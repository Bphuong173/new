import React, { useState, useEffect } from "react";
import "./timercountdown.css";

export const Timercountdown = ({
  onCountdownEnd,
  setCountdownActive,
  countdownActive,
  onClose,
}) => {
  const initialTime = 0.2 * 60;
  const [time, setTime] = useState(initialTime);
  const [percentage, setPercentage] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const [pausedTime, setPausedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        const calculatedPercentage = (time / initialTime) * 100;
        setPercentage(calculatedPercentage);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, initialTime, isActive]);

  const startCountdown = () => {
    setCountdownActive(true);
    setTime(initialTime - pausedTime);

    setTimeout(() => {
      setPercentage(0);
    }, 1000);

    setTimeout(() => {
      setPercentage(100);
    }, (initialTime - pausedTime) * 1000);
    setIsActive(true);
  };

  const pauseCountdown = () => {
    setCountdownActive(false);
    setIsActive(false);
    setPausedTime(initialTime - time);
  };

  const resetCountdown = () => {
    setTime(initialTime);
    setPercentage(100);
    setPausedTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const conicGradientStyle = {
    background: `conic-gradient(white ${percentage}%, red 0%)`,
  };
  useEffect(() => {
    if (time === 0) {
      console.log("Countdown ended");
      onCountdownEnd();
      setCountdownActive(false);
      onClose();
    }
  }, [time]);
  return (
    <div id="timer-container">
      <div id="circle" style={conicGradientStyle}>
        <div id="circle-input"></div>
        <div id="timer">{formatTime(time)}</div>
      </div>

      <div className="button-container">
        <button
          className=" start-button "
          onClick={isActive ? pauseCountdown : startCountdown}
        >
          {isActive ? "Pause" : "Play"}
        </button>
        <button className="reset-button" onClick={resetCountdown}>
          Reset
        </button>
      </div>
    </div>
  );
};
