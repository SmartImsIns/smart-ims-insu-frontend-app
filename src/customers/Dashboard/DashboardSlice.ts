import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDashboardSlice } from "../../models/customers/dashboard/Dashboard";
import { GetDashboardData } from "./DashboardAction";

const initialState: IDashboardSlice = {
  dashboardData: null,
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetDashboardData.fulfilled, (state, action) => {
      if (action.payload.statusCode === 200) {
        state.dashboardData = action.payload.data;
      }
    });
  },
});

export default DashboardSlice.reducer;
