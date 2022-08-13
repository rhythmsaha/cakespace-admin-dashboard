/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true); //Sidebar Expand State

    // Sidebar collapse toggle function
    const toggleSidebar = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <SimpleBar
            style={{ maxHeight: "100%", scrollBehavior: "smooth" }}
            className={`${expanded ? "w-[280px]" : "w-[86px]"} 
            select-none border-r border-dashed transition-all`}
        >
            <SidebarHeader onClose={toggleSidebar} expanded={expanded} />

            <SidebarLinks expanded={expanded} />
        </SimpleBar>
    );
};
export default Sidebar;
