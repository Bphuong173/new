import React, { useState, useEffect } from "react";
import { Avatar } from "../avatar/avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useData } from "../main/mainstate";

export const UploadAvatar = () => {
  const { resetState } = useData();
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
          setAvatarUrl(avatarPath);
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
    resetState();
    navigate("/login");
  };

  return (
    <div className=" border-y-2 flex fixed items-center h-12 w-full z-50 bg-white">
      <div className="flex items-center">
        <label htmlFor="avatar-upload" className="cursor-pointer">
          <div className="relative">
            <div className="w-12 h-12 ml-2 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-500 overflow-hidden">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-xs">Avatar</span>
              )}
            </div>
            <input
              id="avatar-upload"
              name="file"
              type="file"
              onChange={handleFileChange}
              className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
            />
          </div>
        </label>
        <input
          id="avatar-upload"
          name="file"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleUpload}
          className="ml-4 p-[10px] bg-gray-500  text-white rounded-md shadow-md hover:bg-gray-600 text-xs"
        >
          Upload
        </button>
      </div>
      <div className="text-white text-xs bg-[#F93B42] ml-auto mr-2 rounded-md p-[10px] shadow-md hover:bg-red-600">
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};
