export interface ILoginRequestParams {
  customerName: string;
  mobile: string;
}

export interface ILoginResponse {
  data: IUserDetails;
  message: string;
  status: number;
}

export interface IUserDetails {
  customerName: string;
  customerId: string;
}

export interface ILoginSlice {
  isLogin: boolean;
  userDetails: IUserDetails | null;
}
