import {useContext} from "react";

import {Context} from "../hoc";

const useChapterContext = () => {

    const [chapter, setChapter] = useContext(Context);

    return {
        chapter,
        setChapter
    }
}

export {
    useChapterContext
}