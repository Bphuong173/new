import React, { useState } from "react";
import { Playicon } from "../input/headericon/playicon";
import { Updatemodal } from "../updatemodal/updatemodal";
import { Timercountdown } from "../item/timercountdown";
import { Action } from "../item/action/action";
import PromoRed from "../input/headericon/image/redPromo.png";
import PomodoroTransparen from "../item/image/pomodoro-transparen.png";
import ProjectIcon from "../item/image/project-icon.png";
import { v4 as uuidv4 } from "uuid";

export const Todomodal = ({
  todo,
  deleteTodo,
  updateTodo,
  handleCountdownEnd,
  countdownActive,
  setCountdownActive,
  loadTodo,
}) => {
  const [value, setValue] = useState(todo.task);
  const [isEditing, setIsEditing] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const clockCompleted = todo.clockCompleted;
  const clockLength = clockCompleted.length;
  const updateTasktodo = (value, todoid) => {
    updateTodo(value, todoid);
    setIsEditing(false);
  };
  const handleToggleCountdown = () => {
    setShowCountdown(!showCountdown);
  };

  const getCompletedList = () => {
    // Hàm này trả về danh sách completed của công việc
    return todo.clockCompleted;
  };

  return (
    <>
      <div className="todomodal">
        <div className="pt-4 pr-4 pb-4 pl-3 h-full">
          <div className="flex items-center rounded-xl h-[44px] leading-[44px]  bg-white    ">
            <div className="ml-[-10px]">
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

            <div className="mr-3 pl-[6px] ">
              <Playicon
                getCompletedList={getCompletedList}
                setShowCountdown={setShowCountdown}
                countdownActive={countdownActive}
              />
            </div>
            <div>
              <input
                className="border-none outline-none"
                value={value}
                type="text"
              />
            </div>
          </div>
          <div className="flex h-11 leading-[44px] items-center">
            <img
              className="w-[24px] h-[24px] "
              src={PomodoroTransparen}
              alt="icon "
            />
            <p className="pl-[7px]">Số lượng Pomodoro</p>

            <div className="flex right-0 absolute pr-10 items-center">
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
              <p>{clockLength}</p>
            </div>
          </div>
          <div className="flex items-center h-11 leading-[44px]">
            <img className="w-[24px] h-[24px]" src={ProjectIcon} alt="icon" />
            <p className="pl-[7px]">Dự án</p>
            <div className="absolute right-0 pr-10">{todo?.label}</div>
          </div>
          <div className="ml-1">
            <textarea
              className="border-none outline-none resize-none h-[165px] w-full"
              type="text"
              placeholder="Thêm ghi chú ..."
            />
          </div>
          <button
            className="bg-[#f93b42] text-[#ffffff] border-none rounded-md h-6 w-14 text-sm"
            type="submit"
          >
            Save
          </button>
        </div>

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
