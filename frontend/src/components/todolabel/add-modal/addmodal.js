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
  const halfLength = Math.ceil(colors.length / 2); // Lấy độ dài của mảng phân nửa

  const firstHalfColors = colors.slice(0, halfLength); // Lấy mảng phần đầu
  const secondHalfColors = colors.slice(halfLength); // Lấy mảng phần sau
  const [color, setColor] = useState("red");
  // const buttons = colors.map((colorItem) => (
  //   <div
  //     type="color"
  //     key={colorItem}
  //     value={colorItem}
  //     className=" h-2 w-2 rounded-md"
  //     style={{
  //       backgroundColor: colorItem,
  //     }}
  //     onClick={() => setColor(colorItem)}
  //   >
  //     {colorItem === color && <Checkcolor />}
  //   </div>
  // ));
  const firstRowButtons = firstHalfColors.map((colorItem) => (
    <div
      type="color"
      key={colorItem}
      value={colorItem}
      className="h-5 w-5 rounded-xl mr-1 flex"
      style={{
        backgroundColor: colorItem,
      }}
      onClick={() => setColor(colorItem)}
    >
      {colorItem === color && <Checkcolor />}
    </div>
  ));
  const secondRowButtons = secondHalfColors.map((colorItem) => (
    <div
      type="color"
      key={colorItem}
      value={colorItem}
      className="h-5 w-5 rounded-xl mr-1 flex mt-1"
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
            <h2 className="Add-Todo">Thêm Dự Án</h2>
          </div>
          <div className="modal-body">
            <input
              className=" w-full pt-2 h-10 pl-2 pb-2"
              type="text"
              placeholder="Thêm nhiệm vụ"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="pt-4 ml-2">
              <div className="flex">{firstRowButtons}</div>
              <div className="flex">{secondRowButtons}</div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="cancelModal" onClick={handleCloseModal}>
              Huỷ
            </button>
            <button className="saveModal" onClick={handleSubmit}>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
