import {useEffect, useState} from "react";
import {Launch} from "./launch";


const Launches = ({post, getCurrentPost}) => {
     const [launches, setLaunches] = useState ([]);
     useEffect(()=> {
        fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => setLaunches(value));

     }, []);
    return (
        <div >
            {launches.map(launch =>
                <Launch key={launch.id} launch={launch}  />)}
        </div>
    );
};

export {Launches};