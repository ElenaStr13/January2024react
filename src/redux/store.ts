import {configureStore} from "@reduxjs/toolkit";
import {loadingReducer} from "./slices/loadingSlice";
import {authReducer} from "./slices";
import {carReducer} from "./slices/carsSlice";

const store = configureStore({
    reducer:{
        loadingReducer,
        auth: authReducer,
        cars: carReducer
    }
});

export {store};