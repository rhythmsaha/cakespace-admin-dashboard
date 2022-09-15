/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FiDelete, FiEdit } from "react-icons/fi";
import AddNewFlavour from "./AddNewFlavour";
import Card from "../../ui/Card";
import EditFlavour from "./EditFlavour";
import DeleteFlavour from "./DeleteFlavour";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { Button, IconButton, MenuHandler, MenuItem, MenuList, Typography, Menu } from "@material-tailwind/react";

function FlavoursTable({ flavours }) {
    return (
        <Card>
            <div className="flex flex-wrap items-center justify-between">
                <Typography className="text-base font-semibold text-gray-600 lg:px-2 lg:text-lg">Flavours</Typography>
                <AddNewFlavour />
            </div>

            <SimpleBar className="mt-4 overflow-x-auto overflow-y-hidden rounded-md py-4">
                <table className="table w-full table-auto border-collapse text-center">
                    <thead className="">
                        <tr className="bg-grey-200">
                            <th className="whitespace-nowrap py-5 px-4 sm:px-6 md:px-8 lg:px-10 text-left text-xs text-gray-700 first:rounded-l-md last:rounded-r-md sm:text-sm lg:text-base">
                                Flavour
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
                        {flavours.map((flavour) => (
                            <FlavoursRow key={flavour._id} flavour={flavour} />
                        ))}
                    </tbody>
                </table>
            </SimpleBar>

            {flavours.length === 0 && (
                <div className="flex w-full flex-col items-center justify-center gap-4 p-6 py-10">
                    <img src="/illustration_empty_content.svg" alt="empty" className="w-40 object-contain lg:w-60" />
                    <p className="py-4 text-center font-bold text-gray-500 lg:text-xl">No Flavours Found</p>
                </div>
            )}
        </Card>
    );
}
export default FlavoursTable;

function FlavoursRow({ flavour }) {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const { _id, name, slug, enabled } = flavour;

    return (
        <tr key={_id} className="rounded text-gray-600 transition-all duration-200 hover:bg-gray-50">
            <td className="px-4 sm:px-6 md:px-8 lg:px-10 py-4 text-left text-xs first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <Typography className="whitespace-nowrap hover:text-gray-900">{name}</Typography>
            </td>

            <td className="px-4 py-4 text-center text-xs first:rounded-l-xl last:rounded-r-xl sm:text-sm lg:text-base">
                <p className="whitespace-nowrap">{slug}</p>
            </td>

            <td className="px-4 py-4 text-center first:rounded-l-xl last:rounded-r-xl">
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

            <td className="w-14 py-4 first:rounded-l-xl last:rounded-r-xl">
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

                    <MenuList className="p-2 border-none rounded-xl shadow-1">
                        <MenuItem className="p-0">
                            <Button
                                onClick={() => setEditModal(true)}
                                className="w-full flex items-center justify-start px-3 py-2 gap-2 text-sm capitalize text-green-500"
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
                                className="w-full flex items-center justify-start px-3 py-2 gap-2 text-sm capitalize text-red-500"
                                variant="text"
                                color="gray"
                            >
                                <FiDelete />
                                Delete
                            </Button>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <EditFlavour flavour={flavour} open={editModal} setOpen={setEditModal} />
                <DeleteFlavour slug={slug} open={deleteModal} setOpen={setDeleteModal} />
            </td>
        </tr>
    );
}
