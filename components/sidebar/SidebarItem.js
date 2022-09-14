import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";

function SidebarItem({ Icon, title, path, expanded = true }) {
    const router = useRouter();

    const linkClickHandler = () => router.push(path);

    return (
        <Button
            variant="text"
            color={"gray"}
            fullWidth
            onClick={linkClickHandler}
            className={`flex min-w-min items-center gap-4 overflow-hidden rounded-lg px-4 py-[13px] transition-all duration-300 capitalize hover:bg-gray-100 ${
                router.pathname === path ? "bg-green-500 bg-opacity-10 text-green-500" : "text-grey-600 "
            }`}
        >
            <Icon className="h-[22px] w-[22px] " />
            {expanded && <p className="text-sm tracking-wide font-medium">{title}</p>}
        </Button>
    );
}

export default SidebarItem;
