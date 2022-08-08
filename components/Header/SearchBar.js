import { useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import useClickOutside from "../../hooks/useClickOutside";

const SearchBar = ({ onClose }) => {
    const ref = useRef();

    useClickOutside(ref, () => onClose(false));

    return (
        <motion.section
            ref={ref}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "just" }}
            className="absolute left-0 right-0 top-0 px-10 h-24 z-50 shadow-lg bg-opacity-50 bg-white backdrop-blur-sm flex items-center"
        >
            <div className="flex items-center w-full h-full">
                <label htmlFor="header_search" className="inline">
                    <BiSearch className="text-xl text-gray-400" />
                </label>

                <input
                    type="text"
                    id="header_search"
                    className="border-none outline-none focus:ring-0 font-bold text-gray-700 placeholder:text-gray-400 flex-1 bg-transparent h-full"
                    placeholder="Search..."
                />
            </div>
        </motion.section>
    );
};

export default SearchBar;
