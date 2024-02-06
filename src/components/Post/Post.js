import css from './Post.module.css'
const Post = ({post, getCurrentPost}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={css.post}>
            <h3>Post {title}</h3>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            {/*<div>{body}</div>*/}
            <button onClick={()=>getCurrentPost(post)} className={css.btn}>Details</button>
        </div>
    );
};

export {Post};