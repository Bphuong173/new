import React from "react";
import TimerBackGround from "./image/timer-bg.jpeg";
import TimerZoomdown from "./image/timer-zoomdown.png";
import { Fullscreencountdown } from "./fullscreencountdown";
export const Fullscreen = ({
  setFullScreen,
  isEditing,
  setIsEditing,
  todo,
  deleteTodo,
  clockCompleted,
  setCountdownActive,
  countdownActive,
}) => {
  const handleZoomdown = (e) => {
    e.preventDefault();
    setFullScreen(false);
  };
  return (
    <>
      <div className="fixed top-4 left-4 w-6 h-6 z-[1001] ">
        <img
          onClick={handleZoomdown}
          src={TimerZoomdown}
          alt="Timer Zoomdown"
        />
      </div>
      <div
        class="fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-white bg-center transition-all duration-250 ease-in-out delay-150 "
        style={{ backgroundImage: `url(${TimerBackGround})` }}
      >
        <Fullscreencountdown
          setCountdownActive={setCountdownActive}
          countdownActive={countdownActive}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          todo={todo}
          deleteTodo={deleteTodo}
          clockCompleted={clockCompleted}
        />
      </div>
    </>
  );
};
