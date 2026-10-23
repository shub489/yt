import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"
import searchCacheReducer from "./searchSlice"
import chatSliceReducer from "./chatSlice"

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        searchCache: searchCacheReducer,
        chat: chatSliceReducer
    }
})


export default store