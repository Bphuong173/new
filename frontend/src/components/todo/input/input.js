import React, { useState, useEffect, useRef } from "react";
import { Plusicon } from "./headericon/plusicon";
import { Linebreak } from "./headericon/linebreak";
import { ListMenu } from "./listmenu";
import { Menuicon } from "./headericon/menuicon";
import { Arrowicon } from "./headericon/arrowicon";
import { ClockIcon } from "./headericon/ClockIcon";
export const Input = ({
  addTodo,
  todoLabels,
  handleClockCompletedChange,
  clockCompleted,
}) => {
  const refInput = useRef();
  const [value, setValue] = useState("");
  const [labelSelected, setLabelSelected] = useState(undefined);
  const [showActions, setShowActions] = useState(false);
  const [timeDuration, setTimeDuration] = useState([]);

  const handleClickInside = () => {
    setShowActions(false);
  };
  const handleClickOutSide = (event) => {
    const target = event.target;
    const currentContainer = refInput.current;

    if (currentContainer && !currentContainer.contains(target)) {
      setShowActions(false);
    }
  };
  useEffect(() => {
    if (showActions) {
      document.addEventListener("click", handleClickOutSide);
    } else {
      document.removeEventListener("click", handleClickOutSide);
    }
  }, [showActions]);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, labelSelected, timeDuration, clockCompleted);
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="flex relative h-full bg-white mr-2.5 mt-2.5 mr- rounded-xl items-center input-wrapper ml-4"
          ref={refInput}
        >
          <Plusicon />
          <input
            className="h-12  p-0 w-full rounded-xl pl-12"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Thêm công việc theo nhãn tương ứng"
          />
          <div className="flex absolute right-12 items-center pt-0 pl-0 pr-3 pb-3">
            <ClockIcon
              setTimeDuration={setTimeDuration}
              handleClockCompletedChange={handleClockCompletedChange}
            />
          </div>
          <div
            style={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              right: "42px",
            }}
          >
            <p>
              <Arrowicon />
            </p>
          </div>
          <button
            type="submit"
            style={{ visibility: "hidden", position: "absolute" }}
          ></button>

          <p
            style={{
              height: "15px",
              width: "15px",
              borderRadius: "100%",
              backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              right: "10px",
            }}
            onClick={() => setShowActions(true)}
          >
            <Menuicon labelSelected={labelSelected} />
          </p>
          <Linebreak />

          {showActions && (
            <div>
              <div className="absolute z-10000 bg-white boder rounded-xl h-40 w-52 transform translate-x-[-210px] translate-y-[10px] overflow-auto  ">
                <ListMenu
                  todoLabels={todoLabels}
                  labelSelected={labelSelected}
                  setLabelSelected={setLabelSelected}
                  handleClickInside={handleClickInside}
                />
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
