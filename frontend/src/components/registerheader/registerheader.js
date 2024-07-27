import React, { useState } from "react";
import { Register } from "../register/register";
import { Login } from "../login/login";
export const Registerheader = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenModal = () => {
    // Mở modal
    setShowModal(true);
  };
  const handleCloseModal = () => {
    // Đóng modal
    setShowModal(false);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  return (
    <>
      <div>
        {showModal && (
          <Register
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
      <div>{showLogin && <Login handleCloseLogin={handleCloseLogin} />}</div>
    </>
  );
};
