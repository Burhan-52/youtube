import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";
import scrollSlice from "./scrollSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
    reducer: {
        app: toggleSlice,
        search: searchSlice,
        scroll: scrollSlice,
        livecomment: commentSlice
    }
})

export default store;