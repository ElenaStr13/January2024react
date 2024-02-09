const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <div>id: {id},</div>
            <span>postId: {postId}</span>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
             <hr/>
        </div>
    );
};

export {Comment};