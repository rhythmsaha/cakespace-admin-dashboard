/* eslint-disable @next/next/no-img-element */

import { FaUser } from "react-icons/fa";

function Avatar({ size = 10, avatarUrl }) {
    return (
        <span
            className={`relative flex min-w-min  cursor-pointer items-center justify-center overflow-hidden rounded-full border border-gray-50 h-${size} w-${size} overflow-hidden transition`}
        >
            {avatarUrl ? (
                <img className="h-full w-full rounded-full bg-white object-cover" src={avatarUrl} alt="" />
            ) : (
                <FaUser className="h-full w-full min-w-min rounded-full bg-white p-2.5 text-grey-500" />
            )}
        </span>
    );
}
export default Avatar;
