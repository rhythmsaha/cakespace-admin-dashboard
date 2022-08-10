import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "../ui/Link";

function SidebarItem({ Icon, menu }) {
    const [expanded, setExpanded] = useState(false);

    if (menu?.children) {
        return (
            <Link
                href=""
                className="w-full flex items-center gap-4 px-4 py-4 text-sm text-emerald-500 bg-emerald-50 hover:bg-gray-100  rounded-lg"
            >
                <Icon className="text-xl " />
                <p className="font-semibold">Dashboard</p>
            </Link>
        );
    }

    return (
        <div>
            <div
                onClick={() => setExpanded((prev) => !prev)}
                className="w-full flex items-center gap-4 px-4 py-4 text-sm text-emerald-500 bg-emerald-50 hover:bg-gray-100  rounded-lg cursor-pointer"
            >
                <Icon className="text-xl " />
                <p className="font-semibold">Dashboard</p>
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: "auto" },
                            collapsed: { height: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-white overflow-hidden"
                    >
                        <Link
                            href=""
                            className="w-full flex items-center gap-6 px-6 py-4 text-sm text-gray-500 hover:bg-gray-100  rounded-lg"
                        >
                            <span> • </span>
                            <p className="font-semibold">Dashboard</p>
                        </Link>
                        <Link
                            href=""
                            className="w-full flex items-center gap-6 px-6 py-4 text-sm text-gray-500 hover:bg-gray-100  rounded-lg"
                        >
                            <span> • </span>
                            <p className="font-semibold">Dashboard</p>
                        </Link>
                        <Link
                            href=""
                            className="w-full flex items-center gap-6 px-6 py-4 text-sm text-gray-500 hover:bg-gray-100  rounded-lg"
                        >
                            <span> • </span>
                            <p className="font-semibold">Dashboard</p>
                        </Link>
                        <Link
                            href=""
                            className="w-full flex items-center gap-6 px-6 py-4 text-sm text-gray-500 hover:bg-gray-100  rounded-lg"
                        >
                            <span> • </span>
                            <p className="font-semibold">Dashboard</p>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SidebarItem;
