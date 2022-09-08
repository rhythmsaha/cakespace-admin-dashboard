/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { useWindowSize } from "react-use";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import { AnimatePresence } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import BlurredScreen from "../BlurredScreen";
import Avatar from "../ui/Avatar";
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
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 active:bg-gray-200"
                            onClick={showNavBarHandler}
                        >
                            <AiOutlineMenu className="h-6 w-6 text-grey-600" />
                        </button>
                    )}
                </div>

                <div className="ml-auto flex items-center gap-3">
                    {width >= 768 && <NotificationMenu />}

                    <Menu as="div" className="relative inline-block">
                        <div className="flex items-center justify-center">
                            <Menu.Button className="rounded-full  ring-gray-200 ring-offset-2 transition hover:bg-gray-100 active:ring-2 ">
                                <Avatar size={11} avatarUrl={user?.avatar} />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={() => router.push("/account")}
                                                className={`${
                                                    active ? "bg-primary-main text-white" : "text-gray-500"
                                                } flex w-full items-center gap-2 rounded-md px-4 py-2 text-base font-semibold transition`}
                                            >
                                                <AiOutlineSetting />
                                                Account
                                            </button>
                                        )}
                                    </Menu.Item>

                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={logout}
                                                className={`${
                                                    active ? "bg-primary-main text-white" : "text-gray-500"
                                                } flex w-full items-center gap-2 rounded-md px-4 py-2 text-base font-semibold transition`}
                                            >
                                                <MdLogout />
                                                Sign Out
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
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
