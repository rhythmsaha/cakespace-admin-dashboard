import { useState } from "react";
import { Button, IconButton, Input, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { BiSearch } from "react-icons/bi";
import Card from "../ui/Card";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Image from "next/future/image";
import { HiChevronLeft, HiChevronRight, HiDotsVertical } from "react-icons/hi";
import { FiDelete, FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import moment from "moment";
import numeral from "numeral";
import { useRouter } from "next/router";

const ProductsTable = ({ products }) => {
    const [productList, setProductList] = useState([]);
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState("asc");
    const [filterName, setFilterName] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [orderBy, setOrderBy] = useState("createdAt");

    useEffect(() => {
        setProductList(products);
    }, [products]);

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
        setProductList(deleteProduct);
    };

    const filteredProducts = applySortFilter(productList, getComparator(order, orderBy), filterName);

    const isNotFound = !filteredProducts.length;

    const handleNextPage = () => {
        if (Math.ceil(filteredProducts.length / rowsPerPage) > page + 1) {
            setPage((page) => (page += 1));
        }
    };
    const handlePreviousPage = () => {
        if (page > 0) {
            setPage((page) => (page -= 1));
        }
    };

    return (
        <Card>
            <div className="select-none">
                <header className="flex items-center justify-between gap-6">
                    <div className="max-w-xs">
                        <Input
                            size="lg"
                            label="Search"
                            color="green"
                            icon={<BiSearch />}
                            onChange={(e) => handleFilterByName(e.target.value)}
                        />
                    </div>
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
                                {filteredProducts
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((product, index) => (
                                        <ProductRow key={index} product={product} />
                                    ))}
                            </tbody>
                        </table>

                        {isNotFound && (
                            <div className="flex w-full flex-col items-center justify-center gap-4 p-6 py-10">
                                <img
                                    src="/illustration_empty_content.svg"
                                    alt="empty"
                                    className="w-40 object-contain lg:w-60"
                                />
                                <p className="py-4 text-center font-bold text-gray-500 lg:text-xl">No Products Found</p>
                            </div>
                        )}
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
                            <Typography>
                                {rowsPerPage * page + 1}-
                                {rowsPerPage * (page + 1) > filteredProducts.length
                                    ? filteredProducts.length
                                    : rowsPerPage * (page + 1)}{" "}
                                of {filteredProducts.length}
                            </Typography>
                        </div>

                        <div className="flex items-center gap-2">
                            <IconButton
                                className="rounded-full"
                                variant="text"
                                color="gray"
                                onClick={handlePreviousPage}
                            >
                                <HiChevronLeft className="text-xl" />
                            </IconButton>
                            <IconButton className="rounded-full" variant="text" color="gray" onClick={handleNextPage}>
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
    const router = useRouter();

    return (
        <tr className="hover:bg-gray-50">
            <td className="p-4 text-left text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                <div className="flex items-center gap-4">
                    <Image
                        src={product.images[0]}
                        alt={"icon"}
                        height={48}
                        width={48}
                        className="h-10 w-10 min-w-[40px] rounded-xl object-cover lg:h-12 lg:w-12"
                    />

                    <Typography className="">{product.name}</Typography>
                </div>
            </td>

            <td className="p-4 text-left text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                <p className="">{moment(product.createdAt).format("ll")}</p>
            </td>

            <td className="p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                {product.stocks === 0 && (
                    <span className="rounded-full bg-red-50 bg-opacity-60 py-1.5 px-8 text-xs text-red-600">
                        Out of Stock
                    </span>
                )}

                {product.stocks <= 10 && (
                    <span className="rounded-full bg-orange-50 bg-opacity-60 py-1.5 px-8 text-xs text-orange-500">
                        Low on Stock
                    </span>
                )}

                {product.stocks > 10 && (
                    <span className="rounded-full bg-green-50 bg-opacity-60 py-1.5 px-8 text-xs text-green-500">
                        In Stock
                    </span>
                )}
            </td>

            <td className="p-4 text-center text-xs text-gray-700 first:rounded-l-lg last:rounded-r-lg sm:text-sm lg:text-base">
                <span>
                    {"\u20B9"} {numeral(product.price).format("(0,0.00")}
                </span>
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
                                onClick={() => router.push(`/products/edit/${product.slug}`)}
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

// -------------------------
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    if (query) {
        return array.filter((_product) => _product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }

    return stabilizedThis.map((el) => el[0]);
}
