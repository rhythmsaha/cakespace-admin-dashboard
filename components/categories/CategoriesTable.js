/* eslint-disable @next/next/no-img-element */
import Card from "../ui/Card";
import Image from "next/future/image";
import AddNewCategory from "./AddNewCategory";
import { HiDotsVertical } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import Link from "../ui/Link";
import { useState } from "react";
import EditCategory from "./EditCategory";
import DeleteItem from "./DeleteItem";
import NoData from "../../assets/illustrations/NoData";

function CategoriesTable({ categories, categoriesError }) {
    return (
        <Card>
            <div className="flex flex-wrap items-center justify-between">
                <h3 className="text-base font-semibold text-gray-600 lg:px-2 lg:text-lg">Categories</h3>
                <AddNewCategory />
            </div>

            <div className="mt-4 overflow-x-auto overflow-y-hidden rounded-md py-4">
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
            </div>
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
            <td className="p-4 text-xs first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <Image
                    src={icon}
                    alt={name}
                    width={48}
                    height={48}
                    className="mx-auto h-10 w-10 min-w-min rounded-xl object-cover lg:h-12 lg:w-12"
                />
            </td>

            <td className="px-4 text-left text-xs first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <Link href="">
                    <p className="whitespace-nowrap hover:text-gray-900">{name}</p>
                </Link>
            </td>

            <td className="px-4 text-center text-xs first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <p className="whitespace-nowrap">{slug}</p>
            </td>

            <td className="px-4 text-center first:rounded-l-xl last:rounded-r-xl">
                {enabled && (
                    <span className="whitespace-nowrap rounded-full bg-primary-lighter bg-opacity-60 py-1.5 px-8 text-xs text-primary-main">
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
                <Menu as="div" className="relative inline-block">
                    <div className="flex items-center justify-center">
                        <Menu.Button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-200 active:bg-gray-300">
                            <HiDotsVertical className="text-lg lg:text-xl" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-full bottom-0 z-20 w-40 origin-top-right rounded-lg bg-white shadow-1">
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => setEditCategory(true)}
                                            className={`${
                                                active ? "bg-gray-100" : "bg-white"
                                            } flex w-full items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-xs font-medium text-primary-main  transition lg:text-base`}
                                        >
                                            <FiEdit />
                                            <p>Edit</p>
                                        </button>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => setDeleteModal(true)}
                                            className={`${
                                                active ? "bg-gray-100" : "bg-white"
                                            } flex w-full items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-xs font-medium text-error-main  transition lg:text-base`}
                                        >
                                            <FiDelete />
                                            Delete
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <EditCategory category={category} isOpen={editCategory} setIsOpen={setEditCategory} />
                <DeleteItem categoryId={slug} isOpen={deleteModal} setIsOpen={setDeleteModal} />
            </td>
        </tr>
    );
}
