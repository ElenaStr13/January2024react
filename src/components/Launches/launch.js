import css from './Launch.module.css'
const Launch = ({launch}) => {
    const {mission_name, launch_year} = launch;
    return (
        <div className={css.Launch}>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>

        </div>
    );
};

export {Launch};