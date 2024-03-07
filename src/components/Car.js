import {useDispatch} from "react-redux";
import {carsActions} from "../store";
import {carService} from "../services/carService";

const Car = ({car, setCarForUpdate}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const deleteById = async () => {
        await carService.deleteById(id);
        dispatch(carsActions.trigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(deleteById)}>delete</button>
        </div>
    );
};

export {Car};