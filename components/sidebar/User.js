/* eslint-disable @next/next/no-img-element */
import useAuth from "../../hooks/useAuth";
import Avatar from "../ui/Avatar";
import Link from "../ui/Link";

function User({ expanded = true }) {
    const { user } = useAuth();

    return (
        <Link
            href="/account"
            className={`mt-6 flex min-h-[76px] min-w-min items-center gap-4 overflow-hidden rounded-xl py-4 ${
                expanded ? "bg-grey-500 bg-opacity-[0.08] px-5" : "justify-center"
            }`}
        >
            <Avatar size={10} avatarUrl={user?.avatar} />

            {expanded && (
                <div className="min-w-min overflow-hidden text-sm leading-[22px]">
                    <h3 className="min-w-min whitespace-nowrap font-semibold text-grey-800">{user?.fullName}</h3>
                    <p className="font-normal text-grey-600">admin</p>
                </div>
            )}
        </Link>
    );
}
export default User;
