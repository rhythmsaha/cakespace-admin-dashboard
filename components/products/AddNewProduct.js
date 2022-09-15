import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAndFlavours } from "../../store/actions/CategoriesAction";
import ProductForm from "./ProductForm";

const AddNewProduct = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const fetchdata = useCallback(async () => {
        await dispatch(fetchCategoriesAndFlavours(true));
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        fetchdata();
    }, [fetchdata]);

    const categories = useSelector((state) => state.categories.list);
    const flavours = useSelector((state) => state.flavours.list);

    const categoriesError = useSelector((state) => state.categories.error);
    const flavoursError = useSelector((state) => state.flavours.error);

    return (
        <div>
            <ProductForm
                categories={categories}
                flavours={flavours}
                isLoading={isLoading}
                categoriesError={categoriesError}
                flavoursError={flavoursError}
            />
        </div>
    );
};
export default AddNewProduct;
