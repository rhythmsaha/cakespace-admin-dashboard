import { createSlice, current } from "@reduxjs/toolkit";

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

        addSubCategory(state, action) {
            const newSubCategory = action.payload;
            const categories = state.list.map((category) => {
                if (category._id === newSubCategory.categoryId) {
                    const oldCategory = category;
                    oldCategory.subCategories.push(newSubCategory);
                    return oldCategory;
                } else {
                    return category;
                }
            });

            state.list = categories;
        },

        updateSubCategory(state, action) {
            const newSubCategory = action.payload;

            state.list.forEach((category) => {
                if (category._id === newSubCategory.categoryId) {
                    const newSubCategories = category.subCategories.map((_subcategory) => {
                        if (_subcategory._id === newSubCategory._id) {
                            return newSubCategory;
                        } else {
                            return _subcategory;
                        }
                    });

                    category.subCategories = newSubCategories;
                } else {
                    return;
                }
            });
        },

        deleteSubCategory(state, action) {
            const deletedSubCategory = action.payload;
            // console.log(deletedSubCategory);
            const updated = state.list.map((category) => {
                if (category._id !== action.payload.categoryId) return category;

                const oldCategory = category;

                const updatedSubCategories = category.subCategories.filter(
                    (subCategory) => subCategory._id !== deletedSubCategory._id
                );

                oldCategory.subCategories = updatedSubCategories;
                return oldCategory;
            });

            // console.log(updated);
            state.list = updated;
        },
    },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice;
