// src/services/authService.js
import client from "./client";

export const login = async (data) => {
  try {
    console.log(data);

    const response = await client.post("/auth/login", data);
    if (response && response.token) {
      return response.token;
    } else {
      throw new Error("Login failed: No token received");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed: " + error.message);
  }
};

export const checkUserExistance = async (data) => {
  try {
    console.log("dataApi", data);
    const response = await client.post("/auth/user-status", data);
    console.log("responseStatus==>", response);

    return response; // Ensure the response is serializable
  } catch (error) {
    console.error("Check user existence error:", error);
    throw new Error("Check user existence failed: " + error);
  }
};

export const sendOtp = async (data) => {
  const response = await client.post("auth/send-otp", data);
  console.log("otp==>", response);
  return response;
};

export const verifyOtp = async (data) => {
  const response = await client.post("auth/verify-otp", data);
  console.log("otp==>", response);
  return response;
};

export const profileSignup = async (data) => {
  try {
    console.log("data", data);

    const response = await client.post("/auth/register", data);
    if (response.success && response.token) {
      return response.token;
    } else {
      throw new Error("Login failed: No token received");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed: " + error.message);
  }
};
