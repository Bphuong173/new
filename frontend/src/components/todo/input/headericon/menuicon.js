import React from "react";

export const Menuicon = ({ labelSelected }) => {
  return (
    <>
      <p
        style={{
          position: "absolute",
          height: "12px",
          width: "12px",
          borderRadius: "100%",
          backgroundColor: labelSelected?.color,
        }}
      ></p>
    </>
  );
};
