import React, { useState } from "react";
import "./updateinput.css";
export const Updateinput = ({ updateTasktodo, todo, loadTodo }) => {
  const [value, setValue] = useState(todo.task);
  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    updateTasktodo(value, todo._id);
    loadTodo();
  };
  return (
    <div className="updateModal-header">
      <form onSubmit={handleSubmit}>
        <h2 className="updateModal-update">Update ToDo</h2>
        <input
          className="updateModal-body"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Update task"
        />
        <div className="updateModal-footer">
          <button className="headerModal-CancelBtn">Cancel</button>
          <button className="headerModal-SavelBtn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
