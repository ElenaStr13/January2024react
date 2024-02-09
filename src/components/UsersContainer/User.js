const User = ({user}) => {
    const {id, name, username, email, address:{street:str}, phone, website} = user;
    return (
        <div>
            <div>id: {id}</div>
            <span>name: {name},</span>
            <span>username: {username}</span>
            <div>email: {email}</div>
            <div>street: {str}</div>
            <span>phone: {phone},</span>
            <span>website: {website}</span>
             <hr/>
        </div>
    );
};

export {User};