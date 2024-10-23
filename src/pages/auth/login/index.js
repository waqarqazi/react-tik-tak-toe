import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../../store/authSlice";
import TextField from "components/textfield";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginLogo from "assets/icons/auth.png";
import eyeOpen from "assets/icons/Hide.svg";
import eyeClose from "assets/icons/Show.svg";
import Button from "components/button";
import style from "./login.module.scss";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const resultAction = await dispatch(login({ email, password })).unwrap(); // Call the login action
      // if (resultAction) {
      //   navigate("/"); // Redirect to the home page after successful login
      // }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error (e.g., show a message)
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
            Don't have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#2F80ED",
                fontWeight: "bold",
              }}
              to="/signup"
            >
              Sign up here!
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
};

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
