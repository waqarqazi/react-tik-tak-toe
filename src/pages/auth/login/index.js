/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import { createNotification } from "components/react-notification";
import TextField from "components/textfield";
import Button from "components/button";

import { setUserReduxLogin } from "redux/auth/auth-actions";
//import { userService } from "services/users";

import loginLogo from "assets/icons/auth.png";
// import mainLogo from 'assets/icons/app-logo.png';
// import crossIcon from 'assets/icons/cross-gray.svg';
import eyeOpen from "assets/icons/Hide.svg";
import eyeClose from "assets/icons/Show.svg";

import style from "./login.module.scss";
import { authService } from "services/auth-services";
import { setAuthState } from "redux/features/appStateSlice";
import { jwtDecode } from "jwt-decode";

import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const deviceId = uuidv4();
console.log("deviceId", deviceId);

function Login() {
  const roleState = useSelector((state) => state?.appState?.roleState);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  console.log("roleState", roleState);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const result = await authService.login({
        email: email,
        password: password,
      });

      if (result?.data?.message == "Auth Successful") {
        console.log("result", result);
        // const status = 'login';
        dispatch(setAuthState(result?.data?.token));
        // navigate(`/otp-verification/${email}/${status}`);
      }
    } catch (err) {
      console.log("err", err);

      createNotification(
        "error",
        "Login Error",
        "Some thing happening wrong",
        3500
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.rightInnerDiv}>
        <img src={loginLogo} alt="" style={{ width: "100%", height: "100%" }} />
        <div
          style={{
            position: "absolute",
            display: "block",
            top: "20%",
            left: "5%",
          }}
        >
          <p style={{ color: "#ffff" }}>Welcome to,</p>
          <h1 style={{ color: "#ffff" }}>Welcome to Tik Tak Toe Games</h1>
          <h3 style={{ color: "#ffff" }}>Where Strategy Meets Fun!</h3>
        </div>
      </div>

      <div className={style.mainDiv}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {/* <img src={mainLogo} alt="" className={style.logo} /> */}
        </div>
        <div style={{ height: "10%" }}>
          <h2 style={{}}>Welcome</h2>
          <span style={{ color: "#505673" }}>
            Please Enter your details to continue
          </span>
        </div>

        <TextField
          label="Email"
          className={style.field}
          name="email"
          register={register}
          //   placeholder="User ID"
          errorMessage={errors?.email?.message}
          //  icon={crossIcon}
          onClick={() => reset({ email: "" })}
          // iconClass={style.crossIcon}
        />
        <TextField
          label="Password"
          className={style.field}
          name="password"
          // placeholder="Password"
          register={register}
          errorMessage={errors?.password?.message}
          wraperClass={style.textFieldWraper2}
          onClick={() => setPasswordVisible(!passwordVisible)}
          icon={passwordVisible ? eyeOpen : eyeClose}
          type={passwordVisible ? "text" : "password"}
          iconClass={style.eyeIcon}
        />
        <div className={style.forgotPassword}>
          <p
            style={{
              textDecoration: "none",
              color: "#7f7f7f",
            }}
          >
            Not able to Log in? Try{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#2F80ED",
                fontWeight: "bold",
              }}
              to="/forgot-password"
            >
              Forgot password?
            </Link>
          </p>
        </div>

        <div className={style.buttonDiv}>
          <Button
            type={"submit"}
            text="Sign In"
            btnClass={style.loginButton}
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
}

export default Login;

const schema = yup
  .object({
    email: yup.string().required("User Id is required "),
    password: yup
      .string()
      .required("Password is required ")
      .min(4, "Must be at least 4 characters"),
  })
  .required();