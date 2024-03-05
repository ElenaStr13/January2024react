import {configureStore} from "@reduxjs/toolkit";

import {carsReducer} from "./slices/CarsSlice";



const store = configureStore({
    reducer: {
        characters: carsReducer
    }
});

export {
    store
}