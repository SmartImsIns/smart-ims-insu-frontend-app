import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Apis/AxiosInterceptor";
import {
  API_GET_POLICY_DETAILS,
  API_GET_POLICY_DRIVERS,
  API_GET_POLICY_VEHICLES,
} from "../../Apis/ApiEndPoints";
import { CustomAction } from "../../store/customAction";
import {
  IGetInsuranceDocumentsRequestParams,
  IGetPolicyDetailsRequestParams,
  IGetPolicyDetailsResponse,
  IGetPolicyDriversRequestParams,
  IGetPolicyDriversResponse,
  IGetPolicyVehiclesRequestParams,
  IGetPolicyVehiclesResponse,
} from "../../models/customers/policyDetails/PolicyDetails";
import axios from "axios";

export const GetPolicyDetails = createAsyncThunk(
  "policyDetails/GetPolicyDetails",
  async (requestParams: IGetPolicyDetailsRequestParams, { dispatch }) => {
    const response: IGetPolicyDetailsResponse = await CustomAction(
      Api.post(API_GET_POLICY_DETAILS, requestParams),
      dispatch,
      "policyDetails/GetPolicyDetails"
    );
    return response;
  }
);

export const GetPolicyVehicles = createAsyncThunk(
  "policyDetails/GetPolicyVehicles",
  async (requestParams: IGetPolicyVehiclesRequestParams, { dispatch }) => {
    const response: IGetPolicyVehiclesResponse = await CustomAction(
      Api.post(API_GET_POLICY_VEHICLES, requestParams),
      dispatch,
      "policyDetails/GetPolicyVehicles"
    );
    return response;
  }
);

export const GetPolicyDrivers = createAsyncThunk(
  "policyDetails/GetPolicyDrivers",
  async (requestParams: IGetPolicyDriversRequestParams, { dispatch }) => {
    const response: IGetPolicyDriversResponse = await CustomAction(
      Api.post(API_GET_POLICY_DRIVERS, requestParams),
      dispatch,
      "policyDetails/GetPolicyDrivers"
    );
    return response;
  }
);

export const GetInsuranceDocuments = createAsyncThunk(
  "policyDetails/GetInsuranceDocuments",
  async (requestParams: IGetInsuranceDocumentsRequestParams, { dispatch }) => {
    const response = await CustomAction(
      axios.post(
        "https://sandbox-am-gw.insuremo.com/smartims/1.0/documents",
        requestParams
      ),
      dispatch,
      "policyDetails/GetInsuranceDocuments"
    );
    return response;
  }
);
