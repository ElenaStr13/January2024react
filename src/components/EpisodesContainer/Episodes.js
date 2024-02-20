import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episodes.module.css";



const Episodes = () => {
    const [episodes,setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    //const [prevNext, setPrevNext] = useState({prev: null, next: null})
    //const {trigger} = useChapterContext();

    useEffect(() => {
        episodeService.getAll(query.get('page'))
            .then(({data: {info: {prev, next}, results}}) => setEpisodes({prev, next, results}))
    }, [query.get('page')]);

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>

            <button disabled={!episodes.prev} onClick={prevHandler}>prev</button>
            <button disabled={!episodes.next} onClick={nextHandler}>next</button>
        </div>
    );
};

export {Episodes};