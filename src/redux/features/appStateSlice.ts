import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
  displayText: string;
  authState: any;
  otpVerified: boolean;
  roleState: any;
  suspectStateData: any;
  witnessStateData: any;
};

const initialState: appState = {
  appState: "",
  authState: {},
  displayText: "",
  otpVerified: false,
  roleState: [],
  suspectStateData: [],
  witnessStateData: [],
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;

      state.displayText = action.payload;
    },
    setAuthState: (state, action: PayloadAction<any>) => {
      state.authState = action.payload;
    },
    setOtpVerified: (state, action: PayloadAction<any>) => {
      state.otpVerified = action.payload;
    },
    setRoleState: (state, action: PayloadAction<any>) => {
      state.roleState = action.payload;
    },
    setSuspectState: (state, action: PayloadAction<any>) => {
      state.suspectStateData = action.payload;
    },
    setWitnessState: (state, action: PayloadAction<any>) => {
      state.witnessStateData = action.payload;
    },
  },
});

export const {
  setAppState,
  setAuthState,
  setOtpVerified,
  setRoleState,
  setSuspectState,
  setWitnessState,
} = appStateSlice.actions;

export default appStateSlice.reducer;
