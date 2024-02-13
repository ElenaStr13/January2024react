import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment";
import {commentService} from "../../services/commentService";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};