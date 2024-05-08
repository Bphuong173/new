import React, { useState } from "react";
import "./headermodal.css";
export const HeaderModal = ({ updateTaskLabel, todoLabel }) => {
  const [value, setValue] = useState(todoLabel.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    updateTaskLabel(value, todoLabel._id);
  };
  return (
    <div className=" p-8">
      <form onSubmit={handleSubmit}>
        <h2 className="m-0 p-4 flex justify-center">Edit ToDo</h2>
        <input
          className="w-full h-8 border-solid border-2 rounded-md"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Update task Label"
        />
        <div className=" mt-5 ml-[200]">
          <button className="headerModal-CancelBtn">Cancel</button>
          <button className="headerModal-SavelBtn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
