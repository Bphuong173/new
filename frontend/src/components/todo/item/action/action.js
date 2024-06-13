import React, { useState } from "react";
import TaskCircle from "../image/task_circle.png";
import TickDone from "../image/task-done.png";
export const Action = ({ deleteTodo, todo }) => {
  const [showTick, setShowTick] = useState(false);

  const handleTaskCircleClick = () => {
    setShowTick(true);
    setTimeout(() => {
      deleteTodo(todo._id);
    }, 100);
  };

  return (
    <>
      <div>
        <p
          className=" cursor-pointer m-0  w-[20px] h-[20px] ml-3"
          onClick={() => handleTaskCircleClick()}
          title="Deleted"
        >
          <img src={showTick ? TickDone : TaskCircle} alt="icon" />
        </p>
      </div>
    </>
  );
};
