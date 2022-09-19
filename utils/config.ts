import { MdSpeed } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiBell, BiCategory } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

export const API_URLS = {
    login: "/auth/seller/login",
    authorize: "/auth/seller/me",
    forgetPassword: "/auth/seller/forgetpassword",
    resetPassword: "/auth/seller/resetpassword",
    updatePassword: "/auth/seller/changepassword",
    changeEmail: "/auth/seller/changeemail",
    verifyEmail: "/auth/seller/verifyemail",
    updateinfo: "/auth/seller/updateinfo",
    updateNotificationSettings: "/auth/seller/update_notification_settings",
};

export const sidebarConfig = [
    {
        id: "menu1",
        type: "General",
        menus: [
            { id: "link1", title: "Dashboard", icon: MdSpeed, path: "/" },
            { id: "link2", title: "Notifications", icon: BiBell, path: "/notifications", mobileOnly: true },
        ],
    },

    {
        id: "menu2",
        type: "Management",
        menus: [
            { id: "link2", title: "Categories", icon: BiCategory, path: "/categories" },
            { id: "link3", title: "Products", icon: BsFillCartFill, path: "/products" },
            { id: "link4", title: "Invoices", icon: IoDocumentText, path: "/invoices" },
            { id: "link5", title: "Users", icon: FaUserFriends, path: "/users" },
            { id: "link6", title: "Account", icon: AiOutlineUser, path: "/account" },
        ],
    },
];
