/* eslint-disable @next/next/no-img-element */
import { AiOutlineUser } from "react-icons/ai";

function Avatar({ size = 10, avatarUrl }) {
    return (
        <span className={`h-${size} w-${size} rounded-full overflow-hidden flex items-center justify-center`}>
            {avatarUrl ? (
                <img className={`h-full w-full object-contain`} src={avatarUrl} alt="" />
            ) : (
                <span className="w-full h-full flex items-center justify-center bg-gray-200">
                    <AiOutlineUser className="text-xl text-gray-500" />
                </span>
            )}
        </span>
    );
}
export default Avatar;
