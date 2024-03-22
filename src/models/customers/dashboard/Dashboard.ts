export interface IDashboard {
  policyCount: string | null;
  policyList: IPolicy[] | null;
}

export interface IPolicy {
  policyRef: string;
  lineCode: string;
  carrierCode: string;
  carrierPolicyNo: string;
  carrierPolicyStatus: string;
  carrierQuoteNumber: string;
  tenure: string;
  riskCount: number;
  basePrimium: string;
  duePremium: string;
  productName: string;
  effectiveDate: string;
  expiryDate: string;
}

export interface IDashboardSlice {
  dashboardData: IDashboard | null;
}

export interface IDashboardRequestParams {
  customerId: string;
}

export interface IDashboardResponse {
  data: IDashboard | null;
  message: string;
  statusCode: number;
}
