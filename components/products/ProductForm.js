import Card from "../ui/Card";
import CheckBoxInput from "../ui/CheckBoxInput";
import Input from "../ui/Input";

const ProductForm = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8">
                <Card>
                    <Input placeholder="Product Name" />
                    {/* <div className="mt-5">
                        <label htmlFor="description">Description</label>
                        <textarea className="block p-2.5 h-60 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div></div> */}
                </Card>
            </div>

            <div className="lg:col-span-4 space-y-4">
                <Card>
                    <div className="space-y-4">
                        <Input placeholder="Category" />
                        <Input placeholder="Subcategory" />
                        <Input placeholder="Flavours" />
                        <Input placeholder="Number of stocks" />
                    </div>
                </Card>

                <Card>
                    <div className="space-y-4">
                        <Input placeholder="Category" />
                        <CheckBoxInput label="Price includes taxes" />
                    </div>
                </Card>
            </div>
        </div>
    );
};
export default ProductForm;
