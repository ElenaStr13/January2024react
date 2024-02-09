import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";


const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger}
                     carForUpdate={carForUpdate}
                     trigger={trigger}
                     setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars}
                  setTrigger={setTrigger}
                  setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};