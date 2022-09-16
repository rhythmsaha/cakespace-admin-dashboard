import { IconButton, Input } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Card from "../ui/Card";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const ProductsTable = () => {
    return (
        <Card>
            <div>
                <header className="flex items-center justify-between gap-6">
                    <div className="max-w-xs">
                        <Input size="lg" label="Search" icon={<BiSearch />} />
                    </div>

                    <IconButton className="rounded-full" variant="text" color="gray">
                        <BsFilter className="text-2xl" />
                    </IconButton>
                </header>

                <div>
                    <SimpleBar className="mt-4 overflow-x-auto overflow-y-hidden rounded-md py-4">
                        <table className="table w-full table-auto border-collapse text-center">
                            <thead className="">
                                <tr className="bg-grey-200">
                                    <th className="min-w-[10rem] whitespace-nowrap py-5 px-4 text-left text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                        Product
                                    </th>
                                    <th className="whitespace-nowrap py-5 px-4 text-left text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                        Created At
                                    </th>
                                    <th className="whitespace-nowrap py-5 px-4 text-center text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                        Status
                                    </th>
                                    <th className="whitespace-nowrap py-5 px-4 text-center text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                        Price
                                    </th>

                                    <th className="whitespace-nowrap py-5 px-4 text-center text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base"></th>
                                </tr>
                            </thead>
                        </table>

                        {true && (
                            <div className="flex w-full flex-col items-center justify-center gap-4 p-6 py-10">
                                <img
                                    src="/illustration_empty_content.svg"
                                    alt="empty"
                                    className="w-40 object-contain lg:w-60"
                                />
                                <p className="py-4 text-center font-bold text-gray-500 lg:text-xl">
                                    No Categories Found
                                </p>
                            </div>
                        )}
                    </SimpleBar>
                </div>
            </div>
        </Card>
    );
};
export default ProductsTable;
