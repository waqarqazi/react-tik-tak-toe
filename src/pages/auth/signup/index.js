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

import style from "./signup.module.scss";
import { authService } from "services/auth-services";
import { setAuthState } from "redux/features/appStateSlice";
import { jwtDecode } from "jwt-decode";

import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const deviceId = uuidv4();
console.log("deviceId", deviceId);

function Signup() {
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
    const { email, password, confirm_password, first_name, last_name } = data;

    try {
      if (password == confirm_password) {
        const result = await authService.signup({
          email: email,
          firstName: first_name,
          lastName: last_name,
          password: password,
        });
        console.log("result?.data?.message", result?.data?.message);
        console.log("result", result);
        if (result?.status == 200) {
          // const status = 'login';
          dispatch(setAuthState(result?.data));
          // navigate(`/otp-verification/${email}/${status}`);
        }
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
          <h1 style={{ color: "#ffff" }}>USDT HEIST</h1>
          <h3 style={{ color: "#ffff" }}>Stratigies Bot with Binance</h3>
        </div>
      </div>

      <div className={style.mainDiv}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {/* <img src={mainLogo} alt="" className={style.logo} /> */}
        </div>
        <div style={{ height: "10%" }}>
          <h2 style={{}}>Create Account</h2>
          <span style={{ color: "#505673" }}>
            Please Enter your details to continue
          </span>
        </div>
        <TextField
          label="First Name"
          className={style.field}
          name="first_name"
          register={register}
          //   placeholder="User ID"
          errorMessage={errors?.first_name?.message}
          //  icon={crossIcon}
          onClick={() => reset({ first_name: "" })}
          // iconClass={style.crossIcon}
        />
        <TextField
          label="Last Name"
          className={style.field}
          name="last_name"
          register={register}
          //   placeholder="User ID"
          errorMessage={errors?.last_name?.message}
          //  icon={crossIcon}
          onClick={() => reset({ last_name: "" })}
          // iconClass={style.crossIcon}
        />
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

        <TextField
          label="Confirm Password"
          className={style.field}
          name="confirm_password"
          // placeholder="Password"
          register={register}
          errorMessage={errors?.confirm_password?.message}
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
            Already have Account? Try{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#2F80ED",
                fontWeight: "bold",
              }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>

        <div className={style.buttonDiv}>
          <Button
            type={"submit"}
            text="Sign Up"
            btnClass={style.loginButton}
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
}

export default Signup;

const schema = yup
  .object({
    first_name: yup.string().required("First Name Field is required "),
    last_name: yup.string().required("Last Name Field is required "),
    email: yup.string().required("Email Field is required "),
    password: yup
      .string()
      .required("Password is required ")
      .min(4, "Must be at least 4 characters"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required();
