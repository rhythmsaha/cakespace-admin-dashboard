import { Button, Input, Option, Select, Switch, Textarea } from "@material-tailwind/react";
import { BiRupee } from "react-icons/bi";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";
import ImageForm from "./ImageForm";

const ProductForm = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
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
                            <Select label="Category" size="lg" color="green">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>

                        <div>
                            <Select label="Sub Category (Optional)" size="lg" color="green">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>

                        <div>
                            <Select label="Select Version" size="lg" color="green">
                                <div className="flex items-center justify-center">
                                    <Spinner className="text-green-500 h-4 w-4 animate-spin" />
                                </div>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind HTML</Option>
                            </Select>
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
                    <Button color="green" className="capitalize tracking-wide sm:text-sm" size="md" fullWidth>
                        Create Product
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ProductForm;
