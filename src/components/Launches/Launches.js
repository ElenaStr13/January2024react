import {useEffect, useState} from "react";
import {Launch} from "./Launch";
import {launchService} from "../../service/launchService";


const Launches = ({post, getCurrentPost}) => {
     const [launches, setLaunches] = useState ([]);

    useEffect(() => {
        launchService.getAll().then(({data}) => {
            const filtered = data.filter(item=>item.launch_year!=='2020');
            setLaunches(filtered)
        })
    }, []);
    return (
        <div >
            {launches.map(launch =>
                <Launch key={launch.launch_date_unix} launch={launch}  />)}
        </div>
    );
};

export {Launches};