import React, { useState, useEffect, useRef } from "react";
import { AddModal } from "./addmodal";

export const OpenAddModal = ({ addTodoLabel }) => {
  const refModal = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    // Mở modal
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    // Đóng modal
    setIsModalOpen(false);
  };
  const handleClick = (event) => {
    const target = event.target;
    const currentModal = refModal.current;
    if (currentModal && !currentModal.contains(target)) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
  }, [isModalOpen]);

  return (
    <>
      <div ref={refModal}>
        <button
          className="text-[#f93b42] text-sm  bg-white  flex  bottom-0 cursor-pointer  pt-2    "
          onClick={setIsModalOpen}
        >
          + Thêm Dự Án
        </button>

        <div className="inputTodoLabel" ref={refModal}>
          {isModalOpen && (
            <AddModal
              addTodoLabel={addTodoLabel}
              handleCloseModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
            />
          )}
        </div>
      </div>
    </>
  );
};
