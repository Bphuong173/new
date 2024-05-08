import { Query } from "@tanstack/react-query";
import React, { useState } from "react";

export const Updateinput = ({ updateTasktodo, todo, loadTodo }) => {
  const [value, setValue] = useState(todo.task);
  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    updateTasktodo(value, todo._id);
  };
  return (
    <div className="py-8 px-8">
      <form onSubmit={handleSubmit}>
        <h2 className="flex justify-center p-4 m-0">Update ToDo</h2>
        <input
          className="w-full h-8 border-2 border-solid rounded-md"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Update task"
        />
        <div className=" mt-5 ml-52">
          <button className=" border-solid border-2 text-[#414141] bg-[#ffffff] text-sm h-6 w-14 rounded-md mr-4">
            Cancel
          </button>
          <button
            className="bg-[#f93b42] text-[#ffffff] border-none rounded-md h-6 w-14 text-sm"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
