import React, { useState, useEffect } from "react";
import { Avatar } from "../avatar/avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const UploadAvatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    axios
      .post("http://localhost:5500/user/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        throw new Error("Failed to upload avatar !!!");
      })
      .then((avatarPath) => {
        if (avatarPath) {
          localStorage.setItem("avatarUrl", avatarPath);
          setAvatarUrl(avatarPath); // Sử dụng đường dẫn avatar trả về từ máy chủ
        } else {
          throw new Error("Invalid response data");
        }
      })
      .catch((error) => {
        console.error("Error uploading avatar:", error);
        alert("Failed to upload avatar.");
      });
  };
  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatarUrl");
    if (savedAvatar) {
      setAvatarUrl(savedAvatar);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    // Chuyển hướng người dùng về trang đăng nhập sau khi đăng xuất
    navigate("/login");
  };

  return (
    <div className=" border-y-2 flex fixed items-center h-12 w-full z-50 bg-white">
      <div>
        <input name="file" type="file" onChange={handleFileChange} />
      </div>
      <div>
        <button onClick={handleUpload}>Upload Avatar</button>
      </div>
      {avatarUrl && <Avatar src={avatarUrl} />}
      <div className="  text-white bg-[#F93B42] absolute right-7 rounded-xl p-1   ">
        <button onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  );
};
