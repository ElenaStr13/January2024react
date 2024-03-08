import {useNavigate} from "react-router-dom";

const Character = ({character}) => {
    const {id, name,image, status, gender} = character;

    return (
        <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <img src={image} alt={name}/>
                <div>status: {status}</div>
                <div>gender: {gender}</div>
        </div>
    );
};

export {Character};