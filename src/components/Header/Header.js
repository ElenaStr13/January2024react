import {useChapterContext} from "../../hooks";
import css from "./Header.module.css";


const Header = () => {
    const {chapter} = useChapterContext();
    return (
        <div className={css.Header}>
            {chapter?<p>{chapter}</p>:<h1>Rick and Morty</h1>}
        </div>
    );
};

export {Header};