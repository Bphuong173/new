import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Updatemodal } from "../updatemodal/updatemodal";
import { Playicon } from "../input/headericon/playicon";
import { Timercountdown } from "./timercountdown";
import { Action } from "./action/action";
export const Item = ({
  todo,
  deleteTodo,
  updateTodo,
  handleCountdownEnd,
  countdownActive,
  setCountdownActive,
  loadTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const clockCompleted = todo.clockCompleted;
  const updateTasktodo = (value, todoid) => {
    updateTodo(value, todoid);
    setIsEditing(false);
  };
  const getCompletedList = () => {
    // Hàm này trả về danh sách completed của công việc
    return todo.clockCompleted;
  };
  const handleToggleCountdown = () => {
    setShowCountdown(!showCountdown);
  };
  return (
    <>
      <div className="flex items-center rounded-lg mt-4 bg-white w-[98.5%]">
        <div
          style={{
            marginRight: "10px",
          }}
          className=" mr-3"
        >
          <Playicon
            getCompletedList={getCompletedList}
            setShowCountdown={setShowCountdown}
            countdownActive={countdownActive}
          />
        </div>
        <div>
          <div>{todo.task}</div>
          <div>label: {todo.label?.task}</div>
          <div>time:{todo.time}</div>
        </div>
        <div className="flex">
          {clockCompleted.map((index) => (
            <svg
              key={uuidv4()}
              style={{
                backgroundColor: "#FF1B2A",
                height: "20px",
                width: "20px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#dcd8d9"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(4,4)">
                  <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,14.359 11.641,26 26,26c14.359,0 26,-11.641 26,-26c0,-14.359 -11.641,-26 -26,-26zM32,10c12.15,0 22,9.85 22,22c0,12.15 -9.85,22 -22,22c-12.15,0 -22,-9.85 -22,-22c0,-12.15 9.85,-22 22,-22zM30.5,14l0.5,4h2l0.5,-4zM44.02148,18.56445l-10.77148,9.63867c-0.40324,-0.13366 -0.82519,-0.20222 -1.25,-0.20312c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c0.24246,-0.00084 0.48434,-0.02372 0.72266,-0.06836l8.09375,6.70703l1.82422,-1.82227l-6.70898,-8.0957c0.12053,-0.65784 0.0742,-1.3354 -0.13477,-1.9707l9.63867,-10.77148zM14,30.5v3l4,-0.5v-2zM50,30.5l-4,0.5v2l4,0.5zM31,46l-0.5,4h3l-0.5,-4z"></path>
                </g>
              </g>
            </svg>
          ))}
        </div>
        {isEditing ? (
          <Updatemodal
            updateTasktodo={updateTasktodo}
            todo={todo}
            key={todo._id}
            loadTodo={loadTodo}
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
      </div>

      <div>
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
      </div>
    </>
  );
};
