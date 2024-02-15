import {Outlet, useLoaderData, useLocation, useParams} from "react-router-dom";
import {useState} from "react";

import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id} = useParams();
    const {state} = useLocation();
    const {data} = useLoaderData();

    return (
        <div>
            <Outlet/>
            <hr/>
            <UserDetails userDetails={data}/>
        </div>
    );
};

export {UserDetailsPage};