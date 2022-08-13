/* eslint-disable @next/next/no-img-element */
import useAuth from "../../hooks/useAuth";
import Avatar from "../ui/Avatar";
import Link from "../ui/Link";

function User({ expanded = true }) {
    const { user } = useAuth();

    return (
        <Link
            href="/account"
            className={`mx-auto flex min-w-min items-center overflow-hidden rounded-xl ${
                expanded ? "gap-4 bg-gray-100 py-5 px-5" : "justify-center"
            }`}
        >
            <Avatar
                size={10}
                avatarUrl="https://scontent.frdp4-1.fna.fbcdn.net/v/t1.6435-1/183710831_2965464620344936_3915218019543181030_n.jpg?stp=c750.932.777.777a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SoYPlP8pJVEAX9GFufv&_nc_ht=scontent.frdp4-1.fna&oh=00_AT-iXYnKZ5W5I4dnccw12LPJlg_QYfU_tLgi9z2xPvia2g&oe=631BEE13"
            />

            {expanded && (
                <div className="min-w-min overflow-hidden">
                    <h3 className="min-w-min whitespace-nowrap text-sm font-bold text-gray-600">{user?.fullName}</h3>
                    <p className="text-sm font-medium text-gray-500">admin</p>
                </div>
            )}
        </Link>
    );
}
export default User;
