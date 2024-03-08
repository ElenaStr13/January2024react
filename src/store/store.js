import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer, episodeReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes: episodeReducer,
        characters: charactersReducer
    }
});

export {
    store
}