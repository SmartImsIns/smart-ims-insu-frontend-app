import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDashboardSlice } from "../../models/customers/dashboard/Dashboard";
import { GetTestData } from "./DashboardAction";

const initialState: IDashboardSlice = {
  dashboardData: null,
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(GetTestData.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.dashboardData = action.payload.data;
      }
    });
  },
});

export default DashboardSlice.reducer;
