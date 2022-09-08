/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import SimpleBar from "simplebar-react";
import User from "./User";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import "simplebar/dist/simplebar.min.css";

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true); //Sidebar Expand State

    // Sidebar collapse toggle function
    const toggleSidebar = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <SimpleBar
            style={{ maxHeight: "100%", scrollBehavior: "smooth" }}
            className={`${expanded ? "w-[280px]" : "w-[87px]"} 
            select-none border-r border-dashed px-5 py-6 transition-all duration-200 ease-out`}
        >
            <SidebarHeader onClose={toggleSidebar} expanded={expanded} />
            <User expanded={expanded} />

            <SidebarLinks expanded={expanded} />
        </SimpleBar>
    );
};
export default Sidebar;
