/* eslint-disable @next/next/no-img-element */
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

function SidebarHeader({ onClose, expanded = true }) {
    return (
        <header className="flex items-center justify-between">
            {expanded && <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />}

            <button
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all duration-300"
                onClick={onClose}
            >
                {expanded ? (
                    <HiChevronDoubleLeft className="text-xl text-gray-500" />
                ) : (
                    <HiChevronDoubleRight className="text-xl text-gray-500" />
                )}
            </button>
        </header>
    );
}
export default SidebarHeader;
