import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "./Car";
import {useEffect, useState} from "react";
import {carActions} from "../../redux/slices/carsSlice";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = useState<string>(null);

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            <h2>Cars</h2>
            {cars.map(car => <Car key={car.id} car={car} setExpanded={setExpanded} expanded={expanded}/>)}
        </div>
    );
};

export {Cars};