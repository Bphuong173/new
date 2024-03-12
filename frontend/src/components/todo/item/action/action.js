import React, { useEffect, useState, useRef } from "react";
import "../../../todolabel/list/item/action/action.css";
export const Action = ({ setIsEditing, deleteTodo, todo }) => {
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
      <div className="div-action" ref={refContainer}>
        <p
          className="mt-0 cursor-pointer m-0 pr-4"
          onClick={() => setShowActions(true)}
        >
          ...
        </p>
        {showActions && (
          <div className="headerModal">
            <button className="updateBtn" onClick={() => setIsEditing(true)}>
              Update
            </button>
            <button className="deleteBtn" onClick={() => deleteTodo(todo._id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
};
