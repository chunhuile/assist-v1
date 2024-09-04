export interface userTableDataItem {
  key: string | number;
  name: string;
  age: number;
  address: string;
}
export interface getUserTableParams {
  page?: number;
  pageSize?: number;
}

export interface addressItem {
  id: number;
  label: string;
  value: number;
}
