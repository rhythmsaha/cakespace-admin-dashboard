import { Button, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import Card from "../ui/Card";
import ImageForm from "./ImageForm";
import dynamic from "next/dynamic";
import Select from "react-tailwindcss-select";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import SelectCategory from "./SelectCategory";

const ProductForm = ({ categories, flavours = [], onSubmit, product, edit }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubcategories, setSelectedSubcategories] = useState();
  const [selectedFlavours, setSelectedFlavours] = useState();

  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");

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
        description: description,
        category: selectedCategory,
        subCategories: selectedSubcategories,
        flavours: selectedFlavours,
      });
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

  useEffect(() => {
    if (product?.images) {
      setImages(product.images);
    }
    if (product?.description) {
      setDescription(product.description);
    }

    if (product?.category) {
      const category = categories.find((cat) => cat._id === product.category._id);
      setSelectedCategory(category);
    }

    if (product?.subCategories) {
      const _subCategories = product.subCategories.map((_subCategory) => ({
        value: _subCategory._id,
        label: _subCategory.name,
      }));

      setSelectedSubcategories(_subCategories);
    }

    if (product?.flavours) {
      const _flavours = product.flavours.map((_flavour) => ({ value: _flavour._id, label: _flavour.name }));
      setSelectedFlavours(_flavours);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <Card>
          <div className="space-y-5">
            <div>
              <Input
                label="Product Name"
                color="green"
                size="lg"
                name="name"
                defaultValue={product?.name}
                error={!!errors.name}
                {...register("name", { required: "Name is required!" })}
              />

              {errors.name && (
                <Typography variant="small" className="p-1 text-xs text-red-600">
                  {errors?.name?.message}
                </Typography>
              )}
            </div>

            <div>
              <div className="h-80 overflow-hidden py-2">
                <ReactQuill className="h-full max-h-60" theme="snow" value={description} onChange={setDescription} />
              </div>

              {errors.description && (
                <Typography variant="small" className="px-1 text-xs text-red-600">
                  {errors?.description?.message}
                </Typography>
              )}
            </div>

            <div>
              <Typography variant="small" className=" p-1 font-medium text-gray-700">
                Images
              </Typography>

              <ImageForm links={images} setLinks={setImages} />
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4 lg:col-span-4">
        <Card>
          <div className="space-y-5">
            <div className="space-y-2">
              <div>
                <SelectCategory
                  items={categories}
                  setSelected={setSelectedCategory}
                  selected={selectedCategory}
                  label="Category"
                />
              </div>
              {selectedCategory?.subCategories.length > 0 && (
                <div>
                  <label className="text-xs font-medium text-gray-500">Subcategories</label>
                  <Select
                    placeholder="Select Subcategories"
                    isSearchable={false}
                    value={selectedSubcategories}
                    isMultiple={true}
                    onChange={(value) => setSelectedSubcategories(value)}
                    options={selectedCategory.subCategories.map((subcategory) => ({
                      value: subcategory._id,
                      label: subcategory.name,
                    }))}
                  />
                </div>
              )}
              <div>
                <label className="text-xs font-medium text-gray-500">Flavours</label>
                <Select
                  placeholder="Select Flavours"
                  isSearchable={false}
                  value={selectedFlavours}
                  isMultiple={true}
                  onChange={(value) => setSelectedFlavours(value)}
                  options={flavours.map((flavour) => ({
                    value: flavour._id,
                    label: flavour.name,
                  }))}
                />
              </div>
            </div>

            <div>
              <Input
                label="No. of stocks"
                type="number"
                color="green"
                size="lg"
                name="stocks"
                min={0}
                defaultValue={product?.stocks || 1}
                error={!!errors.stocks}
                {...register("stocks", { required: "Stocks is required!" })}
              />

              {errors.stocks && (
                <Typography variant="small" className="p-1 text-xs text-red-600">
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
                defaultValue={product?.weight}
                error={!!errors.weight}
                {...register("weight")}
              />

              {errors.weight && (
                <Typography variant="small" className="p-1 text-xs text-red-600">
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
                defaultValue={product?.price}
                error={!!errors.price}
                {...register("price", { required: "Price is required!" })}
              />

              {errors.price && (
                <Typography variant="small" className="p-1 text-xs text-red-600">
                  {errors?.price?.message}
                </Typography>
              )}
            </div>
          </div>
        </Card>

        <div className="px-1">
          <Button color="green" type="submit" className="capitalize tracking-wide sm:text-sm" size="md" fullWidth>
            {edit ? "Update" : "Create Product"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
