/* eslint-disable @next/next/no-img-element */
import useAuth from "../../hooks/useAuth";
import { Avatar, Typography } from "@material-tailwind/react";
import Link from "../ui/Link";

function User({ expanded = true }) {
    const { user } = useAuth();

    return (
        <Link
            href="/account"
            className={`mt-6 flex min-h-[76px] min-w-min items-center gap-4 overflow-hidden rounded-xl py-4 ${
                expanded ? "bg-grey-500 bg-opacity-[0.08] px-5" : " justify-center"
            }`}
        >
            <Avatar alt="avatar" variant="circular" size="md" src={user.avatar} />

            {expanded && (
                <div className="min-w-min overflow-hidden">
                    <Typography variant="small" className="min-w-min whitespace-nowrap font-semibold text-grey-800">
                        {user?.fullName}
                    </Typography>

                    <Typography variant="small" className="font-normal text-grey-600">
                        {user.role}
                    </Typography>
                </div>
            )}
        </Link>
    );
}
export default User;
