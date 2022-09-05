import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categories.slice";
import flavoursSlice from "./slice/flavours.slice";

const store = configureStore({
    reducer: {
        categories: categoriesSlice.reducer,
        flavours: flavoursSlice.reducer,
    },
});

export default store;
