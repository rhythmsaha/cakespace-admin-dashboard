/* eslint-disable @next/next/no-img-element */
import { HiChevronDoubleLeft } from "react-icons/hi";
import User from "./User";

function SidebarHeader({ onClose, expanded = true }) {
    return (
        <header className="space-y-2 px-5">
            <div className={`flex h-20 items-center justify-between`}>
                {expanded && <img src="/icon.png" alt="logo" className="h-8 w-8 object-contain" />}

                <button
                    className="flex items-center justify-center h-10 w-10 rounded-full transition hover:bg-gray-100 active:bg-gray-200"
                    onClick={onClose}
                >
                    <HiChevronDoubleLeft className="text-xl text-gray-500" />
                </button>
            </div>

            <User expanded={expanded} />
        </header>
    );
}
export default SidebarHeader;
