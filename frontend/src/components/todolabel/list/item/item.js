import React, { useState } from "react";
import { AddNewTodoLabel } from "../../addnewtodo/addnewtodolabel";
import { Action } from "./action/action.js";

export const Item = ({ todoLabel, deleteTodoLabel, updateTodoLabel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const updateTaskLabel = (value, todoLabelid) => {
    updateTodoLabel(value, todoLabelid);
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex items-center pt-1 pl-1 pb-1">
        <p
          style={{
            backgroundColor: todoLabel.color,
            height: 10,
            width: 10,
            borderRadius: 10,
            margin: 0,
            marginRight: "16px",
            marginLeft: "16px",
          }}
        ></p>
        <div
          className="flex w-full h-full relative bg-white rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <li className="block break-all">{todoLabel.task}</li>
          <div className="">
            {isHovered && (
              <Action
                setIsEditing={setIsEditing}
                deleteTodoLabel={deleteTodoLabel}
                todoLabel={todoLabel}
              />
            )}
          </div>
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
