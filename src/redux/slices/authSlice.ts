import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IAuth} from "../../interfaces";
import {authService} from "../../services";

interface IState {
    registerError:string
}

const initialState: IState = {
       registerError:null
}

const register = createAsyncThunk<void, {user:IAuth}>( //out - void(nobody), input-user
"authSlice/register",
    async ({user}, {rejectWithValue})=> {
    try {
        await authService.register(user)
    }catch (e) {
        const err = e as AxiosError
        return rejectWithValue(err.response.data)
    }
    }
)
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addMatcher(isRejected(register), state =>{
                state.registerError = 'Username already exist'
            })
            .addMatcher(isFulfilled(register), state => {
                state.registerError = null
            })
})
const {reducer:authReducer, actions} = authSlice;

const authActions = {
    ...actions,
    register
}
export {
    authReducer,
    authActions
};