import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginSlice, IUserDetails } from "../models/login/Login";
import { LoginSubmit } from "./LoginAction";

const initialState: ILoginSlice = {
  userDetails: null,
  isLogin: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setIsLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogin = payload;
    },
    setUserDetails: (state, { payload }: PayloadAction<IUserDetails>) => {
      state.userDetails = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginSubmit.fulfilled, (state, action) => {
      if (action.payload.statusCode === 200) {
        state.userDetails = action.payload.data;
        state.isLogin = true;
      }
    });
  },
});

export default LoginSlice.reducer;
export const { setIsLogin, setUserDetails } = LoginSlice.actions;
