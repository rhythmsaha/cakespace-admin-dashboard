/* eslint-disable @next/next/no-img-element */
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Categories() {
    return (
        <div>
            <PageName name="Categories & Flavours" />

            <section className="w-full mt-8 grid 2xl:grid-cols-2 gap-x-4 gap-y-8 ">
                <Card>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Categories</h3>

                        <Button variant="primary" size="md" width="6rem">
                            Add New
                        </Button>
                    </div>

                    <div className="overflow-x-auto py-4 rounded-md">
                        <table className="table table-auto w-full border-collapse text-center">
                            <thead className="">
                                <tr className="bg-grey-200 w-full">
                                    <th className="py-4 px-4 text-sm text-center lg:text-base rounded-l-md">Name</th>
                                    <th className="py-4 px-4 text-sm text-center lg:text-base">Slug</th>
                                    <th className="py-4 px-4 text-sm text-center lg:text-base">Edit</th>
                                    <th className="py-4 px-4 text-sm text-center lg:text-base rounded-r-md">Delete</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {[...Array(6)].map((el, idx) => (
                                    <tr className="hover:bg-grey-200 transition duration-300" key={idx}>
                                        <td className="p-4 rounded-l-xl ">
                                            <p className="text-xs whitespace-nowrap">Birthday Cakes</p>
                                        </td>

                                        <td className="p-4 ">
                                            <p className="text-xs whitespace-nowrap">birthday_cakes</p>
                                        </td>

                                        <td className="p-4 ">
                                            <button className="">
                                                <AiFillEdit className="text-primary-main text-xl" />
                                            </button>
                                        </td>

                                        <td className="p-4 rounded-r-xl">
                                            <button>
                                                <AiFillDelete className="text-error-main text-xl" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Card>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base lg:text-lg font-semibold text-gray-600 lg:px-2">Flavours</h3>

                        <Button variant="primary" size="md" width="6rem">
                            Add New
                        </Button>
                    </div>

                    <div className="overflow-x-auto py-4 rounded-md">
                        <table className="table table-auto w-full border-collapse text-center">
                            <thead className="">
                                <tr className="bg-grey-200 w-full">
                                    <th className="py-4 px-4 text-sm text-center lg:text-base rounded-l-md">Name</th>
                                    <th className="py-4 px-4 text-sm text-center lg:text-base">Slug</th>
                                    <th className="py-4 px-4 text-sm text-center lg:text-base">Edit</th>
                                    <th className="py-4 px-4 text-sm text-center lg:text-base rounded-r-md">Delete</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {[...Array(6)].map((el, idx) => (
                                    <tr className="hover:bg-grey-200 transition duration-300" key={idx}>
                                        <td className="p-4 rounded-l-xl ">
                                            <p className="text-xs whitespace-nowrap">Birthday Cakes</p>
                                        </td>

                                        <td className="p-4 ">
                                            <p className="text-xs whitespace-nowrap">birthday_cakes</p>
                                        </td>

                                        <td className="p-4 ">
                                            <button className="">
                                                <AiFillEdit className="text-primary-main text-xl" />
                                            </button>
                                        </td>

                                        <td className="p-4 rounded-r-xl">
                                            <button>
                                                <AiFillDelete className="text-error-main text-xl" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </section>
        </div>
    );
}
export default Categories;

Categories.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
