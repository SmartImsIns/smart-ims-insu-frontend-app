import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_POST_LOGIN_SUBMIT } from "../Apis/ApiEndPoints";
import { Post } from "../Apis/AxiosInterceptor";
import { ILoginRequestParams, IUserDetails } from "../models/login/Login";
import { CustomAction } from "../store/customAction";

export const LoginSubmit = createAsyncThunk(
  "login",
  async (requestParams: ILoginRequestParams, { dispatch }) => {
    const data: IUserDetails = await CustomAction(
      Post(API_POST_LOGIN_SUBMIT, requestParams),
      dispatch,
      "login"
    );
    if (data) {
      document.cookie = "authenticated=true";
      document.cookie = "roleName=customer";
      document.cookie = `customerName=${data.customerName}`;
      document.cookie = `customerId=${data.customerId}`;
    }
    return data;
  }
);
