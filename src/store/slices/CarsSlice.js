import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],

};

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            const {results} = action.payload;
            state.cars = results

        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}