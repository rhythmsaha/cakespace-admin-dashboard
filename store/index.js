import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categories.slice";

const store = configureStore({
    reducer: {
        categories: categoriesSlice.reducer,
    },
});

export default store;
