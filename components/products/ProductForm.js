import { Button, Input, Option, Select, Switch, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiRupee } from "react-icons/bi";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";
import ImageForm from "./ImageForm";

const ProductForm = ({ categories, flavours, isLoading }) => {
    const [selectedCategory, setSelectedCategory] = useState({ subCategories: [] });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        getValues,
        reset,
    } = useForm();

    const submitHandler = async (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8">
                <Card>
                    <div className="space-y-3">
                        <div>
                            <Input label="Product Name" color="green" size="lg" />
                        </div>

                        <div>
                            <Textarea rows={10} variant="outlined" label="Description" color="green" size="lg" />
                        </div>

                        <div>
                            <ImageForm />
                        </div>
                    </div>
                </Card>
            </div>

            <div className="lg:col-span-4 space-y-4">
                <Card>
                    <div className="space-y-5">
                        <div>
                            <Input label="No. of stocks" type="number" color="green" size="lg" />
                        </div>

                        <div>
                            <Select
                                label="Category"
                                size="lg"
                                color="green"
                                onChange={(value) => {
                                    const category = categories.find((el) => el.slug === value);
                                    setSelectedCategory(category);
                                }}
                            >
                                {categories?.map((category) => (
                                    <Option key={category._id} value={category.slug}>
                                        {category.name}
                                    </Option>
                                ))}
                            </Select>
                        </div>

                        <div>
                            <Select label="Sub Category (Optional)" size="lg" color="green">
                                {selectedCategory?.subCategories?.map((category) => (
                                    <Option key={category._id} value={category.slug}>
                                        {category.name}
                                    </Option>
                                ))}
                            </Select>
                        </div>

                        <div>
                            <Select label="Flavour" size="lg" color="green">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind HTML</Option>
                            </Select>
                        </div>

                        <div className="px-2">
                            <Switch color="green" id="" label="Eggless" />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="space-y-4">
                        <div>
                            <Input color="green" label="Regular Price" type="number" icon={<BiRupee />} size="lg" />
                        </div>

                        <div>
                            <Input color="green" label="Sell Price" icon={<BiRupee />} size="lg" />
                        </div>

                        <div className="px-2">
                            <Switch color="green" id="auto-update" label="Price includes taxes" />
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
