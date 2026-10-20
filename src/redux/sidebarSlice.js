import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isOpenSidebar: true
    },
    reducers: {
        toggleSidebar: function (state, action) {
            state.isOpenSidebar = !(state.isOpenSidebar)
        },
        closeSidebar: function (state, action) {
            state.isOpenSidebar = false
        }
    }
})


export const { toggleSidebar, closeSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer