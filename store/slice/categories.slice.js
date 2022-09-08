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

        updateCategory(state, action) {
            const category = action.payload;
            const categories = state.list.map((cat) => {
                if (cat._id === category._id) {
                    return category;
                } else {
                    return cat;
                }
            });

            state.list = categories;
        },

        deleteCategory(state, action) {
            const deletedSlug = action.payload;
            const filteredArray = state.list.filter((cat) => {
                return cat.slug !== deletedSlug;
            });

            state.list = filteredArray;
        },

        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
