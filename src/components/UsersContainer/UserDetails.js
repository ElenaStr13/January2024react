import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, address:{street:str}, phone, website} = userDetails;

    const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {str}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={() => navigate('posts')}>post of current user</button>
        </div>
    );
};

export {UserDetails};