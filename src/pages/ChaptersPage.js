import {useNavigate} from "react-router-dom";

import {Characters} from "../components/CharactersContainer";


const CharactersPage = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            <hr/>
            <Characters/>
        </div>
    );
};

export {CharactersPage};