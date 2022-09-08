/* eslint-disable @next/next/no-img-element */
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

function SidebarHeader({ onClose, expanded = true }) {
    return (
        <header className="flex items-center justify-between">
            {expanded && <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />}

            <button
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-100 active:bg-gray-200"
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
