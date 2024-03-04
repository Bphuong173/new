import React, { useState, useEffect } from "react";
import { Avatar } from "../avatar/avatar";
export const UploadAvatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

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
    fetch("http://localhost:5500/user/avatar", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to upload avatar !!!");
        }
        return response.text();
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

  return (
    <div>
      <input name="file" type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Avatar</button>
      {avatarUrl && <Avatar src={avatarUrl} />}
    </div>
  );
};
