import {useEffect, useState} from "react";

import {Comment} from "./Comment";
import {commentService} from "../../service";


const Comments = ({postId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getByPostId(postId).then(({data}) => setComments(data))
    }, [postId]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};