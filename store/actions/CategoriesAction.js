import axios from "../../utils/axios";
import { categoriesActions } from "../slice/categories.slice";
import { flavoursActions } from "../slice/flavours.slice";

export const fetchCategoriesAndFlavours = (getSubcategories) => {
    return async (dispatch) => {
        await Promise.all([
            axios
                .get(`/categories?${getSubcategories && "getSubcategories=true"}`)
                .then((res) => {
                    dispatch(categoriesActions.setCategories(res.data));
                })
                .catch((err) => {
                    dispatch(categoriesActions.setError(err.message));
                }),
            axios
                .get("/flavours")
                .then((res) => {
                    dispatch(flavoursActions.setFlavours(res.data));
                })
                .catch((err) => {
                    dispatch(flavoursActions.setError(err.message));
                }),
        ]).catch((err) => console.log(err.message));
    };
};
