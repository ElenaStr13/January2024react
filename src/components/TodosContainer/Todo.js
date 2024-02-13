import React from 'react';
import {useNavigate} from "react-router-dom";

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
            <hr/>
        </div>
    );
};

export {Todo};