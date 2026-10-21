import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchCache",
    initialState: {
    },
    reducers: {
        cacheResults(state, action) {
            // state[action.payload[0]] = action.payload[1]
            const { query, result } = action.payload


            state[query] = result
        },

        // getSearchCache(state, action) {
        //     // check if cache contains the search result
        //     // if yes then return cached result
        //     // if no - return null 

        //     // check
        //     if (Object.hasOwn(state, action.payload)) {
        //         return state[action.payload]
        //     }
        //     return null

        // }
    }
})

export const { cacheResults } = searchSlice.actions

export default searchSlice.reducer


