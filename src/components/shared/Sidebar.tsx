import Link from "next/link";
import {sidebarLinks} from "@/constants/data";
import {cn} from "@/lib/utils";
import {useRouter} from "next/router";

const Sidebar = () => {
    const {pathname} = useRouter();
    const isDoCardsActive = pathname === "/do-cards" || pathname === "/new-do-card";

    return (
        <div className={"sidebar-wrapper hidden lg:block"}>
            <div className={"w-full"}>
                <Link href={"/"} className="p-6 inline-block">
                    <img src="/assets/images/kids-logo.svg" alt=""/>
                </Link>

                {/*dashboard-links*/}
                <div className={"mt-[100px] px-3 flex-column gap-3"}>
                    {sidebarLinks.slice(0, 1).map((link) => <Link href={link.path} key={link.name} className={"flex-center gap-3 px-4 py-[14px]"}>
                        <span className={`${link.path === pathname && "active-icon"}`}>{link.icon}</span>
                        <span className={cn("text-secondary font-semibold uppercase", link.path === pathname && "text-purple")}>{link.name}</span>
                    </Link>)}
                    {sidebarLinks.slice(1, 2).map((link) => <Link href={link.path} key={link.name} className={"flex-center gap-3 px-4 py-[14px]"}>
                        <span className={`${isDoCardsActive && "active-icon"}`}>{link.icon}</span>
                        <span className={cn("text-secondary font-semibold uppercase", isDoCardsActive && "text-purple")}>{link.name}</span>
                    </Link>)}
                    {sidebarLinks.slice(2, 6).map((link) => <Link href={link.path} key={link.name} className={"flex-center gap-3 px-4 py-[14px]"}>
                        <span className={`${link.path === pathname && "active-icon"}`}>{link.icon}</span>
                        <span className={cn("text-secondary font-semibold uppercase", link.path === pathname && "text-purple")}>{link.name}</span>
                    </Link>)}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;