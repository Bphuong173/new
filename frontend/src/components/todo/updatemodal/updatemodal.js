import React, { useState } from "react";

import "./updatemodal.css";
import { Updateinput } from "../updateinput/updateinput.js";
export const Updatemodal = ({
  updateTasktodo,
  todo,
  loadTodo,
  setIsEditing,
}) => {
  const [showModal] = useState(true);
  return (
    <div className="updateModal">
      <div className="updateInput">
        {showModal && (
          <Updateinput
            updateTasktodo={updateTasktodo}
            todo={todo}
            loadTodo={loadTodo}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
};
