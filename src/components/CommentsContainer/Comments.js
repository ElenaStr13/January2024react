import React, {useEffect, useState} from 'react';
import {commentService} from "../../service/commentService";
import {Comment} from "./Comment";


const Comments = ({postId}) => {
    const [comments, setComments]= useState();
    useEffect(() => {
        commentService.getByPostId(postId).then(({data}) => setComments(data))
    }, [postId]);
    return (
        <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};