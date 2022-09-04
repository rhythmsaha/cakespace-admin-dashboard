/* eslint-disable @next/next/no-img-element */

import { FaUser } from "react-icons/fa";

function Avatar({ size = 10, avatarUrl }) {
    return (
        <span
            className={`cursor-pointer border border-gray-50  flex min-w-min items-center justify-center overflow-hidden rounded-full relative h-${size} w-${size} overflow-hidden transition`}
        >
            {avatarUrl ? (
                <img className="h-full w-full bg-white object-contain rounded-full" src={avatarUrl} alt="" />
            ) : (
                <FaUser className="text-grey-500 h-full w-full min-w-min rounded-full p-2.5 bg-white" />
            )}
        </span>
    );
}
export default Avatar;
