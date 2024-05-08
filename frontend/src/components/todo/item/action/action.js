import React, { useEffect, useState, useRef } from "react";
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
      <div className="" ref={refContainer}>
        <p
          className="mt-0 cursor-pointer m-0 pr-4 pl-3 pb-2"
          onClick={() => setShowActions(true)}
        >
          ...
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
