import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_POST_TEST_DATA } from "../../Apis/ApiEndPoints";
import Api from "../../Apis/AxiosInterceptor";
import { IDashboard } from "../../models/customers/dashboard/Dashboard";
import { ICommonResponse } from "../../models/common/Common";
import { CustomAction } from "../../store/customAction";
import * as cMockJson from "../../mockJson/CustomerDashboard/Dashboard.json";

export const GetDashboardData = createAsyncThunk(
  "cDashboard",
  async (requiredParams: any, { dispatch }) => {
    const data: IDashboard = await CustomAction(
      Api.post(API_POST_TEST_DATA, requiredParams),
      dispatch,
      "cDashboard"
    );
    return data;
  }
);
