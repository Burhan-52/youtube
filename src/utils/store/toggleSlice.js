import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        isopen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isopen = !state.isopen
        },
        closeMenu: (state) => {
            state.isopen = false
        }
    }
})

export const { toggleMenu, closeMenu } = appSlice.actions
export default appSlice.reducer