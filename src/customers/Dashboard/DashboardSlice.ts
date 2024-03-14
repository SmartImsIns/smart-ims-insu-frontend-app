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
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(GetDashboardData.fulfilled, (state, action) => {
      if (action.payload) {
        state.dashboardData = action.payload;
      }
    });
  },
});

export default DashboardSlice.reducer;
