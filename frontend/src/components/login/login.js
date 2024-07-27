// Login component
import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "../../index.css";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "@react-oauth/google";

export const Login = ({ handleCloseLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const responseGoogle = async (response) => {
    try {
      const res = await axios.post("http://localhost:5500/user/google-login", {
        token: response.credential,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/todos");
    } catch (error) {
      console.error("Google login error", error);
    }
  };
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5500/user/login",
        data
      );
      const token = response.data;
      localStorage.setItem("token", token); // Lưu token vào localStorage
      alert("login is succeed");
      navigate("/todos");
    } catch (error) {
      console.log(error);
      alert("loi dang nhap");
    }
  };

  const isLoggedIn = localStorage.getItem("token");
  if (isLoggedIn) {
    return <Navigate to="/todos" />;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mt-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-10">
              <div className="mt-2 mb-3 ">
                <input
                  id="email"
                  {...register("email", { required: true })}
                  type="email"
                  autoComplete="email"
                  placeholder="Địa chỉ email"
                  className="text-sm w-full rounded-md border-solid border-2 h-9 placeholder:text-gray-400 placeholder: pl-3 "
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">Vui lòng nhập email</p>
                )}
              </div>
              <div className="mt-2">
                <input
                  {...register("password", { required: true })}
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Mật khẩu"
                  className="text-sm w-full rounded-md border-solid border-2 h-9 placeholder:text-gray-400 placeholder: pl-3"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">Vui lòng nhập mật khẩu</p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" flex w-full justify-center rounded-md bg-[#F93B42]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng nhập
              </button>
            </div>
            <GoogleLogin
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
          <div id="google-signin" className="flex justify-center mt-4"></div>
          <p className="mt-10 text-center text-sm">
            <a
              href="/register"
              className="font-semibold leading-6 text-[#F93B42]"
            >
              Đăng ký
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
