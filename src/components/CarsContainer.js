import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carsActions} from "../store";

const CarsContainer = () => {
    const {cars} = useSelector(state => state.cars);
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setResponse(data)))
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsContainer};