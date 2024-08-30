
export interface userTable {
    key:string | number,
    name:string,
    age:number,
    address:string
}

export interface userTableApi<T = any>{
    data:T,
    message:string,
    status:number
}