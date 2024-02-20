import {useNavigate} from "react-router-dom";

import css from "./Episode.module.css";
import {useChapterContext} from "../../hooks";
import {CharactersPage} from "../../pages/ChaptersPage";


const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;

    const navigate = useNavigate();
    const {setChapter} = useChapterContext();
    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
         //setChapter(character)
         navigate(`/characters/${ids}`)

    }
   return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};