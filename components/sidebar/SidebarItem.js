import { useRouter } from "next/router";

import Link from "../ui/Link";

function SidebarItem({ Icon, title, path, expanded = true }) {
    const router = useRouter();

    return (
        <Link
            href={path}
            className={`min-w-min flex items-center gap-4 px-4 py-[13px] rounded-lg transition-all duration-300 overflow-hidden ${
                router.pathname === path
                    ? "bg-primary-main bg-opacity-[0.08] text-primary-main"
                    : "text-grey-600 hover:bg-grey-100 active:bg-grey-300"
            }`}
        >
            <Icon className="h-[22px] w-[22px] " />
            {expanded && <p className="text-sm leading-[22px]">{title}</p>}
        </Link>
    );
}

export default SidebarItem;
