import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import PageName from "../../../components/PageName";
import ProductForm from "../../../components/products/ProductForm";
import ProductFormSkelaton from "../../../components/products/ProductFormSkelaton";
import { fetchCategoriesAndFlavours } from "../../../store/actions/CategoriesAction";
import axiosInstance from "../../../utils/axios";
import axios from "../../../utils/axios";

const EditProduct = () => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const categories = useSelector((state) => state.categories.list);
  const flavours = useSelector((state) => state.flavours.list);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAndFlavours(true));
  }, []);

  useEffect(() => {
    if (!router.query.slug) return;

    const fetchProduct = () => {
      setIsLoading(true);
      axios
        .get(`/products/${router.query.slug}`)
        .then((res) => {
          setProduct(res.data.product);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    };

    fetchProduct();
  }, [router.query]);

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

      const response = await axiosInstance.put(`/products/${product._id}`, body);
      const data = await response.data;

      toast.success(data.message);
    } catch (error) {
      throw error;
    }
  };

  if (isLoading) return <ProductFormSkelaton />;

  return (
    <div>
      <div className="">
        <PageName name="Edit Product" />
      </div>

      <section className="mt-8 grid w-full">
        <ProductForm categories={categories} flavours={flavours} onSubmit={submitHandler} product={product} edit />
      </section>
    </div>
  );
};

export default EditProduct;

EditProduct.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
