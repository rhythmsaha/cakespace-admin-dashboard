import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    error: null,
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

        updateFlavour(state, action) {
            const flavour = action.payload;
            const flavours = state.list.map((flv) => {
                if (flv._id === flavour._id) {
                    return flavour;
                } else {
                    return flv;
                }
            });

            state.list = flavours;
        },

        deleteFlavour(state, action) {
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

export const flavoursActions = flavoursSlice.actions;
export default flavoursSlice;
