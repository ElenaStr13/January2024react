import React from 'react';

const Post = ({posts, postId}) => {
    const {userId, id, title, body} = posts
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;