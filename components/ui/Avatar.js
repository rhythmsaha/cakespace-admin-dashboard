/* eslint-disable @next/next/no-img-element */
import { AiOutlineUser } from "react-icons/ai";

function Avatar({ size, avatarUrl }) {
    return (
        <span className={`h-${size} w-${size} flex min-w-min items-center justify-center overflow-hidden rounded-full`}>
            {avatarUrl ? (
                <img className="h-full w-full bg-white object-contain" src={avatarUrl} alt="" />
            ) : (
                <AiOutlineUser className="h-full w-full min-w-min p-2 text-xl bg-gray-200 text-gray-500" />
            )}
        </span>
    );
}
export default Avatar;
