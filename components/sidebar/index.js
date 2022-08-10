/* eslint-disable @next/next/no-img-element */

import { MdSpeed } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { HiChevronDoubleLeft } from "react-icons/hi";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import User from "./User";
import SidebarItem from "./SidebarItem";
import sidebarConfig from "../../utils/sidebarConfig";

const Sidebar = () => {
    return (
        <SimpleBar
            style={{ maxHeight: "100%", scrollBehavior: "smooth" }}
            className="w-[17.5rem] border-r border-dashed select-none"
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

            {sidebarConfig.map(({ id, menus, type }) => (
                <nav className="mt-9 p-4" key={id}>
                    <h2 className="text-xs px-4 font-bold text-gray-700 uppercase">{type}</h2>

                    <div className="mt-2 space-y-2">
                        {menus.map((link) => (
                            <SidebarItem Icon={link.icon} key={link.id} title={link.title} path={link.path} />
                        ))}
                    </div>
                </nav>
            ))}
        </SimpleBar>
    );
};
export default Sidebar;
