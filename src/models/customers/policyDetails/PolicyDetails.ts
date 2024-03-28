export interface IPolicyDetailsSlice {
  policyDetails: IPolicyDetails | null;
  policyVehicles: IPolicyVehicle[];
  policyDrivers: IPolicyDriver[];
  insuranceDocuments: IInsuranceDocument[];
}

export interface IPolicyDetails {}

export interface IGetPolicyDetailsRequestParams {
  policyRef: string;
}

export interface IGetPolicyDetailsResponse {
  statusCode: number;
  data: {};
  message: string;
}

export interface IPolicyVehicle {
  vehIdentificationNumber: string;
  manufacturer: string;
  model: string;
  modelYr: string;
  status: string;
  typeCd: string;
}

export interface IPolicyVehicles {
  vehicleDetails: IPolicyVehicle[];
}

export interface IGetPolicyVehiclesRequestParams {
  policyRef: string;
}

export interface IGetPolicyVehiclesResponse {
  statusCode: number;
  data: IPolicyVehicles | null;
  message: string;
}

export interface IPolicyDriver {
  givenName: string;
  surname: string;
  licenseNumber: string;
  driverStatusCd: string;
  genderCd: string;
  birthDt: string;
}

export interface IPolicyDrivers {
  driverDetails: IPolicyDriver[];
}

export interface IGetPolicyDriversRequestParams {
  policyRef: string;
}

export interface IGetPolicyDriversResponse {
  statusCode: number;
  data: IPolicyDrivers | null;
  message: string;
}

export interface IInsuranceDocument {}

export interface IInsuranceDocuments {
  insuranceDocuments: IInsuranceDocument[];
}

export interface IGetInsuranceDocumentsRequestParams {
  policyId: string;
}

export interface BreadCrumbProps {
  breadCrumbText: string;
}