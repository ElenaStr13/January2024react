import {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {Episode} from "./Episode";
import css from "./Episodes.module.css";
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../store";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query, ] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {
        dispatch(episodeActions.getAll({page}));
    }, [page]);

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
        </div>
    );
};

export {Episodes};