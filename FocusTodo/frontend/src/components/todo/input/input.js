import React, { useState, useEffect, useRef } from "react";
import "./input.css";
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
        <div className="Div-Input" ref={refInput}>
          <Plusicon />
          <input
            className="Input"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="write todo here"
          />
          <div className="container-Timeicon">
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
            className="icon-menu"
            onClick={() => setShowActions(true)}
          >
            <Menuicon labelSelected={labelSelected} />
          </p>
          <Linebreak />

          {showActions && (
            <div>
              <div className="ListMenu">
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
