import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_GET_TEST_DATA } from "../../Apis/ApiEndPoints";
import { Get } from "../../Apis/AxiosInterceptor";
import { IDashboardResponse } from "../../models/customers/dashboard/Dashboard";
import { ICommonResponse } from "../../models/common/Common";
import { CustomAction } from "../../store/customAction";
import * as cMockJson from "../../mockJson/CustomerDashboard/Dashboard.json";

export const GetTestData = createAsyncThunk(
  "cDashboard",
  async (_, { dispatch }) => {
    const data: IDashboardResponse = cMockJson; // await CustomAction(Get(API_GET_TEST_DATA), dispatch, 'cDashboard');
    return data;
  }
);
