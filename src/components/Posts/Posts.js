import {Post} from "../Post/Post.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../../service/axiosService";
import {urls} from "../../constants/urls";
import {postService} from "../../service/postService";
import {PostDetails} from "../PostDetails/PostDetails";
import css from './Posts.module.css'

const Posts = () => {
    // виклик через fetch з useEffect та useState
    // const [posts, setPosts] = useState ([]);
    // useEffect(()=> {
    //     fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setPosts(value));
    //
    // }, []);
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post)
    }

    return (
        <div>
            <div className={css.posts}>
                {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost} />)}
            </div>
             <div>
                {postDetails && <PostDetails postDetails={postDetails}/>}
            </div>
        </div>

    );
};

export {Posts};