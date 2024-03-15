import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_POST_TEST_DATA } from "../../Apis/ApiEndPoints";
import Api from "../../Apis/AxiosInterceptor";
import {
  IDashboard,
  IDashboardRequestParams,
} from "../../models/customers/dashboard/Dashboard";
import { CustomAction } from "../../store/customAction";

export const GetDashboardData = createAsyncThunk(
  "cDashboard",
  async (requestParams: IDashboardRequestParams, { dispatch }) => {
    const data: IDashboard = await CustomAction(
      Api.post(API_POST_TEST_DATA, requestParams),
      dispatch,
      "cDashboard"
    );
    return data;
  }
);
