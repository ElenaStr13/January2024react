import React from 'react';
import {useNavigate} from "react-router-dom";

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <hr/>
        </div>
    );
};

export {Album};