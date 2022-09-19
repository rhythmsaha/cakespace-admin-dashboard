/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { Typography, Menu, MenuHandler, MenuList, MenuItem, Button, IconButton } from "@material-tailwind/react";
import { HiDotsVertical } from "react-icons/hi";
import { FiDelete, FiEdit } from "react-icons/fi";

import EditCategory from "./EditCategory";
import AddNewCategory from "./AddNewCategory";
import DeleteItem from "./DeleteItem";
import Link from "../../ui/Link";
import Card from "../../ui/Card";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Image from "next/future/image";

function CategoriesTable({ categories }) {
    return (
        <Card>
            <div className="flex flex-wrap items-center justify-between">
                <Typography className="text-base font-semibold text-gray-600 lg:px-2 lg:text-lg">Categories</Typography>
                <AddNewCategory />
            </div>

            <SimpleBar className="mt-4 overflow-x-auto overflow-y-hidden rounded-md py-4">
                <table className="table w-full table-auto border-collapse text-center">
                    <thead className="">
                        <tr className="bg-grey-200">
                            <th className="whitespace-nowrap py-5 px-4 text-center text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:w-32 sm:text-sm lg:text-base">
                                Icon
                            </th>
                            <th className="whitespace-nowrap py-5 px-4 text-left text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                Category
                            </th>
                            <th className="whitespace-nowrap py-5 px-4 text-center text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                Slug
                            </th>
                            <th className="whitespace-nowrap py-5 px-4 text-center text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                Status
                            </th>
                            <th className="whitespace-nowrap py-5 px-4 text-center text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base"></th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {categories.map((category) => (
                            <CategoryRows key={category._id} category={category} />
                        ))}
                    </tbody>
                </table>

                {categories.length === 0 && (
                    <div className="flex w-full flex-col items-center justify-center gap-4 p-6 py-10">
                        <img
                            src="/illustration_empty_content.svg"
                            alt="empty"
                            className="w-40 object-contain lg:w-60"
                        />
                        <p className="py-4 text-center font-bold text-gray-500 lg:text-xl">No Categories Found</p>
                    </div>
                )}
            </SimpleBar>
        </Card>
    );
}
export default CategoriesTable;

function CategoryRows({ category }) {
    const [editCategory, setEditCategory] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const { _id, icon, name, slug, enabled } = category;

    return (
        <tr key={_id} className="rounded text-gray-600 transition-all duration-200 hover:bg-gray-50">
            <td className="p-4 text-xs  first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <Image
                    src={icon}
                    alt={name}
                    height={48}
                    width={48}
                    className="mx-auto h-10 w-10 min-w-[40px] rounded-xl object-cover lg:h-12 lg:w-12"
                />
            </td>

            <td className="whitespace-nowrap px-4 text-left text-xs first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <Link href={`/categories/${slug}`}>{name}</Link>
            </td>

            <td className="px-4 text-center text-xs first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <p className="whitespace-nowrap">{slug}</p>
            </td>

            <td className="px-4 text-center first:rounded-l-xl last:rounded-r-xl">
                {enabled && (
                    <span className="whitespace-nowrap rounded-full bg-green-50 bg-opacity-60 py-1.5 px-8 text-xs text-green-500">
                        Enabled
                    </span>
                )}
                {!enabled && (
                    <span className="whitespace-nowrap rounded-full bg-error-lighter bg-opacity-60 py-1.5 px-8 text-xs text-error-main">
                        Diasbled
                    </span>
                )}
            </td>

            <td className="w-14 first:rounded-l-xl last:rounded-r-xl">
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
                                onClick={() => setEditCategory(true)}
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
                                onClick={() => setDeleteModal(true)}
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

                <EditCategory category={category} isOpen={editCategory} setIsOpen={setEditCategory} />
                <DeleteItem slug={slug} isOpen={deleteModal} setIsOpen={setDeleteModal} />
            </td>
        </tr>
    );
}
