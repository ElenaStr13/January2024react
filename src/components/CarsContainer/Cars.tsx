import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "./Car";
import {useEffect} from "react";
import {carActions} from "../../redux/slices/carsSlice";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            <h2>Cars</h2>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};