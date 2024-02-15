import {Users} from "../components/UsersContainer/Users";
import {Outlet, useLoaderData} from "react-router-dom";

const UsersPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
           <h2>Users</h2>
            <Outlet/>
            <hr/>
            <Users users={data}/>
        </div>
    );
};

export {UsersPage};