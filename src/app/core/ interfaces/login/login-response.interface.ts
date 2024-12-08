export interface LoginResponse {
  message: string;
  result: boolean;
  data: Data
}

export interface Data {
  emailId: string;
  password: string;
}
