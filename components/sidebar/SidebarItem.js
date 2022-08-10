import { useRouter } from "next/router";

import Link from "../ui/Link";

function SidebarItem({ Icon, title, path }) {
    const router = useRouter();

    return (
        <Link
            href={path}
            className={`w-full flex items-center gap-4 px-4 py-4 text-sm transition-all duration-300 rounded-lg ${
                router.pathname === path
                    ? "text-emerald-500 bg-emerald-50"
                    : "text-gray-500 active:bg-gray-200 hover:bg-gray-100"
            }`}
        >
            <Icon className="text-xl " />
            <p className="font-semibold">{title}</p>
        </Link>
    );
}

export default SidebarItem;
