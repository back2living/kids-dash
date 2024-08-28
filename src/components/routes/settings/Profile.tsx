import {LogoutIcon} from "@/components/shared/Svg";
import {useState} from "react";
import FormModal from "@/components/shared/FormModal";
import LogoutModal from "@/components/shared/LogoutModal";
import {useCurrentUser} from "@/store/auth/authStore";
import {formatDOB} from "@/lib/helpers";

const Profile = () => {
    const currentUser = useCurrentUser();
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
    const dob = formatDOB(currentUser?.dob)

    return (
        <div className={"max-w-[500px]"}>
            <div>
                <div className={"flex-column gap-6"}>
                    <div className={"flex-center relative items-end gap-5"}>
                        <div>
                            <p className={"auth-label"}>Photo</p>
                            <img className={"rounded-full w-20 h-20 object-cover"} src={currentUser?.avatar ? currentUser?.avatar : "/assets/images/kid-avatar.svg"} alt=""/>
                        </div>
                    </div>
                    <div className={"flex-column gap-2"}>
                        <label htmlFor="">Username</label>
                        <input disabled={true} value={currentUser?.username} className={"auth-input disabled:cursor-not-allowed"} type="text"/>
                    </div>
                    <div className={"lg:flex-center flex-column lg:flex-row gap-4"}>
                        <div className={"flex-1"}>
                            <label className={"auth-label"} htmlFor="">First name</label>
                            <input disabled={true} value={currentUser?.firstName} className={"auth-input disabled:cursor-not-allowed"}
                                   type="text"/>
                        </div>
                        <div className={"flex-1"}>
                            <label className={"auth-label"} htmlFor="">Last name</label>
                            <input disabled={true} value={currentUser?.lastName} className={"auth-input disabled:cursor-not-allowed"}
                                   type="text"/>
                        </div>
                    </div>
                    <div className={"flex-column gap-2"}>
                        <label htmlFor="">Date of birth</label>
                        <input disabled={true} value={dob} className={"auth-input disabled:cursor-not-allowed"} type="email"/>
                    </div>
                </div>

                <div className="border border-[#F7F7F7] my-10"/>

                <div>
                    <p className={"text-md text-primary font-semibold"}>Reset Password</p>
                    <p className={"mt-2 text-secondary"}>Ask your guardian for your password.</p>
                </div>

                <button onClick={() => setShowLogoutModal(true)} className={"flex-center gap-1 text-orange font-semibold mt-10"}><span>{LogoutIcon}</span>LOGOUT</button>
            </div>

            <FormModal isOpen={showLogoutModal} style={"lg:w-[450px] w-[92%]  rounded-3xl mb-4 lg:rounded-t-3xl max-h-full overflow-y-auto lg:mb-0"}>
                <LogoutModal closeModal={() => setShowLogoutModal(false)} />
            </FormModal>
        </div>
    );
};

export default Profile;