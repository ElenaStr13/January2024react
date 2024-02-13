import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService";
import Post from "./Post";
import {useLocation, useParams} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([])

    const {id} = useParams();
    const {state: {postId}} = useLocation();

    useEffect(() => {
        postsService.getById(id).then(({data}) => setPosts(data))
    }, []);
    return (
        <div>
            {/*{posts.map(post=><Post key={post.id} post={post}/>)}*/}
            <Post key={posts.id} posts={posts} postId={postId}/>
        </div>
    );
};

export default Posts;