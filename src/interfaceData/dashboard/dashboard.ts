export interface userTableItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export interface userEchartsItem {
  key: number;
  month: number;
  userNumber: number;
}
export interface userInfo {
  userName: string;
  age: string | number;
  email: string;
  address: string;
  phoneNumber: string | number;
  lastLoginTime: string;
  currentLoginTime: string;
  limit: number | string;
  paymentOrder: string | number;
  favoriteOrder: string | number;
  paymentOrders: string | number;
  favoriteOrders: string | number;
}

export interface loginData {
  token: string | number;
}
