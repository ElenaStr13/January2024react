import {configureStore} from "@reduxjs/toolkit";
import {loadingReducer} from "./slices/loadingSlice";
import {authReducer} from "./slices";

const store = configureStore({
    reducer:{
        loadingReducer,
        auth: authReducer
    }
});

export {store};