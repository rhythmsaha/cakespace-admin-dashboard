import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { FaBell } from "react-icons/fa";

function NotificationMenu() {
    const [notifications, setNotifications] = useState([]);

    const router = useRouter();

    return (
        <Menu as="div" className="relative inline-block">
            <div className="flex items-center justify-center">
                <Menu.Button className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-gray-100 active:bg-gray-200">
                    <FaBell className="h-5 w-5 text-grey-600" />
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
                <Menu.Items className="absolute right-0 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-lg bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {notifications?.length === 0 && (
                        <p className="flex items-center justify-center gap-2 px-4 py-4 text-sm text-gray-500 transition">
                            No notifications available!
                        </p>
                    )}

                    {notifications?.map((notification) => (
                        <Menu.Item key={notification}>
                            {({ active }) => (
                                <button
                                    onClick={() => router.push("/")}
                                    className="flex items-center justify-between gap-2 px-4 py-4 text-left text-sm text-gray-500 transition"
                                >
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem,
                                        tempora.
                                    </p>
                                </button>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default NotificationMenu;
