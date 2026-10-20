import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpenSidebar: true
    },
    reducers: {
        handleSidebar: function (state, action) {
            state.isOpenSidebar = !(state.isOpenSidebar)
        }
    }
})


export const { handleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer