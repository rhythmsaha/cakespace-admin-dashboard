import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";
import ProductForm from "./ProductForm";

const AddNewProduct = () => {
    const categories = useSelector((state) => state.categories.list);
    const flavours = useSelector((state) => state.flavours.list);
    const categoriesError = useSelector((state) => state.categories.error);
    const flavoursError = useSelector((state) => state.flavours.error);

    const submitHandler = async ({
        name,
        description,
        price,
        images,
        stocks,
        category,
        subCategories,
        flavours,
        weight,
    }) => {
        toast.dismiss();

        try {
            const body = { name, description, price, images, stocks };

            if (images.length > 0) body.images = images;
            if (category) body.category = category;
            if (subCategories) body.subCategories = subCategories;
            if (flavours) body.flavours = flavours;
            if (weight) body.weight = weight;

            const response = await axios.post(`/products`, body);
            const data = await response.data;

            console.log(data);
            toast.success(data.message);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div>
            <ProductForm
                categories={categories}
                flavours={flavours}
                categoriesError={categoriesError}
                flavoursError={flavoursError}
                onSubmit={submitHandler}
            />
        </div>
    );
};
export default AddNewProduct;
