import {useContext, useState} from "react";

import {Context} from "../hoc";

const useChapterContext = () => {
    useContext(Context)
     //const [chapter, setChapter] = useContext(Context);
    //const [chapter, setChapter] = useState([])

    return {
        // chapter,
        // setChapter

    }
}

export {
    useChapterContext
}