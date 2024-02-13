import {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postsService} from "../services/postsService";
import {Post} from "../components/PostsContainer/Post"

const PostsPage = () => {
    const [post, setPost] = useState(null);
    const {state: {postId}} = useLocation();

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export default PostsPage;