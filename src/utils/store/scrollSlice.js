import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: "scroll",
    initialState: {
        scrollresults: []
    },
    reducers: {
        infinitescroll: (state, action) => {
            state.scrollresults.push(...action.payload)
        }
    }
})
export const { infinitescroll } = scrollSlice.actions
export default scrollSlice.reducer