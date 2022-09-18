import { useState } from "react";
import {
    Button,
    IconButton,
    Input,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import Card from "../ui/Card";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Link from "../ui/Link";
import Image from "next/future/image";
import { HiChevronLeft, HiChevronRight, HiDotsVertical } from "react-icons/hi";
import { FiDelete, FiEdit } from "react-icons/fi";

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
                        <table className="table w-full table-auto whitespace-nowrap">
                            <thead>
                                <tr className="bg-grey-200">
                                    <th className="p-4 text-left text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                                        Product
                                    </th>
                                    <th className="p-4 text-left text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base ">
                                        Created At
                                    </th>
                                    <th className="p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base ">
                                        Status
                                    </th>
                                    <th className="p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base ">
                                        Price
                                    </th>
                                    <th className="w-28 p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base"></th>
                                </tr>
                            </thead>

                            <tbody>
                                <ProductRow />
                                <ProductRow />
                                <ProductRow />
                                <ProductRow />
                                <ProductRow />
                            </tbody>
                        </table>

                        {/* {true && (
                            <div className="flex w-full flex-col items-center justify-center gap-4 p-6 py-10">
                                <img
                                    src="/illustration_empty_content.svg"
                                    alt="empty"
                                    className="w-40 object-contain lg:w-60"
                                />
                                <p className="py-4 text-center font-bold text-gray-500 lg:text-xl">No Products Found</p>
                            </div>
                        )} */}
                    </SimpleBar>

                    <div className="-my-4 flex w-full items-center justify-start gap-6 overflow-x-auto whitespace-nowrap border-t py-4 text-sm sm:justify-end sm:text-base">
                        <div className="flex items-center gap-2">
                            <Typography>Rows per page:</Typography>

                            <select
                                className="cursor-pointer rounded border border-none bg-gray-100 px-2 py-1 outline-none"
                                onChange={handleChangeRowsPerPage}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                            </select>
                        </div>

                        <div>
                            <Typography>1-5 of 24</Typography>
                        </div>

                        <div className="flex items-center gap-2">
                            <IconButton className="rounded-full" variant="text" color="gray">
                                <HiChevronLeft className="text-xl" />
                            </IconButton>
                            <IconButton className="rounded-full" variant="text" color="gray">
                                <HiChevronRight className="text-xl" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

function ProductRow({ product }) {
    return (
        <tr className="hover:bg-gray-100">
            <td className="p-4 text-left text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://www.fnp.com/images/pr/x/v20220606182615/choco-oreo-cake-half-kg_1.jpg"
                        alt={"icon"}
                        height={48}
                        width={48}
                        className="h-10 w-10 min-w-[40px] rounded-xl object-cover lg:h-12 lg:w-12"
                    />

                    <Typography className="">Choco Oreo Cake</Typography>
                </div>
            </td>

            <td className="p-4 text-left text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                <p className="">25 August 2022</p>
            </td>

            <td className="p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                <span className="rounded-full bg-green-50 bg-opacity-60 py-1.5 px-8 text-xs text-green-500">
                    In Stock
                </span>
            </td>

            <td className="p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                599
            </td>

            <td className="p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                <Menu placement="left-start">
                    <MenuHandler>
                        <IconButton
                            className="flex items-center justify-center rounded-full"
                            variant="text"
                            color="gray"
                        >
                            <HiDotsVertical className="text-lg" />
                        </IconButton>
                    </MenuHandler>

                    <MenuList className="rounded-xl border-none p-2 shadow-1">
                        <MenuItem className="p-0">
                            <Button
                                className="flex w-full items-center justify-start gap-2 px-3 py-2 text-sm capitalize text-green-500"
                                variant="text"
                                color="gray"
                            >
                                <FiEdit className="" />
                                <p>Edit</p>
                            </Button>
                        </MenuItem>

                        <MenuItem className="p-0">
                            <Button
                                className="flex w-full items-center justify-start gap-2 px-3 py-2 text-sm capitalize text-red-500"
                                variant="text"
                                color="gray"
                            >
                                <FiDelete />
                                Delete
                            </Button>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </td>
        </tr>
    );
}

export default ProductsTable;
