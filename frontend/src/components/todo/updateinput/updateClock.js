import React, { useState } from "react";
export const UpdateClock = ({ initialCount, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  const handleChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    if (newCount >= 0) {
      setCount(newCount);
      onCountChange(newCount);
    } else {
      setCount(""); // If a negative (so am) number is entered, reset to ""
      onCountChange("");
    }
  };
  return (
    <div className="flex items-center">
      <input
        type="number"
        value={count}
        onChange={handleChange}
        className="border px-2 h-7 w-[50px] rounded-md text-[14px] flex"
      />
    </div>
  );
};
