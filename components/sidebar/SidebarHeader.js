/* eslint-disable @next/next/no-img-element */
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { IconButton } from "@material-tailwind/react";

function SidebarHeader({ onClose, expanded = true }) {
    return (
        <header className="flex items-center justify-between">
            {expanded && <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />}
            <IconButton className="rounded-full" variant="text" color="blue-gray" onClick={onClose}>
                {expanded ? (
                    <HiChevronDoubleLeft className="text-xl " />
                ) : (
                    <HiChevronDoubleRight className="text-xl " />
                )}
            </IconButton>
        </header>
    );
}
export default SidebarHeader;
