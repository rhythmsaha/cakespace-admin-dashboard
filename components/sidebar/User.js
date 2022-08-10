/* eslint-disable @next/next/no-img-element */
import Avatar from "../ui/Avatar";
import Link from "../ui/Link";

function User() {
    return (
        <Link href="/user" className="mx-auto flex bg-gray-100 py-5 px-5 gap-4 items-center rounded-xl">
            <Avatar size={10} />

            <div>
                <h3 className="font-bold text-sm text-gray-600">Minimal UI</h3>
                <p className="text-sm font-medium text-gray-500">admin</p>
            </div>
        </Link>
    );
}
export default User;
