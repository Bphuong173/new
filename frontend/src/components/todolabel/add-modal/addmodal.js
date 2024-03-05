import React, { useState } from "react";
import { Checkcolor } from "./colors/checkcolor.js";
import "./addmodal.css";
export const AddModal = ({ addTodoLabel, handleCloseModal }) => {
  const [value, setValue] = useState("");
  const colors = [
    "#9FB0B6",
    "#6372FC",
    "#57B6E2",
    "#EFA546",
    "#B623A6",
    "#EE4B79",
    "#F4CE41",
    "#90C750",
    "#FD6844",
    "#9452ED",
    "#209BD3",
    "#3D3D3D",
    "#56DBB8",
    "#A6887D",
    "#939394",
    "#E55454",
    "#E03FC9",
    "#3655F4",
    "#782DDC",
    "#74DF9E",
  ];
  const [color, setColor] = useState("red");
  const buttons = colors.map((colorItem) => (
    <div
      type="color"
      key={colorItem}
      value={colorItem}
      className="colorBtn"
      style={{
        backgroundColor: colorItem,
      }}
      onClick={() => setColor(colorItem)}
    >
      {colorItem === color && <Checkcolor />}
    </div>
  ));
  const handleSubmit = () => {
    // Thêm todo vào danh sách
    addTodoLabel(value, color);
    // Đóng modal
    handleCloseModal();
  };

  return (
    <>
      <div className="modal-css">
        <div className="modal">
          <div className="modal-header">
            <h2 className="Add-Todo">Add Todo</h2>
          </div>
          <div className="modal-body">
            <input
              className="modal-input"
              type="text"
              placeholder="Thêm nhiệm vụ"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="colorBtn-outside">{buttons}</div>
          </div>

          <div className="modal-footer">
            <button className="cancelModal" onClick={handleCloseModal}>
              Cancel
            </button>
            <button className="saveModal" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
// export async function getUsers(pageNumber, pageSize) {
//   try {
//     const users = await User.find({})
//       .skip((pageNumber - 1) * pageSize)
//       .limit(pageSize);
//     return users;
//   } catch (error) {
//     throw new Error("Error fetching users: " + error.message);
//   }
// }
