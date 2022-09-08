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
                <h3 className="text-base font-semibold text-gray-600 lg:px-2 lg:text-lg">Categories</h3>
                <AddNewCategory />
            </div>

            <div className="overflow-x-auto rounded-md py-4">
                <table className="table w-full table-auto border-separate text-center">
                    <thead>
                        <tr className="bg-grey-200">
                            <th className=" ">Icon</th>
                            <th className="">Name</th>
                            <th className="">View</th>
                            <th className="">Edit</th>
                            <th className="">Delete</th>
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
                    <p className="py-4 text-center text-gray-500">{categoriesError}</p>
                )}
            </div>
        </Card>
    );
}
export default CategoriesTable;

function CategoryRows({ category: { _id, icon, name, slug } }) {
    return (
        <tr key={_id} className="">
            <td className="">
                <Image
                    src={icon}
                    alt={name}
                    width={48}
                    height={48}
                    className="mx-auto h-10 w-10 min-w-min  rounded-xl object-cover lg:h-12 lg:w-12"
                />
            </td>

            <td className="">{name}</td>

            <td className="">Edit</td>

            <td className="">
                <Link href={`/categories/${slug}`}>View</Link>
            </td>

            <td className="">
                <button className="">Delete</button>
            </td>
        </tr>
    );
}
