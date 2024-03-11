export interface IDashboard {
  PolicyCount: string;
  PolicyCustomerList: IPolicyCustomer[];
  PolicyList: IPolicy[];
}

export interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPolicyCustomer {
  CustomerName: string;
  CustomerId: string;
}

export interface IPolicy {
  CarrierPolicyNo: string;
  CarrierPolicyStatus: string;
  Tenure: string;
  RiskCount: string;
  DuePremium: number;
  LOBCode: string;
  PaymentFrequency: string;
}

export interface IDashboardSlice {
  dashboardData: IDashboard | null;
}

export interface IDashboardResponse {
  data: IDashboard;
  message: string;
  status: number;
}
