import { createSlice } from "@reduxjs/toolkit";
import { IPolicyDetailsSlice } from "../../models/customers/policyDetails/PolicyDetails";
import {
  GetInsuranceDocuments,
  GetPolicyDetails,
  GetPolicyDrivers,
  GetPolicyVehicles,
} from "./PolicyDetailsActions";

const initialState: IPolicyDetailsSlice = {
  policyDetails: null,
  policyVehicles: [],
  policyDrivers: [],
  insuranceDocuments: [],
};

const PolicyDetailsSlice = createSlice({
  name: "policyDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPolicyDetails.fulfilled, (state, { payload }) => {});

    builder.addCase(GetPolicyVehicles.fulfilled, (state, { payload }) => {
      if (payload.statusCode === 200) {
        state.policyVehicles =
          payload.data && payload.data.vehicleDetails
            ? payload.data.vehicleDetails
            : [];
      }
    });

    builder.addCase(GetPolicyDrivers.fulfilled, (state, { payload }) => {
      if (payload.statusCode === 200) {
        state.policyDrivers =
          payload.data && payload.data.driverDetails
            ? payload.data.driverDetails
            : [];
      }
    });

    builder.addCase(GetInsuranceDocuments.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.insuranceDocuments = payload;
    });
  },
});

export default PolicyDetailsSlice.reducer;
export const {} = PolicyDetailsSlice.actions;
