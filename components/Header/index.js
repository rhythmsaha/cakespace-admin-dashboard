/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useWindowSize } from "react-use";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import BlurredScreen from "../BlurredScreen";
import {
    Avatar,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";
import NotificationMenu from "./NotificationMenu";
import MobileSidebar from "../sidebar/MobileSidebar";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const Header = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const { width } = useWindowSize();
    const { logout, user } = useAuth();
    const router = useRouter();

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

                    <Menu placement="bottom-end">
                        <MenuHandler>
                            <Button variant="text" color="gray" className="rounded-full p-0 m-0">
                                <Avatar
                                    size="md"
                                    src={
                                        user.avatar ||
                                        "https://cdn.imgbin.com/15/10/13/imgbin-computer-icons-user-profile-avatar-profile-LJbrar10nYY8mYWt0CUXZ8CxE.jpg"
                                    }
                                    alt="avatar"
                                    variant="circular"
                                    className="p-1 sm:p-0"
                                />
                            </Button>
                        </MenuHandler>

                        <MenuList className="border-none shadow-1 rounded-xl p-2">
                            <div className="p-3 border-b border-dashed">
                                <Typography variant="small" className="text-gray-700 leading-tight font-semibold">
                                    {user?.fullName}
                                </Typography>
                                <Typography variant="small" className="text-gray-600">
                                    {user?.email}
                                </Typography>
                            </div>

                            <div className="py-2">
                                <MenuItem className="p-0">
                                    <Button
                                        onClick={() => router.push("/account")}
                                        className="w-full flex items-center justify-start px-3 py-2 gap-2 text-sm capitalize "
                                        variant="text"
                                        color="gray"
                                    >
                                        <AiOutlineSetting />
                                        Account
                                    </Button>
                                </MenuItem>

                                <MenuItem className="p-0">
                                    <Button
                                        onClick={logout}
                                        className="w-full flex items-center justify-start px-3 py-2 gap-2 text-sm capitalize"
                                        variant="text"
                                        color="gray"
                                    >
                                        <MdLogout />
                                        Sign Out
                                    </Button>
                                </MenuItem>
                            </div>
                        </MenuList>
                    </Menu>
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
