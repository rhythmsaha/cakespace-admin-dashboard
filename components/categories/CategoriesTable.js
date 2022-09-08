/* eslint-disable @next/next/no-img-element */
import Card from "../ui/Card";
import Link from "../ui/Link";
// import Image from "next/image";
import Image from "next/future/image";
import AddNewCategory from "./AddNewCategory";
import EditCategory from "./EditCategory";

function CategoriesTable({ categories, categoriesError }) {
    return (
        <Card>
            <div className="flex items-center justify-between ">
                <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Categories</h3>
                <AddNewCategory />
            </div>

            <div className="overflow-x-auto py-4 rounded-md">
                <table className="table table-auto border-separate w-full text-center">
                    <thead>
                        <tr className="bg-grey-200">
                            <th className="py-4 px-4 text-sm lg:text-base first:rounded-l-md last:rounded-r-md ">
                                Icon
                            </th>
                            <th className="py-4 px-4 text-sm lg:text-base first:rounded-l-md last:rounded-r-md">
                                Name
                            </th>
                            <th className="py-4 px-4 text-sm lg:text-base first:rounded-l-md last:rounded-r-md ">
                                View
                            </th>
                            <th className="py-4 px-4 text-sm lg:text-base first:rounded-l-md last:rounded-r-md ">
                                Edit
                            </th>
                            <th className="py-4 px-4 text-sm lg:text-base first:rounded-l-md last:rounded-r-md ">
                                Delete
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {categories.map((category) => (
                            <CategoryRows key={category._id} category={category} />
                        ))}
                        {categories.map((category) => (
                            <CategoryRows key={category._id} category={category} />
                        ))}
                        {categories.map((category) => (
                            <CategoryRows key={category._id} category={category} />
                        ))}
                        {categories.map((category) => (
                            <CategoryRows key={category._id} category={category} />
                        ))}
                    </tbody>
                </table>

                {categoriesError && categories.length === 0 && (
                    <p className="text-center py-4 text-gray-500">{categoriesError}</p>
                )}
            </div>
        </Card>
    );
}
export default CategoriesTable;

function CategoryRows({ category: { _id, icon, name, slug } }) {
    return (
        <tr key={_id} className="">
            <td className="flex items-center justify-center py-2 ">
                <Image
                    src={icon}
                    alt={name}
                    width={56}
                    height={56}
                    className="object-cover h-10 lg:h-14 w-10 lg:w-14 rounded-xl min-w-min"
                />
            </td>

            <td className="px-4 py-2">{name}</td>

            <td className="py-2">Edit</td>

            <td className="py-2">
                <Link href={`/categories/${slug}`}>View</Link>
            </td>

            <td className="py-2">
                <button className="">Delete</button>
            </td>
        </tr>
    );
}
