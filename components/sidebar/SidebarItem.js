import { useRouter } from "next/router";

import Link from "../ui/Link";

function SidebarItem({ Icon, title, path, expanded = true }) {
    const router = useRouter();

    return (
        <Link
            href={path}
            className={`flex min-w-min items-center gap-4 overflow-hidden rounded-lg px-4 py-4 text-sm transition-all duration-300 ${
                router.pathname === path
                    ? "bg-green-500 bg-opacity-10 text-green-500"
                    : "text-gray-500 hover:bg-gray-100 active:bg-gray-200"
            }`}
        >
            <Icon className="h-5 w-5 text-xl" />
            {expanded && <p className="">{title}</p>}
        </Link>
    );
}

export default SidebarItem;
