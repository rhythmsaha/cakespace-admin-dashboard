/* eslint-disable @next/next/no-img-element */
import { HiChevronDoubleLeft } from "react-icons/hi";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import User from "./User";
import SidebarItem from "./SidebarItem";
import sidebarConfig from "../../utils/sidebarConfig";
import { useState } from "react";

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);

    const toggleSidebar = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <SimpleBar
            style={{ maxHeight: "100%", scrollBehavior: "smooth" }}
            className={`${expanded ? "w-[280px]" : "w-[86px]"} border-r border-dashed select-none transition-all`}
        >
            <header className="px-5 space-y-2">
                <div className="flex items-center justify-between h-20">
                    <span>
                        <img src="/icon.png" alt="logo" className="object-contain h-8 w-8" />
                    </span>

                    {expanded && (
                        <button
                            className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition rounded-full active:bg-gray-200"
                            onClick={toggleSidebar}
                        >
                            <HiChevronDoubleLeft className="text-xl text-gray-500" />
                        </button>
                    )}
                </div>

                <User expanded={expanded} />
            </header>

            {sidebarConfig.map(({ id, menus, type }) => (
                <nav className="mt-2 p-4" key={id}>
                    {expanded && <h2 className="text-xs px-4 font-bold text-gray-700 uppercase">{type}</h2>}

                    <div className="mt-2 space-y-1">
                        {menus.map((link) => (
                            <SidebarItem
                                Icon={link.icon}
                                key={link.id}
                                title={link.title}
                                path={link.path}
                                expanded={expanded}
                            />
                        ))}
                    </div>
                </nav>
            ))}
        </SimpleBar>
    );
};
export default Sidebar;
