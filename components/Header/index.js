/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../ui/Avatar";
import { useWindowSize } from "react-use";
import { useEffect } from "react";

function Header() {
    const { width } = useWindowSize();

    useEffect(() => {
        console.log("Run!");
    }, []);

    return (
        <>
            <header className="sticky top-0 px-4 h-20 flex items-center justify-between lg:px-8 backdrop-blur-sm z-10 bg-white bg-opacity-80">
                <div className="flex gap-2">
                    {width < 1200 && (
                        <button className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition rounded-full active:bg-gray-200">
                            <AiOutlineMenu className="text-xl" />
                        </button>
                    )}
                </div>

                <div className="px-2 ml-auto h-9">
                    <button>
                        <Avatar size="9" />
                    </button>
                </div>
            </header>
        </>
    );
}
export default Header;
