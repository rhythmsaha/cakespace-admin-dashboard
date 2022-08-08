/* eslint-disable @next/next/no-img-element */

import { MdSpeed } from "react-icons/md";
import { HiChevronDoubleLeft } from "react-icons/hi";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import User from "./User";

const Sidebar = () => {
    return (
        <SimpleBar
            style={{ maxHeight: "100%", scrollBehavior: "smooth" }}
            className="w-[17.5rem] border-r border-dashed"
        >
            <header className="px-5 space-y-2">
                <div className="flex items-center justify-between h-20">
                    <span>
                        <img src="/icon.png" alt="logo" className="object-contain h-8 w-8" />
                    </span>

                    <button className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition rounded-full active:bg-gray-200">
                        <HiChevronDoubleLeft className="text-xl text-gray-500" />
                    </button>
                </div>

                <User />
            </header>

            <nav className="mt-5 px-4">
                <h2 className="text-xs px-4 font-bold text-gray-700 ">GENERAL</h2>

                <ul className="mt-2 space-y-2">
                    <li className="w-full flex items-center gap-4 px-4 py-4 text-sm text-emerald-500 bg-emerald-50 hover:bg-gray-100  rounded-lg">
                        <MdSpeed className="text-xl " />

                        <p className="font-semibold">Dashboard</p>
                    </li>
                </ul>
            </nav>
        </SimpleBar>
    );
};
export default Sidebar;
