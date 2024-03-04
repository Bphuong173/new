import React from "react";
import { Checkicon } from "./headericon/checkicon";
export const ListMenu = ({
  todoLabels,
  labelSelected,
  setLabelSelected,
  handleClickInside,
}) => {
  return (
    <>
      {todoLabels.map((todoLabel) => (
        <div
          key={todoLabel._id}
          onClick={() => setLabelSelected(todoLabel)}
          className="OutSide-menuBtn"
        >
          <p
            value={todoLabel._id}
            style={{
              height: 10,
              width: 12,
              borderRadius: 10,
              margin: 0,
              marginLeft: 5,
              backgroundColor: todoLabel.color,
              position: "absolute",
            }}
          ></p>
          <div
            onClick={handleClickInside}
            className="labelId"
            key={todoLabel._id}
            value={todoLabel._id}
          >
            {todoLabel.task}
          </div>
          {todoLabel === labelSelected && <Checkicon />}
        </div>
      ))}
    </>
  );
};
