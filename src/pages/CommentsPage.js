import React from 'react';
import {Comments} from '../components/CommentsContainer/Comments'
import {Outlet} from "react-router-dom";
import css from "../components/CommentsContainer/Comments.module.css"

const CommentsPage = () => {

    return (
        <div className={css.Comments}>
            <Comments/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};