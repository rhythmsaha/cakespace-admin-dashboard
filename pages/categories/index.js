/* eslint-disable @next/next/no-img-element */
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import PageName from "../../components/PageName";
import Card from "../../components/ui/Card";

function Categories() {
    return (
        <div>
            <PageName name="Categories" />

            <section className="w-full mt-8 grid grid-cols-2 gap-8">
                <Card>
                    <table className="table table-auto w-full border-collapse text-center">
                        <thead className="">
                            <tr className="bg-grey-200 w-full">
                                <th className="p-4 rounded-l-xl text-left">Category</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Edit</th>
                                <th className="p-4 rounded-r-xl">Delete</th>
                            </tr>
                        </thead>

                        <tbody className="">
                            {[...Array(6)].map((el, idx) => (
                                <tr className="hover:bg-grey-200 transition duration-300" key={idx}>
                                    <td className="p-4 rounded-l-xl text-left">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="https://res.cloudinary.com/desihzeid/image/upload/v1660382475/cld-sample-5.jpg"
                                                alt=""
                                                className="h-12 w-12 rounded-xl"
                                            />
                                            Birthday Cakes
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center">
                                            <span className="bg-primary-main text-primary-main px-6 py-1 rounded-full text-xs bg-opacity-[0.08]">
                                                active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center">
                                            <button className="">
                                                <AiFillEdit className="text-primary-main text-2xl" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center rounded-r-xl">
                                        <div className="flex items-center justify-center">
                                            <button>
                                                <AiFillDelete className="text-error-main text-2xl" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>

                <Card>
                    <table className="table table-auto w-full border-collapse text-center">
                        <thead className="">
                            <tr className="bg-grey-200 w-full">
                                <th className="p-4 rounded-l-xl text-left">Category</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Edit</th>
                                <th className="p-4 rounded-r-xl">Delete</th>
                            </tr>
                        </thead>

                        <tbody className="">
                            {[...Array(6)].map((el, idx) => (
                                <tr className="hover:bg-grey-200 transition duration-300" key={idx}>
                                    <td className="p-4 rounded-l-xl text-left">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src="https://res.cloudinary.com/desihzeid/image/upload/v1660382475/cld-sample-5.jpg"
                                                alt=""
                                                className="h-12 w-12 rounded-xl"
                                            />
                                            Birthday Cakes
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center">
                                            <span className="bg-primary-main text-primary-main px-6 py-1 rounded-full text-xs bg-opacity-[0.08]">
                                                active
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center">
                                            <button className="">
                                                <AiFillEdit className="text-primary-main text-2xl" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center rounded-r-xl">
                                        <div className="flex items-center justify-center">
                                            <button>
                                                <AiFillDelete className="text-error-main text-2xl" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>

                <div className="col-span-2">
                    <Card>
                        <table className="table table-auto w-full border-collapse text-center">
                            <thead className="">
                                <tr className="bg-grey-200 w-full">
                                    <th className="p-4 rounded-l-xl text-left">Category</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Edit</th>
                                    <th className="p-4 rounded-r-xl">Delete</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {[...Array(6)].map((el, idx) => (
                                    <tr className="hover:bg-grey-200 transition duration-300" key={idx}>
                                        <td className="p-4 rounded-l-xl text-left">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src="https://res.cloudinary.com/desihzeid/image/upload/v1660382475/cld-sample-5.jpg"
                                                    alt=""
                                                    className="h-12 w-12 rounded-xl"
                                                />
                                                Birthday Cakes
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="bg-primary-main text-primary-main px-6 py-1 rounded-full text-xs bg-opacity-[0.08]">
                                                    active
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <button className="">
                                                    <AiFillEdit className="text-primary-main text-2xl" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center rounded-r-xl">
                                            <div className="flex items-center justify-center">
                                                <button>
                                                    <AiFillDelete className="text-error-main text-2xl" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>

                <div className="col-span-2">
                    <Card>
                        <table className="table table-auto w-full border-collapse text-center">
                            <thead className="">
                                <tr className="bg-grey-200 w-full">
                                    <th className="p-4 rounded-l-xl text-left">Category</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Edit</th>
                                    <th className="p-4 rounded-r-xl">Delete</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {[...Array(6)].map((el, idx) => (
                                    <tr className="hover:bg-grey-200 transition duration-300" key={idx}>
                                        <td className="p-4 rounded-l-xl text-left">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src="https://res.cloudinary.com/desihzeid/image/upload/v1660382475/cld-sample-5.jpg"
                                                    alt=""
                                                    className="h-12 w-12 rounded-xl"
                                                />
                                                Birthday Cakes
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="bg-primary-main text-primary-main px-6 py-1 rounded-full text-xs bg-opacity-[0.08]">
                                                    active
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <button className="">
                                                    <AiFillEdit className="text-primary-main text-2xl" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-4 text-center rounded-r-xl">
                                            <div className="flex items-center justify-center">
                                                <button>
                                                    <AiFillDelete className="text-error-main text-2xl" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </section>
        </div>
    );
}
export default Categories;

Categories.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
