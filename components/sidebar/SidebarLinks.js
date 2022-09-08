import { useWindowSize } from "react-use";
import { sidebarConfig } from "../../utils/config";
import SidebarItem from "./SidebarItem";

function SidebarLinks({ expanded = true }) {
    const { width } = useWindowSize();

    return (
        <section className="-mx-1 mt-4 space-y-1">
            {sidebarConfig.map(({ id, menus, type }) => (
                <nav key={id}>
                    <div className="h-[50px] w-full">
                        {expanded && (
                            <h2 className="px-4 pt-6 pb-2 text-xs font-bold uppercase leading-[18px] text-grey-800">
                                {type}
                            </h2>
                        )}
                    </div>

                    <div className="space-y-1">
                        {menus.map((link) => {
                            if (link.mobileOnly && width >= 768) return;
                            return (
                                <SidebarItem
                                    Icon={link.icon}
                                    key={link.id}
                                    title={link.title}
                                    path={link.path}
                                    expanded={expanded}
                                />
                            );
                        })}
                    </div>
                </nav>
            ))}
        </section>
    );
}
export default SidebarLinks;
