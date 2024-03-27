import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_POST_LOGIN_SUBMIT } from "../Apis/ApiEndPoints";
import { Post } from "../Apis/AxiosInterceptor";
import { ILoginRequestParams, ILoginResponse } from "../models/login/Login";
import { CustomAction } from "../store/customAction";
import { setCookie } from "../utils/Utility";

export const LoginSubmit = createAsyncThunk(
  "login",
  async (requestParams: ILoginRequestParams, { dispatch }) => {
    const response: ILoginResponse = await CustomAction(
      Post(API_POST_LOGIN_SUBMIT, requestParams),
      dispatch,
      "login"
    );
    // console.log('inside login')
    if (response.statusCode === 200 && response.data) {
      setCookie([
        {cookieName: 'authenticated', cookieValue: 'true' },
        {cookieName: 'roleName', cookieValue: 'customer' },
        {cookieName: 'customerName', cookieValue: response.data.customerName },
        {cookieName: 'customerId', cookieValue: response.data.customerId },
      ]);
        // document.cookie = "authenticated=true";
        // document.cookie = "roleName=customer";
        // document.cookie = `customerName=${response.data.customerName}`;
        // document.cookie = `customerId=${response.data.customerId}`;
    }
    return response;
  }
);
