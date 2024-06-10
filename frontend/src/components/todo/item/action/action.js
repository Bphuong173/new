import React, { useEffect, useState, useRef } from "react";
import TaskCircle from "../image/task_circle.png";
import TickDone from "../image/task-done.png";
export const Action = ({ setIsEditing, deleteTodo, todo }) => {
  const refContainer = useRef();
  const [showActions, setShowActions] = useState(false);
  const [showTick, setShowTick] = useState(false);

  const handleClick = (event) => {
    const target = event.target;
    const currentContainer = refContainer.current;

    if (currentContainer && !currentContainer.contains(target)) {
      setShowActions(false);
      setShowTick(false);
    }
  };
  const handleTaskCircleClick = () => {
    setShowActions(true);
    setShowTick(!showTick); // Toggle the tick
  };
  useEffect(() => {
    if (showActions) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [showActions]);

  return (
    <>
      <div className="" ref={refContainer}>
        <p
          className=" cursor-pointer m-0  w-[20px] h-[20px] ml-3"
          onClick={() => handleTaskCircleClick()}
        >
          <img src={showTick ? TickDone : TaskCircle} alt="icon" />
        </p>
        {showActions && (
          <div className="fixed bg-white rounded-xl shadow-md shadow-[#ccc] h-16 w-36 translate-x-[10%] translate-y-[10%]">
            <button
              className="w-full border-none bg-white cursor-pointer  hover:bg-[#ccc] mt-2"
              onClick={() => setIsEditing(true)}
            >
              Update
            </button>
            <button
              className="w-full border-none bg-white cursor-pointer  hover:bg-[#ccc]"
              onClick={() => deleteTodo(todo._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
};
