import React, { useState } from "react";
import { Playicon } from "../input/headericon/playicon";
import { Updatemodal } from "../updatemodal/updatemodal";
import { Timercountdown } from "../item/timercountdown";
import { Action } from "../item/action/action";
import PromoRed from "../input/headericon/image/redPromo.png";
import PomodoroTransparen from "../item/image/pomodoro-transparen.png";
import ProjectIcon from "../item/image/project-icon.png";
import { UpdateClock } from "../updateinput/updateClock";
import { ListMenu } from "../input/listmenu";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../../main/mainstate";
import PomoRed from "../item/image/pomo-redcolor.png";
import "./todomodal.css";

export const Todomodal = ({
  todo,
  deleteTodo,
  updateTasktodo,
  handleCountdownEnd,
  countdownActive,
  setCountdownActive,
  loadTodo,
  setShowTodomodal,
  showTodomodal,
}) => {
  console.log(todo);
  const { todoLabels } = useData();
  const [value, setValue] = useState(todo.task);
  const [isEditing, setIsEditing] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showClock, setShowClock] = useState(false);
  const [clockCompleted, setClockCompleted] = useState(
    todo.clockCompleted.length
  );
  const [labelId, setLabelId] = useState(todo.labelId);
  const [showActions, setShowActions] = useState(false);
  const [notes, setNotes] = useState(todo.notes || "");

  const handleClockCompletedChange = (newClockCompleted) => {
    setClockCompleted(newClockCompleted);
  };

  const handleClickInside = () => {
    setShowActions(!showActions);
  };

  const handleUpdateClock = () => {
    setShowClock(!showClock);
  };

  const handleToggleCountdown = () => {
    setShowCountdown(!showCountdown);
  };

  const showOffModal = () => {
    setShowTodomodal(!showTodomodal);
  };
  const getCompletedList = () => {
    // Hàm này trả về danh sách completed của công việc
    return todo.clockCompleted;
  };

  const selectedLabelId = labelId !== null ? labelId : todo.labelId;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClockCompletedArray = new Array(clockCompleted).fill(25);
    updateTasktodo(
      value,
      todo._id,
      newClockCompletedArray,
      selectedLabelId._id,
      notes
    );
    showOffModal();
  };
  return (
    <>
      <div className="todomodal">
        <div className="pt-4 pr-4 pb-4 pl-3 h-full flex flex-col justify-between">
          <form className=" flex-grow" onSubmit={handleSubmit}>
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
                  className="border-none outline-none font-bold w-full"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Nhập công việc"
                />
              </div>
            </div>
            <div className="flex h-11 leading-[44px] items-center">
              <img
                className="w-[24px] h-[24px] "
                src={PomodoroTransparen}
                alt="icon "
              />
              <p className="pl-[7px] text-[#aeaeae] text-[14px]">
                Số lượng Pomodoro
              </p>

              <div className="flex right-0 absolute pr-10 items-center">
                {!showClock && (
                  <div className="flex">
                    <img
                      src={PomoRed}
                      alt="icon"
                      onClick={handleUpdateClock}
                      style={{
                        height: "16px",
                        width: "16px",
                        borderRadius: "10px",
                      }}
                    />
                    <p className="h-4 leading-4 text-sm text-[#fd5553]">0</p>
                  </div>
                )}

                {showClock && (
                  <UpdateClock
                    initialCount={clockCompleted}
                    onCountChange={handleClockCompletedChange}
                  />
                )}
                <p className="h-4 leading-4 text-xs text-[#aeaeae] ml-1">/</p>
                <img
                  src={PromoRed}
                  alt="icon"
                  key={uuidv4()}
                  style={{
                    height: "16px",
                    width: "16px",
                    borderRadius: "10px",
                  }}
                />
                <p className="text-[#ffd9d8] text-[14px] h-4 leading-4">
                  {clockCompleted}
                </p>
              </div>
            </div>
            <div className="flex items-center h-11 leading-[44px]">
              <img className="w-[24px] h-[24px]" src={ProjectIcon} alt="icon" />
              <p className="pl-[7px] text-[#aeaeae] text-[14px]">Dự án</p>
              <div className="absolute right-0 pr-10 text-[14px]">
                <label onClick={handleClickInside}>
                  {selectedLabelId.task ? selectedLabelId.task : todo.label}
                </label>
                {showActions && (
                  <div className="absolute z-10000 bg-white boder rounded-xl h-40 w-52 transform translate-x-[-200px] translate-y-[-10px] overflow-auto shadow-xl">
                    <ListMenu
                      todoLabels={todoLabels}
                      labelSelected={labelId}
                      setLabelSelected={setLabelId}
                      handleClickInside={handleClickInside}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#f4f4f4] mt-5"></div>
            <div className="ml-1 mt-[20px]">
              <textarea
                className="border-none outline-none  h-full w-full text-[14px]"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                type="text"
                placeholder="Thêm ghi chú ..."
              />
            </div>
            <div className="flex absolute bottom-3 w-full">
              <div className="text-[14px] text-gray-400 mt-1 pl-[5px]">
                Được tạo: {new Date(todo.createTime).toLocaleString()}
              </div>
              <div className="pl-[30px]">
                <button
                  className="bg-[#f93b42] text-[#ffffff] border-none rounded-md h-6 w-14 text-sm"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
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
