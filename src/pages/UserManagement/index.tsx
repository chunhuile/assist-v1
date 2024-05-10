import React from "react";
import "../../styles/userManagement.scss"

import UserTable from "./compontents/userTable";
import UserFilter from "./compontents/UserFilter";
import { dateSelect } from "../../mockjs/user"
interface dateSelect {
    dateSelectItem:[]
}
interface dateSelectItem {
    label:string;
    id:number,
    value:number
}


const UserManagement: React.FC = () => (
    <div className="UserManagement scope-vsc-initialized" >
        <div className="UserManagement__filter">
            <UserFilter options = { dateSelect } />
        </div>
    <UserTable />
    </div>
);
export default UserManagement