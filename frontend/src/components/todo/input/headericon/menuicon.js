import React from "react";

export const Menuicon = ({ labelSelected }) => {
  return (
    <>
      <p
        style={{
          position: "absolute",
          height: "15px",
          width: "15px",
          borderRadius: "100%",
          backgroundColor: labelSelected?.color,
        }}
      ></p>
    </>
  );
};
