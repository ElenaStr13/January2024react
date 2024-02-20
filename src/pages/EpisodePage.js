import React, {useEffect} from 'react';

import {Episodes} from "../components/EpisodesContainer";

const EpisodesPage = () => {
   // const {setChapter} = useChapter();

    // useEffect(() => {
    //     setChapter(null)
    // }, [setChapter]);
    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};