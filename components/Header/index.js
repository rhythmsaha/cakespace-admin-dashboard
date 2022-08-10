/* eslint-disable @next/next/no-img-element */
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../ui/Avatar";
import { useWindowSize } from "react-use";
import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "../ui/Link";

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
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex justify-center rounded-full ">
                                <Avatar size="9" />
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
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        <Link href="/user" className="text-gray-700 block px-4 py-2 text-sm">
                                            settings
                                        </Link>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <Link href="/login" className="text-gray-700 block px-4 py-2 text-sm">
                                            Sign Out
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </header>
        </>
    );
}
export default Header;
