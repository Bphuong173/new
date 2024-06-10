import React, { useState } from "react";
import ClockIcon from "../input/headericon/image/redPromo.png";

export const UpdateClock = ({ initialCount, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = (e) => {
    e.preventDefault();
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handleDecrement} className="border px-2 py-1">
        -
      </button>
      <img
        src={ClockIcon}
        alt="clock"
        className="mx-2"
        style={{ height: "20px", width: "20px" }}
      />
      <span>{count}</span>
      <button onClick={handleIncrement} className="border px-2 py-1">
        +
      </button>
    </div>
  );
};
