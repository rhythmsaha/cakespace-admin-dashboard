/* eslint-disable @next/next/no-img-element */
import SimpleBar from "simplebar-react";
import { Router } from "next/router";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useClickAway } from "react-use";
import SidebarHeader from "./SidebarHeader";
import "simplebar/dist/simplebar.min.css";
import SidebarLinks from "./SidebarLinks";
import User from "./User";

const MobileSidebar = ({ onClose }) => {
    const ref = useRef();

    Router.events.on("routeChangeComplete", () => {
        onClose();
    });

    useClickAway(ref, onClose);

    return (
        <motion.aside
            initial={{ translateX: "-100%", opacity: 0 }}
            animate={{ translateX: "0%", opacity: 1 }}
            exit={{ translateX: "-100%", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-[17.5rem] bg-white shadow-1"
            ref={ref}
        >
            <SimpleBar
                style={{ maxHeight: "100%", scrollBehavior: "smooth" }}
                className="h-full w-full select-none transition-all px-5 py-6"
            >
                <SidebarHeader onClose={onClose} />
                <User />
                <SidebarLinks />
            </SimpleBar>
        </motion.aside>
    );
};

export default MobileSidebar;
