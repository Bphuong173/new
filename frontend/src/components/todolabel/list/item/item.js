import React, { useState } from "react";
import { AddNewTodoLabel } from "../../addnewtodo/addnewtodolabel";
import { Action } from "./action/action.js";

export const Item = ({
  todoLabel,
  deleteTodoLabel,
  updateTodoLabel,
  handleLabelClick,
  isSelected,
  onClick,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const updateTaskLabel = (value, todoLabelid) => {
    updateTodoLabel(value, todoLabelid);
    setIsEditing(false);
  };

  return (
    <>
      <div
        className={`items-center lg:ml-2 ml-0 rounded-md  pt-1 lg:pl-3 pl-0 pb-1 h-[38px] flex text-sm text-[14px] text-[#414141] ${
          isSelected ? "bg-[#F2F2F2]" : ""
        }`}
        onClick={() => onClick(todoLabel._id)}
      >
        <p
          style={{
            backgroundColor: todoLabel.color,
            height: "12px",
            width: "12px",
            borderRadius: 10,
            margin: "12px 7px 11px 7px",
            paddingLeft: "8px",
          }}
        ></p>
        <div
          className="flex w-full h-full items-center "
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => handleLabelClick(todoLabel._id)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <li className="block break-work pl-2">{todoLabel.task}</li>

          {isHovered && (
            <Action
              setIsEditing={setIsEditing}
              deleteTodoLabel={deleteTodoLabel}
              todoLabel={todoLabel}
            />
          )}
        </div>
      </div>
      {isEditing && (
        <AddNewTodoLabel
          updateTaskLabel={updateTaskLabel}
          todoLabel={todoLabel}
          key={todoLabel._id}
        />
      )}
    </>
  );
};
