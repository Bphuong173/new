import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Updatemodal } from "../updatemodal/updatemodal";
import { Playicon } from "../input/headericon/playicon";
import { Timercountdown } from "./timercountdown";
import { Action } from "./action/action";
import PromoRed from "../input/headericon/image/redPromo.png";
import { Todomodal } from "../todo/todomodal";
export const Item = ({
  todo,
  deleteTodo,
  updateTodo,
  handleCountdownEnd,
  countdownActive,
  setCountdownActive,
  loadTodo,
}) => {
  const [showTodomodal, setShowTodomodal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);

  const clockCompleted = todo.clockCompleted;
  const updateTasktodo = (
    value,
    todoid,
    newClockCompleted,
    newLabelId,
    notes
  ) => {
    console.log("Updating task with data:", {
      task: value,
      _id: todoid,
      clockCompleted: newClockCompleted,
      labelId: newLabelId,
      notes: notes, // Ensure this is included
    });
    updateTodo(value, todoid, newClockCompleted, newLabelId, notes);
    setIsEditing(false);
  };
  const getCompletedList = () => {
    // Hàm này trả về danh sách completed của công việc
    return todo.clockCompleted;
  };
  const handleToggleCountdown = () => {
    setShowCountdown(!showCountdown);
  };
  const handleClick = () => {
    setShowTodomodal(!showTodomodal);
  };
  return (
    <>
      <div className="flex items-center rounded-xl  bg-white mr-3 mt-5 ml-4 break-all  ">
        {isEditing ? (
          <Updatemodal
            updateTasktodo={updateTasktodo}
            todo={todo}
            key={todo._id}
            loadTodo={loadTodo}
            setIsEditing={setIsEditing}
          />
        ) : (
          <>
            <Action
              deleteTodo={deleteTodo}
              todo={todo}
              setIsEditing={setIsEditing}
            />
          </>
        )}
        <div className="pl-[2px]">
          <Playicon
            getCompletedList={getCompletedList}
            setShowCountdown={setShowCountdown}
            countdownActive={countdownActive}
          />
        </div>
        <div className="pl-[4px]">
          <div className="pl-[4px]">{todo.task}</div>
          <div className="flex ">
            {clockCompleted.map((index) => (
              <img
                src={PromoRed}
                alt="icon"
                key={uuidv4()}
                style={{
                  height: "18px",
                  width: "18px",
                  margin: "2px",
                  borderRadius: "10px",
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-[82%] h-12" onClick={() => handleClick()}></div>
      </div>
      {showTodomodal && (
        <div>
          <Todomodal
            setCountdownActive={setCountdownActive}
            countdownActive={countdownActive}
            todo={todo}
            updateTasktodo={updateTasktodo}
            deleteTodo={deleteTodo}
            handleCountdownEnd={handleCountdownEnd}
            loadTodo={loadTodo}
            setShowTodomodal={setShowTodomodal}
            showTodomodal={showTodomodal}
          />
        </div>
      )}

      {showCountdown && (
        <Timercountdown
          todoId={todo._id}
          countdownTime={todo.countdownTime}
          clockCompleted={todo.clockCompleted}
          onCountdownEnd={() => {
            handleCountdownEnd(todo._id);
            handleToggleCountdown(); // Tắt countdown khi kết thúc
          }}
          setCountdownActive={setCountdownActive}
          onClose={() => {
            console.log("Closing countdown");
            setShowCountdown(false);
          }}
        />
      )}
    </>
  );
};
