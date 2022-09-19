/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useWindowSize } from "react-use";
import { AnimatePresence } from "framer-motion";

import BlurredScreen from "../screens/BlurredScreen";
import NotificationMenu from "./NotificationMenu";
import { MobileSidebar } from "../sidebar";
import { AiOutlineMenu } from "react-icons/ai";

import { IconButton } from "@material-tailwind/react";
import UserMenu from "./UserMenu";

const Header = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const { width } = useWindowSize();

    const showNavBarHandler = () => {
        setShowNavBar(true);
    };

    const closeNavbarHandler = () => {
        setShowNavBar(false);
    };

    return (
        <>
            <header className="sticky top-0 z-10 flex items-center justify-between bg-white bg-opacity-50 px-5 py-2.5 backdrop-blur lg:px-10 lg:py-6">
                <div className="flex gap-2">
                    {width < 1200 && (
                        <IconButton variant="text" color="gray" className="rounded-full" onClick={showNavBarHandler}>
                            <AiOutlineMenu className="h-6 w-6 text-grey-600" />
                        </IconButton>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    {width >= 768 && <NotificationMenu />}
                    <UserMenu />
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
};

export default Header;
