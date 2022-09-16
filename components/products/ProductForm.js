import { Button, Input, Option, Select, Switch, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiRupee } from "react-icons/bi";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";
import ImageForm from "./ImageForm";

const ProductForm = ({ categories, flavours = [], isLoading }) => {
    const [selectedCategory, setSelectedCategory] = useState({ subCategories: [] });
    const [selectedSubcategory, setSelectedSubcategory] = useState();
    const [selectedFlavour, setSelectedFlavour] = useState();
    const [images, setImages] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        clearErrors,
        getValues,
        reset,
    } = useForm();

    const submitHandler = async (data) => {
        if (isSubmitting) return;
        if (!selectedCategory._id) return setError("category", { type: "required", message: "Category is required!" });

        console.log(images);
        console.log(data);
        console.log(selectedCategory);
        console.log(selectedSubcategory);
        console.log(selectedFlavour);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8">
                <Card>
                    <div className="space-y-5">
                        <div>
                            <Input
                                label="Product Name"
                                color="green"
                                size="lg"
                                name="name"
                                error={!!errors.name}
                                {...register("name", { required: "Name is required!" })}
                            />

                            {errors.name && (
                                <Typography variant="small" className="text-xs text-red-600 p-1">
                                    {errors?.name?.message}
                                </Typography>
                            )}
                        </div>

                        <div>
                            <Textarea
                                rows={10}
                                variant="outlined"
                                label="Description"
                                color="green"
                                size="lg"
                                name="description"
                                error={!!errors.description}
                                {...register("description", { required: "Description is required!" })}
                            />

                            {errors.description && (
                                <Typography variant="small" className="text-xs text-red-600 px-1">
                                    {errors?.description?.message}
                                </Typography>
                            )}
                        </div>

                        <div>
                            <Typography variant="small" className=" text-gray-700 font-medium p-1">
                                Images
                            </Typography>

                            <ImageForm links={images} setLinks={setImages} />
                        </div>
                    </div>
                </Card>
            </div>

            <div className="lg:col-span-4 space-y-4">
                <Card>
                    <div className="space-y-5">
                        <div>
                            <Input
                                label="No. of stocks"
                                type="number"
                                color="green"
                                size="lg"
                                name="stocks"
                                min={1}
                                defaultValue={1}
                                error={!!errors.stocks}
                                {...register("stocks", { required: "Stocks is required!" })}
                            />

                            {errors.stocks && (
                                <Typography variant="small" className="text-xs text-red-600 p-1">
                                    {errors?.stocks?.message}
                                </Typography>
                            )}
                        </div>

                        <div>
                            <Select
                                label="Category"
                                size="lg"
                                color="green"
                                className=""
                                error={!!errors.category}
                                onChange={(value) => {
                                    clearErrors("category");
                                    setSelectedSubcategory(null);
                                    const category = categories.find((el) => el._id === value);
                                    setSelectedCategory(category);
                                }}
                            >
                                {categories?.map((category) => (
                                    <Option key={category._id} value={category._id}>
                                        {category.name}
                                    </Option>
                                ))}
                            </Select>

                            {errors.category && (
                                <Typography variant="small" className="text-xs text-red-600 p-1">
                                    {errors?.category?.message}
                                </Typography>
                            )}
                        </div>

                        {selectedCategory?.subCategories.length > 0 && (
                            <div>
                                <Select
                                    label="Sub Category (Optional)"
                                    size="lg"
                                    color="green"
                                    onChange={(value) => setSelectedSubcategory(value)}
                                >
                                    {selectedCategory?.subCategories?.map((subCategory) => (
                                        <Option key={subCategory._id} value={subCategory._id}>
                                            {subCategory.name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        )}

                        <div>
                            <Select
                                label="Flavour (Optional)"
                                size="lg"
                                color="green"
                                onChange={(value) => setSelectedFlavour(value)}
                            >
                                {flavours?.map((flavour) => (
                                    <Option key={flavour._id} value={flavour._id}>
                                        {flavour.name}
                                    </Option>
                                ))}
                            </Select>
                        </div>

                        <div>
                            <Input
                                color="green"
                                label="Regular Price"
                                type="number"
                                icon={<BiRupee />}
                                size="lg"
                                name="regularPrice"
                                min={0}
                                error={!!errors.regularPrice}
                                {...register("regularPrice", { required: "Regular Price is required!" })}
                            />

                            {errors.regularPrice && (
                                <Typography variant="small" className="text-xs text-red-600 p-1">
                                    {errors?.regularPrice?.message}
                                </Typography>
                            )}
                        </div>

                        <div>
                            <Input
                                color="green"
                                label="Sell Price"
                                icon={<BiRupee />}
                                size="lg"
                                name="sellPrice"
                                min={0}
                                error={!!errors.sellPrice}
                                {...register("sellPrice", { required: "Sell Price is required!" })}
                            />

                            {errors.sellPrice && (
                                <Typography variant="small" className="text-xs text-red-600 p-1">
                                    {errors?.sellPrice?.message}
                                </Typography>
                            )}
                        </div>
                    </div>
                </Card>

                <div>
                    <Button
                        color="green"
                        type="submit"
                        className="capitalize tracking-wide sm:text-sm"
                        size="md"
                        fullWidth
                    >
                        Create Product
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ProductForm;
