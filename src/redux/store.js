import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice"
import searchCacheReducer from "./searchSlice"

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        searchCache: searchCacheReducer
    }
})


export default store