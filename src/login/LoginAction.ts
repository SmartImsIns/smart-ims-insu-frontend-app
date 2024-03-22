import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_POST_LOGIN_SUBMIT } from "../Apis/ApiEndPoints";
import { Post } from "../Apis/AxiosInterceptor";
import { ILoginRequestParams, ILoginResponse } from "../models/login/Login";
import { CustomAction } from "../store/customAction";

export const LoginSubmit = createAsyncThunk(
  "login",
  async (requestParams: ILoginRequestParams, { dispatch }) => {
    const response: ILoginResponse = await CustomAction(
      Post(API_POST_LOGIN_SUBMIT, requestParams),
      dispatch,
      "login"
    );
    if (response.statusCode === 200) {
      if (response.data) {
        document.cookie = "authenticated=true";
        document.cookie = "roleName=customer";
        document.cookie = `customerName=${response.data.customerName}`;
        document.cookie = `customerId=${response.data.customerId}`;
      }
    }
    return response;
  }
);
