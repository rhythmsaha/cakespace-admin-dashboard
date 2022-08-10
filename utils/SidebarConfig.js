import { MdSpeed, MdCake } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";

const sidebarConfig = [
    {
        id: "menu1",
        type: "General",
        menus: [{ id: "link1", title: "Dashboard", icon: MdSpeed, path: "/" }],
    },

    {
        id: "menu2",
        type: "Management",
        menus: [
            { id: "link2", title: "User", icon: AiOutlineUser, path: "/user" },
            { id: "link3", title: "Categories", icon: BiCategory, path: "/categories" },
            { id: "link5", title: "Cakes", icon: MdCake, path: "/cakes" },
            { id: "link4", title: "Invoices", icon: IoDocumentText, path: "/invoices" },
        ],
    },
];

export default sidebarConfig;
