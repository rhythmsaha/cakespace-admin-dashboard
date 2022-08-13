import sidebarConfig from "../../utils/sidebarConfig";
import SidebarItem from "./SidebarItem";

function SidebarLinks({ expanded = true }) {
    return (
        <>
            {sidebarConfig.map(({ id, menus, type }) => (
                <nav className="p-4" key={id}>
                    {expanded && <h2 className="px-4 text-xs font-bold uppercase text-gray-700">{type}</h2>}
                    {!expanded && <hr className="my-4 border-gray-100" />}

                    <div className="mt-2 space-y-1">
                        {menus.map((link) => (
                            <SidebarItem
                                Icon={link.icon}
                                key={link.id}
                                title={link.title}
                                path={link.path}
                                expanded={expanded}
                            />
                        ))}
                    </div>
                </nav>
            ))}
        </>
    );
}
export default SidebarLinks;
