import {useLoaderData, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../service/postService";
import {PostDetails} from "../components/PostContainer/PostDetails";

const PostDetailsPage = () => {
    // const [postDetails, setPostDetails] = useState(null)
    // const {id} = useParams();
    // const {state} = useLocation();
    const {data} = useLoaderData();

    // useEffect(() => {
    //     if (state?.post) {
    //         setPostDetails(state.post)
    //     } else {
    //         postService.getById(id).then(({data}) => setPostDetails(data))
    //     }
    // }, [id, state]);

    return (
        <div>
            {/*{postDetails && <PostDetails postDetails={postDetails}/>}*/}
            <PostDetails post={data}/>
        </div>
    );
};

export {PostDetailsPage};