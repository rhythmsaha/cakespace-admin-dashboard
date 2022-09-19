import { Menu, MenuHandler, MenuList, MenuItem, IconButton, Typography, Tooltip } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { FaBell } from "react-icons/fa";
import { TbChecks } from "react-icons/tb";

function NotificationMenu({ notifications }) {
    const router = useRouter();

    return (
        <Menu placement="bottom-end">
            <MenuHandler>
                <IconButton variant="text" color="gray" className="rounded-full">
                    <FaBell className="h-5 w-5 text-grey-600" />
                </IconButton>
            </MenuHandler>

            <MenuList className="w-full max-w-sm rounded-xl border-none p-2 shadow-1">
                <div className="flex items-center justify-between border-b border-dashed p-3">
                    <div>
                        <Typography variant="small" className="font-semibold text-gray-700">
                            Notifications
                        </Typography>
                        <Typography variant="small" className="text-gray-600">
                            You have 0 unread messages
                        </Typography>
                    </div>

                    {notifications && (
                        <Tooltip
                            content="Mark all as read"
                            className="bg-gray-800 text-xs text-white"
                            placement="bottom"
                        >
                            <IconButton variant="text" color="green" className="rounded-full p-0">
                                <TbChecks className="text-lg " />
                            </IconButton>
                        </Tooltip>
                    )}
                </div>

                {!notifications && <div className="py-4 text-center">No notifications available</div>}
            </MenuList>
        </Menu>
    );
}

export default NotificationMenu;

/* <MenuItem>Menu Item 1</MenuItem>
<MenuItem>Menu Item 2</MenuItem>
<MenuItem>Menu Item 3</MenuItem> */
