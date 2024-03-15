export interface IDashboard {
  policyCount: string;
  policyList: IPolicy[];
}

export interface IPolicyCustomer {
  CustomerName: string;
  CustomerId: string;
}

export interface IPolicy {
  carrierPolicyNo: string;
  carrierPolicyStatus: string;
  duePremium: number;
  policyRef: string;
  productName: string;
  riskCount: number;
  tenure: string;
  LOBCode?: string | null;
}

export interface IDashboardSlice {
  dashboardData: IDashboard | null;
}

export interface IDashboardRequestParams {
  customerId: string | null;
}

export interface IDashboardResponse {
  data: IDashboard;
  message: string;
  statusCode: number;
}
