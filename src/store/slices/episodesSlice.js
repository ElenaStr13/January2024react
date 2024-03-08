import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {episodeService} from "../../services";
import {useSearchParams} from "react-router-dom";

const initialState = {
    episodes: [],
    prev: null,
    next: null
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data
        } catch (e) {
            const error = e.response.data;
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload;
                state.episodes = results
                state.prevPage = prev
                state.nextPage = next
            })
})

const {reducer: episodeReducer, actions} = episodesSlice;

const episodeActions = {
    ...actions,
    getAll
}

export {
    episodeReducer,
    episodeActions
}