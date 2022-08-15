/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../ui/Avatar";
import { useWindowSize } from "react-use";
import useAuth from "../../hooks/useAuth";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BlurredScreen from "../BlurredScreen";
import { FaBell } from "react-icons/fa";

function Header() {
    const [showNavBar, setShowNavBar] = useState(false);

    const { width } = useWindowSize();
    const { logout } = useAuth();

    const showNavBarHandler = () => {
        setShowNavBar(true);
    };

    const closeNavbarHandler = () => {
        setShowNavBar(false);
    };

    return (
        <>
            <header className="sticky top-0 flex items-center justify-between px-5 lg:px-10 py-2.5 lg:py-6 bg-white bg-opacity-50 backdrop-blur z-10">
                <div className="flex gap-2">
                    {width < 1200 && (
                        <button
                            className="flex items-center justify-center h-10 w-10 rounded-full transition hover:bg-gray-100 active:bg-gray-200"
                            onClick={showNavBarHandler}
                        >
                            <AiOutlineMenu className="h-6 w-6 text-grey-600" />
                        </button>
                    )}
                </div>

                <div className="ml-auto flex items-center gap-3">
                    <button className="flex items-center justify-center h-11 w-11 rounded-full transition hover:bg-gray-100 active:bg-gray-200">
                        <FaBell className="h-5 w-5 text-grey-600" />
                    </button>

                    <button>
                        <Avatar
                            size="11"
                            avatarUrl="https://scontent.frdp4-1.fna.fbcdn.net/v/t1.6435-1/183710831_2965464620344936_3915218019543181030_n.jpg?stp=c750.932.777.777a_dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SoYPlP8pJVEAX9GFufv&_nc_ht=scontent.frdp4-1.fna&oh=00_AT-iXYnKZ5W5I4dnccw12LPJlg_QYfU_tLgi9z2xPvia2g&oe=631BEE13"
                        />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {showNavBar && (
                    <BlurredScreen>
                        <MobileSidebar onClose={closeNavbarHandler} />
                    </BlurredScreen>
                )}
            </AnimatePresence>
        </>
    );
}
export default Header;
