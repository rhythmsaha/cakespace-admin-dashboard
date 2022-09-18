import { useState } from "react";
import { IconButton, Input } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Card from "../ui/Card";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const ProductsTable = ({ products = [] }) => {
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState("asc");
    const [selected, setSelected] = useState([]);
    const [filterName, setFilterName] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderBy, setOrderBy] = useState("createdAt");
    const [productList, setProductList] = useState(products);

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByName = (filterName) => {
        setFilterName(filterName);
    };

    const handleDeleteProduct = (productId) => {
        const deleteProduct = productList.filter((product) => product.id !== productId);
        setSelected([]);
        setProductList(deleteProduct);
    };

    return (
        <Card>
            <div className="select-none">
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
                                        <div
                                            className="flex cursor-pointer items-center gap-2"
                                            onClick={() => {
                                                setOrderBy("product");
                                                if (order === "asc") {
                                                    setOrder("desc");
                                                } else {
                                                    setOrder("asc");
                                                }
                                            }}
                                        >
                                            <span>Product</span>
                                            {orderBy === "product" &&
                                                (order === "asc" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />)}
                                        </div>
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
