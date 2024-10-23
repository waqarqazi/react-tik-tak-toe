// // /* eslint-disable no-unused-vars */
// // import React, { useState } from "react";
// // import * as yup from "yup";
// // import { useForm } from "react-hook-form";
// // import { useDispatch } from "react-redux";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import { Link, useNavigate } from "react-router-dom";

// // import { createNotification } from "components/react-notification";
// // import TextField from "components/textfield";
// // import Button from "components/button";

// // //import { userService } from "services/users";

// // import loginLogo from "assets/icons/auth.png";
// // // import mainLogo from 'assets/icons/app-logo.png';
// // // import crossIcon from 'assets/icons/cross-gray.svg';
// // import eyeOpen from "assets/icons/Hide.svg";
// // import eyeClose from "assets/icons/Show.svg";

// // import style from "./login.module.scss";

// // import { v4 as uuidv4 } from "uuid";

// // const deviceId = uuidv4();

// // function Login() {
// //   const dispatch = useDispatch();
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const navigate = useNavigate();

// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors, isSubmitting },
// //   } = useForm({
// //     resolver: yupResolver(schema),
// //   });

// //   const onSubmit = async (data) => {
// //     const { email, password } = data;
// //     // dispatch(
// //     //   login({
// //     //     email: email,
// //     //     password: password,
// //     //   })
// //     // )
// //     //   .unwrap()
// //     //   .then(async (data) => {
// //     //     console.log("data", data);
// //     //   })
// //     //   .catch((err) => {
// //     //     console.log("err", err);
// //     //     createNotification(
// //     //       "error",
// //     //       "Login Error",
// //     //       "Wrong Email or Password",
// //     //       3500
// //     //     );
// //     //   });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <div className={style.rightInnerDiv}>
// //         <img src={loginLogo} alt="" style={{ width: "100%", height: "100%" }} />
// //         <div
// //           style={{
// //             position: "absolute",
// //             display: "block",
// //             top: "20%",
// //             left: "5%",
// //           }}
// //         >
// //           <p style={{ color: "#ffff" }}>Welcome to,</p>
// //           <h1 style={{ color: "#ffff" }}>Welcome to Tik Tak Toe Games</h1>
// //           <h3 style={{ color: "#ffff" }}>Where Strategy Meets Fun!</h3>
// //         </div>
// //       </div>

// //       <div className={style.mainDiv}>
// //         <div
// //           style={{ width: "100%", display: "flex", justifyContent: "center" }}
// //         >
// //           {/* <img src={mainLogo} alt="" className={style.logo} /> */}
// //         </div>
// //         <div style={{ height: "10%" }}>
// //           <h2 style={{}}>Welcome</h2>
// //           <span style={{ color: "#505673" }}>
// //             Please Enter your details to continue
// //           </span>
// //         </div>

// //         <TextField
// //           label="Email"
// //           className={style.field}
// //           name="email"
// //           register={register}
// //           //   placeholder="User ID"
// //           errorMessage={errors?.email?.message}
// //           //  icon={crossIcon}
// //           onClick={() => reset({ email: "" })}
// //           // iconClass={style.crossIcon}
// //         />
// //         <TextField
// //           label="Password"
// //           className={style.field}
// //           name="password"
// //           // placeholder="Password"
// //           register={register}
// //           errorMessage={errors?.password?.message}
// //           wraperClass={style.textFieldWraper2}
// //           onClick={() => setPasswordVisible(!passwordVisible)}
// //           icon={passwordVisible ? eyeOpen : eyeClose}
// //           type={passwordVisible ? "text" : "password"}
// //           iconClass={style.eyeIcon}
// //         />
// //         <div className={style.forgotPassword}>
// //           <p
// //             style={{
// //               textDecoration: "none",
// //               color: "#7f7f7f",
// //             }}
// //           >
// //             Not able to Log in? Try{" "}
// //             <Link
// //               style={{
// //                 textDecoration: "none",
// //                 color: "#2F80ED",
// //                 fontWeight: "bold",
// //               }}
// //               to="/forgot-password"
// //             >
// //               Forgot password?
// //             </Link>
// //           </p>
// //         </div>

// //         <div className={style.buttonDiv}>
// //           <Button
// //             type={"submit"}
// //             text="Sign In"
// //             btnClass={style.loginButton}
// //             isLoading={isSubmitting}
// //           />
// //         </div>
// //       </div>
// //     </form>
// //   );
// // }

// // export default Login;

// // const schema = yup
// //   .object({
// //     email: yup.string().required("Email is required ").email(),
// //     password: yup
// //       .string()
// //       .required("Password is required ")
// //       .min(4, "Must be at least 4 characters"),
// //   })
// //   .required();
// // src/pages/auth/login/Login.js
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../../store/authSlice";

// const Login = () => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth); // Get loading and error from the Redux store
//   const [credentials, setCredentials] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(credentials)); // Dispatch the login action
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//       {/* Display error message */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../../../store/authSlice"; // Import the login action

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password })).unwrap(); // Call the login action
      if (resultAction) {
        navigate("/"); // Redirect to the home page after successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error (e.g., show a message)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
