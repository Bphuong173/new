import React from "react";
import TaskStart from "./image/task-start.png";
export const Playicon = ({
  getCompletedList,
  setShowCountdown,
  countdownActive,
}) => {
  const handlePlayClick = () => {
    if (!countdownActive) {
      const completedList = getCompletedList();
      console.log("Completed List from Playicon:", completedList);
      setShowCountdown(true);
    }
  };
  return (
    <div onClick={handlePlayClick}>
      <img
        src={TaskStart}
        alt="icon"
        style={{
          height: "20px",
          width: "20px",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
