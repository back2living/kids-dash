import {cn} from "@/lib/utils";
import Link from "next/link";
import {LogoutIcon, ProfileSettingsIcon, SupportIcon} from "@/components/shared/Svg";
import {Dispatch, SetStateAction} from "react";
import {useClickOutside} from "@/hooks/useClickoutside";
import {useCurrentUser} from "@/store/auth/authStore";

interface IUSerProfile {
    showUserProfile: boolean;
    setShowUserProfile: Dispatch<SetStateAction<boolean>>;
    setShowLogoutModal: Dispatch<SetStateAction<boolean>>;
}

const UserProfile = ({showUserProfile, setShowUserProfile, setShowLogoutModal}: IUSerProfile) => {
    const ref = useClickOutside<HTMLDivElement>(() => setShowUserProfile(false));
    const currentUser = useCurrentUser();

    return (
        <div ref={ref} className={cn(
            "opacity-0 top-[-1000px] transition-opacity duration-300 absolute",
            showUserProfile && "opacity-100 transition-opacity duration-300 top-14 lg:top-20 bg-white shadow text-[#868686] w-60 right-0 absolute z-50 border-2 border-[#ECECEC] rounded-2xl font-medium"
        )}>
            <div className={"p-4 flex-center gap-2 border-b border-b-[#ECECEC]"}>
                <div className="left">
                    <img className={"w-[33px] rounded-full"} src={currentUser?.avatar || "/assets/images/avatar.svg"} alt=""/>
                </div>
                <div className="right flex-column">
                    <span className={"text-primary"}>{currentUser?.firstName} {currentUser?.lastName}</span>
                    <span>Kid</span>
                </div>
            </div>
            <Link href={"/settings"} className={"flex-center gap-2 p-4"}>
                <span>{ProfileSettingsIcon}</span>
                <span>Settings</span>
            </Link>
            <div className={"flex-center gap-2 p-4 "}>
                <p>{SupportIcon}</p>
                <p>Contact Support</p>
            </div>
            <button onClick={(e) => {
                e.stopPropagation();
                setShowUserProfile(false)
                setShowLogoutModal(true);
            }} className={"flex-center gap-2 p-4 w-full border-t border-t-[#ECECEC]"}>
                <p>{LogoutIcon}</p>
                <p className={"text-orange"}>LOG OUT</p>
            </button>
        </div>
    );
};

export default UserProfile;