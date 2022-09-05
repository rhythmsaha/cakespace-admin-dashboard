import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    error: "",
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories(state, action) {
            state.list = action.payload;
        },

        addCategory(state, action) {
            state.list.push(action.payload);
        },

        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
