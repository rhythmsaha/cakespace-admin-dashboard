import axios from "../../utils/axios";
import { categoriesActions } from "../slice/categories.slice";
import { flavoursActions } from "../slice/flavours.slice";

export const fetchCategoriesAndFlavours = () => {
    return async (dispatch) => {
        Promise.all([
            await axios
                .get("/categories")
                .then((res) => {
                    dispatch(categoriesActions.setCategories(res.data));
                })
                .catch((err) => {
                    dispatch(categoriesActions.setError(err.message));
                }),
            await axios
                .get("/flavours")
                .then((res) => setFlavours(res.data))
                .catch((err) => {
                    dispatch(flavoursActions.setError(err.message));
                }),
        ]).catch((err) => console.log(err.message));
    };
};
