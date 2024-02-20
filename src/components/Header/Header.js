import {useChapterContext} from "../../hooks";
import css from "./Header.module.css";


const Header = () => {
    const {chapter} = useChapterContext();
    return (
        <div className={css.Header}>
            {
                chapter?
                    <p>{chapter}</p>
                    :
                    <p>Rick and Morty</p>
            }
        </div>
    );
};

export {Header};