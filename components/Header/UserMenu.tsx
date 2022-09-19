import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const UserMenu = () => {
    const { logout, user } = useAuth();
    const router = useRouter();

    return (
        <Menu placement="bottom-end">
            <MenuHandler>
                <Button variant="text" color="gray" className="m-0 rounded-full p-0">
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

            <MenuList className="rounded-xl border-none p-2 shadow-1">
                <div className="border-b border-dashed p-3">
                    <Typography variant="small" className="font-semibold leading-tight text-gray-700">
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
                            className="flex w-full items-center justify-start gap-2 px-3 py-2 text-sm capitalize "
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
                            className="flex w-full items-center justify-start gap-2 px-3 py-2 text-sm capitalize"
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
    );
};
export default UserMenu;
