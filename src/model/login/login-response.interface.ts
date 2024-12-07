export interface LoginResponseInterface {
  message: string;
  result: boolean;
  data: DataInterface
}

export interface DataInterface {
  emailId: string;
  password: string;
}
