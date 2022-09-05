import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    error: "",
};

const flavoursSlice = createSlice({
    name: "flavours",
    initialState,
    reducers: {
        setFlavours(state, action) {
            state.list = action.payload;
        },

        addFlavour(state, action) {
            state.list.push(action.payload);
        },

        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const flavoursActions = flavoursSlice.actions;
export default flavoursSlice;
