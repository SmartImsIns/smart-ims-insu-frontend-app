export interface ILoginRequestParams {
  customerName: string;
  mobile: string;
}

export interface ILoginResponse {
  data: IUserDetails | null;
  message: string;
  statusCode: number;
}

export interface IUserDetails {
  customerName: string;
  customerId: string;
}

export interface ILoginSlice {
  isLogin: boolean;
  userDetails: IUserDetails | null;
}
