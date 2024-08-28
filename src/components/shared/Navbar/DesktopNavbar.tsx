import {BellIcon, NavbarArrowLeftIcon} from "@/components/shared/Svg";
import {NavbarProp} from "@/components/shared/Navbar/MobileNavbar";
import {useState} from "react";
import Image from "next/image";
import FormModal from "@/components/shared/FormModal";
import LogoutModal from "@/components/shared/LogoutModal";
import UserProfile from "@/components/shared/Navbar/UserProfile";
import {useCurrentUser, useSetCurrentUser} from "@/store/auth/authStore";
import {useAuthenticatedUser} from "@/hooks/useUser";
import {useRouter} from "next/router";

const DesktopNavbar = ({title, setShowNotifications}: NavbarProp) => {
    const router = useRouter();
    const handleGoToPreviousPage = () => router.back();
    const [showUserProfile, setShowUserProfile] = useState<boolean>(false);
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

    const currentUser = useCurrentUser();
    const {data: user} = useAuthenticatedUser();

    const setCurrentUser = useSetCurrentUser();
    setCurrentUser(user);

    const showArrowIcon = (title === "New Do-Card Goal");


    return (
        <header className={"hidden lg:block relative"}>
            <nav className={"h-20 flex-center-between mb-6"}>
                <div className={"flex-center gap-2.5"}>
                    {showArrowIcon &&
                        <button className={"cursor-pointer"} onClick={handleGoToPreviousPage}>{NavbarArrowLeftIcon}</button>}
                    <p className={"text-secondary text-md font-semibold uppercase"}>{title}</p>
                </div>

                <div className={"flex-center gap-4"}>
                    <div className={"p-2 bg-primary rounded-full flex-center gap-1"}>
                        <Image width={16} height={16} src="/assets/images/coin.png" alt=""/>
                        <span className={"text-primary font-semibold"}>{currentUser?.points?.toLocaleString("en-US")}</span>
                    </div>
                    <button onClick={() => setShowNotifications(true)}>{BellIcon}</button>
                    <button className={showUserProfile ? "pointer-events-none" : ""} onClick={() => setShowUserProfile(!showUserProfile)}>
                        <img className={"w-8 h-8 rounded-full"} src={currentUser?.avatar || "/assets/images/kid-avatar.svg"} alt="avatar"/>
                    </button>
                </div>
            </nav>

            {/*---------- USER PROFILE-----------*/}
            <UserProfile setShowLogoutModal={setShowLogoutModal} showUserProfile={showUserProfile} setShowUserProfile={setShowUserProfile}/>
            <FormModal isOpen={showLogoutModal} style={"lg:w-[450px] w-[92%]  rounded-3xl mb-4 lg:rounded-t-3xl max-h-full overflow-y-auto lg:mb-0"}>
                <LogoutModal closeModal={() => setShowLogoutModal(false)} />
            </FormModal>
        </header>
    );
};

export default DesktopNavbar;