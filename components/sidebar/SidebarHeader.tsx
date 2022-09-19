import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { IconButton } from "@material-tailwind/react";
import Image from "next/future/image";
import { MouseEventHandler } from "react";

interface PropTypes {
    onClose: MouseEventHandler<HTMLButtonElement>;
    expanded?: boolean;
}

function SidebarHeader({ onClose, expanded = true }: PropTypes) {
    return (
        <header className="flex items-center justify-between">
            {expanded ? (
                <>
                    <Image src="/logo.png" height={40} width={40} alt="logo" className="min-w-min object-contain" />
                    <IconButton className="rounded-full" variant="text" color="gray" onClick={onClose}>
                        <HiChevronDoubleLeft className="text-xl " />
                    </IconButton>
                </>
            ) : (
                <IconButton className="rounded-full" variant="text" color="gray" onClick={onClose}>
                    <HiChevronDoubleRight className="text-xl " />
                </IconButton>
            )}
        </header>
    );
}
export default SidebarHeader;
