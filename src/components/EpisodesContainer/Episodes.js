import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episodes.module.css";
import {usePageQuery} from "../../hooks";

const Episodes = () => {
    const [episodes,setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})
    const {trigger} = usePageQuery();

    useEffect(() => {
        episodeService.getAll(query.get('page'))
            .then(({data}) => {
                setEpisodes(data.results)
                setPrevNext({prev: data.info.prev, next: data.info.next})
            })
    }, [trigger, query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};