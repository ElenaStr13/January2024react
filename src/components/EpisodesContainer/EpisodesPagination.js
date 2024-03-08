import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import css from './Episodes.module.css'

const EpisodePagination = () => {
    const {prev, next} = useSelector(state => state.episodes);
    const [, setQuery] = useSearchParams({page:'1'});
    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }

    const nextPage = () => {
        setQuery(next => {
            next.set('page', `${+next.get('page') + 1}`)
            return next
        })
    }

    return (
        <div className={css.pagination}>
            <button  onClick={prevPage}>Prev Page</button>
            <button  onClick={nextPage}>Next Page</button>
        </div>
    );
};

// disabled={!prev}
// disabled={!next}
export {EpisodePagination};