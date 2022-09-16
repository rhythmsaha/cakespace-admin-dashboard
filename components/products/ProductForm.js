import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import Card from "../ui/Card";
import ImageForm from "./ImageForm";

const ProductForm = ({ categories, flavours = [], onSubmit, existingImages = [] }) => {
    const [selectedCategory, setSelectedCategory] = useState({ subCategories: [] });
    const [selectedSubcategory, setSelectedSubcategory] = useState();
    const [selectedFlavour, setSelectedFlavour] = useState();
    const [images, setImages] = useState(existingImages);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        clearErrors,
    } = useForm();

    const submitHandler = async (data) => {
        if (isSubmitting) return;
        try {
            await onSubmit({
                ...data,
                images,
                category: selectedCategory?._id,
                subCategory: selectedSubcategory,
                flavour: selectedFlavour,
            });

            router.push("/products");
        } catch (error) {
            if (error?.fields && error.fields.length > 0) {
                error.fields.forEach((field) => {
                    setError(field.path, { type: field.type, message: field.message });
                });
            } else {
                toast.error(error?.message || error || "Something went wrong!");
            }
        }
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
                            <Input
                                color="green"
                                label="Weight (grams)"
                                type="number"
                                size="lg"
                                name="weight"
                                min={1}
                                error={!!errors.weight}
                                {...register("weight")}
                            />

                            {errors.weight && (
                                <Typography variant="small" className="text-xs text-red-600 p-1">
                                    {errors?.weight?.message}
                                </Typography>
                            )}
                        </div>

                        <div>
                            <Input
                                color="green"
                                label="Price"
                                type="number"
                                icon={<BiRupee />}
                                size="lg"
                                name="price"
                                min={0}
                                error={!!errors.price}
                                {...register("price", { required: "Price is required!" })}
                            />

                            {errors.price && (
                                <Typography variant="small" className="text-xs text-red-600 p-1">
                                    {errors?.price?.message}
                                </Typography>
                            )}
                        </div>
                    </div>
                </Card>

                <div className="px-1">
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
