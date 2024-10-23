import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  login as loginService,
  profileSignup as signupService,
} from "../services/authService";

// Define initial state
const initialState: AuthState = {
  isLoggedIn: false,
  userToken: null,
  loading: false, // Add loading state
  error: null, // Add error state
};

// Async thunk for signup
export const signup = createAsyncThunk("auth/register", async (userData) => {
  const response = await signupService(userData);
  return response;
});

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string, password: string }) => {
    const token = await loginService(data);
    // Store the token in localStorage
    localStorage.setItem("authToken", token);
    return token;
  }
);

// Async thunk for logout
export const logout = createAsyncThunk("auth/logout", async () => {
  // Clear persisted auth data from localStorage
  localStorage.removeItem("authToken");
  return null; // No need for a response, returning null
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoggedIn = true;
        state.userToken = action.payload;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to login";
      })

      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoggedIn = true;
        state.userToken = action.payload;
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to signup";
      })

      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.userToken = null;
        state.loading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to logout";
      });
  },
});

// Export reducer
export default authSlice.reducer;
