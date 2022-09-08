import { useRouter } from "next/router";

import Link from "../ui/Link";

function SidebarItem({ Icon, title, path, expanded = true }) {
    const router = useRouter();

    return (
        <Link
            href={path}
            className={`flex min-w-min items-center gap-4 overflow-hidden rounded-lg px-4 py-[13px] transition-all duration-300 ${
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
