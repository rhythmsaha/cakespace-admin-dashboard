/* eslint-disable @next/next/no-img-element */
import { HiChevronDoubleLeft } from "react-icons/hi";
import User from "./User";

function SidebarHeader({ onClose, expanded = true }) {
    return (
        <header className="space-y-2 px-5">
            <div className={`flex h-20 items-center justify-between`}>
                {expanded && (
                    <span className="">
                        <img src="/icon.png" alt="logo" className="h-8 w-8 object-contain" />
                    </span>
                )}

                <button
                    className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:active:bg-gray-700"
                    onClick={onClose}
                >
                    <HiChevronDoubleLeft className={`text-xl text-gray-500 dark:text-gray-300`} />
                </button>
            </div>

            <User expanded={expanded} />
        </header>
    );
}
export default SidebarHeader;
