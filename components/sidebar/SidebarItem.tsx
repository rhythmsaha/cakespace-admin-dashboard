import { useRouter } from "next/router";
import { Button, Typography } from "@material-tailwind/react";
import React from "react";

interface PropTypes {
    Icon: React.FC<{ className: string }>;
    title: string;
    path: string;
    expanded: boolean;
}

function SidebarItem({ Icon, title, path, expanded = true }: PropTypes) {
    const router = useRouter();

    const linkClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => router.push(path);

    return (
        <Button
            variant="text"
            fullWidth
            onClick={linkClickHandler}
            className={`flex min-w-min items-center gap-4 overflow-hidden rounded-lg px-4 py-[13px] capitalize transition-all duration-300 hover:bg-gray-100 ${
                router.pathname === path ? "bg-blue-500 bg-opacity-10 text-blue-500" : "text-grey-600 "
            }`}
        >
            <Icon className="h-[22px] w-[22px]" />
            {expanded && (
                <Typography variant="small" className="font-medium tracking-wide">
                    {title}
                </Typography>
            )}
        </Button>
    );
}

export default SidebarItem;
