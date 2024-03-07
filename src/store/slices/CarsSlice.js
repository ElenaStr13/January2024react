import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null
};

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setAllCars:(state, actions) => {
            state.cars = actions.payload
        },
        trigger: state => {
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
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