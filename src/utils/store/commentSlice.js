import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: "livecomment",
    initialState: {
        mes: []
    },
    reducers: {
        comment: (state, action) => {
            state.mes.splice(10, 1)
            state.mes.unshift(action.payload)
        }
    }
})
export const { comment } = commentSlice.actions
export default commentSlice.reducer

