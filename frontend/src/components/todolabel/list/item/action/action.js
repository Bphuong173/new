import React, { useEffect, useState, useRef } from "react";
import "./action.css";
export const Action = ({ setIsEditing, deleteTodoLabel, todoLabel }) => {
  const refContainer = useRef();
  const [showActions, setShowActions] = useState(false);

  const handleClick = (event) => {
    const target = event.target;
    const currentContainer = refContainer.current;

    if (currentContainer && !currentContainer.contains(target)) {
      setShowActions(false);
    }
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
      <div className="absolute right-0 mr-5" ref={refContainer}>
        <p
          className="m-o mb-1 cursor-pointer text-[#9E9E9E] ]"
          onClick={() => setShowActions(true)}
        >
          ...
        </p>
        {showActions && (
          <div className="headerModal">
            <button className="updateBtn" onClick={() => setIsEditing(true)}>
              Chỉnh Sửa Dự Án
            </button>
            <button
              className="deleteBtn"
              onClick={() => deleteTodoLabel(todoLabel.id)}
            >
              Hoàn Thành
            </button>
          </div>
        )}
      </div>
    </>
  );
};
