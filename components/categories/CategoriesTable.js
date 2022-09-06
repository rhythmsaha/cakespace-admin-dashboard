/* eslint-disable @next/next/no-img-element */
import Card from "../ui/Card";
import Table, { TableBody, TableHead, Td, Th, Tr } from "../ui/Table";
import AddNewCategory from "./AddNewCategory";
import EditCategory from "./EditCategory";

function CategoriesTable({ categories, categoriesError }) {
    return (
        <Card>
            <div className="flex items-center justify-between">
                <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Categories</h3>

                <AddNewCategory />
            </div>

            <Table>
                <TableHead>
                    <tr className="bg-grey-200 w-full">
                        <Th text="Icon" />
                        <Th text="Name" />
                        <Th text="Slug" />
                        <Th text="Edit" />
                        <Th text="Delete" />
                    </tr>
                </TableHead>

                <TableBody>
                    {categories.map((category) => (
                        <Tr key={category._id}>
                            <Td>
                                <div className="flex items-center justify-center">
                                    <img
                                        src={category?.icon}
                                        alt={category?.name}
                                        className="object-cover h-12 w-12 min-w-min aspect-square rounded"
                                    />
                                </div>
                            </Td>

                            <Td>
                                <p className="text-xs lg:text-sm font-medium text-gray-800  whitespace-nowrap">
                                    {category?.name}
                                </p>
                            </Td>
                            <Td>
                                <p className="text-xs lg:text-sm font-medium text-gray-800  whitespace-nowrap">
                                    {category?.slug}
                                </p>
                            </Td>

                            <Td>
                                <EditCategory category={category} />
                            </Td>

                            <Td>
                                <button className="text-xs lg:text-sm font-medium text-gray-800  whitespace-nowrap">
                                    Delete
                                </button>
                            </Td>
                        </Tr>
                    ))}
                </TableBody>
            </Table>

            {categoriesError && <p className="text-center py-4 text-gray-500">{categoriesError}</p>}
        </Card>
    );
}
export default CategoriesTable;
