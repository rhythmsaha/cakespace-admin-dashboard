import { useRouter } from "next/router";

import Link from "../ui/Link";
import { Button } from "@material-tailwind/react";

function SidebarItem({ Icon, title, path, expanded = true }) {
    const router = useRouter();

    return (
        <Link href={path} className={`block `}>
            <Button
                variant="text"
                color="gray"
                fullWidth
                className={`flex min-w-min items-center gap-4 overflow-hidden rounded-lg px-4 py-[13px] transition-all duration-300 capitalize ${
                    router.pathname === path
                        ? "bg-primary-main bg-opacity-10 text-primary-main hover:bg-primary-main hover:bg-opacity-10 "
                        : "text-grey-600 hover:bg-gray-100"
                }`}
            >
                <Icon className="h-[22px] w-[22px] " />
                {expanded && <p className="text-sm tracking-wide font-medium">{title}</p>}
            </Button>
        </Link>
    );
}

export default SidebarItem;
