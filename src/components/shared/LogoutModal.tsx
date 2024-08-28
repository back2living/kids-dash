import {CircleCloseIcon, PurpleSpinnerIcon, SpinnerIcon} from "@/components/shared/Svg";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/router";
import {useSetCurrentUser} from "@/store/auth/authStore";
import Cookies from "js-cookie";
import {logout} from "@/api/auth.api";
import toast from "react-hot-toast";

const LogoutModal = ({closeModal}: {closeModal: () => void}) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const setCurrentUser = useSetCurrentUser();

    const {mutate, isPending} = useMutation({
        mutationFn: () => logout(),
        // onMutate: async () => {
        //     queryClient.clear();
        //     Cookies.remove("pgCurrentUser");
        //     await router.push("/signin");
        // },
        onSuccess: async (data: any) => {
            toast.success(data.message);
            queryClient.clear();
            Cookies.remove("pgKidCurrentUser");
            setCurrentUser(null);
            await router.push("/signin");
        },
        onError: async () => {
            queryClient.clear();
            Cookies.remove("pgKidCurrentUser");
            await router.push("/signin");
        }
    });
    const handleLogout = () => mutate();

    return (
        <div className={"relative modal-content pt-6"}>
            <button onClick={closeModal} className={"absolute top-4 right-4"}>{CircleCloseIcon}</button>

            <div className={"flex-column gap-6"}>
                <img className={"w-20 h-20 mx-auto"} src="/assets/images/profile-remove.svg" alt=""/>

                <div>
                    <h3 className={"form-modal-title text-center"}>LOG OUT?</h3>
                    <p className={"text-secondary text-center mt-4 "}>Are you sure you want to logout of this device?</p>
                </div>

                {isPending && <button className={"white-btn flex-center justify-center"}><span className={"animate-spin"}>{PurpleSpinnerIcon}</span></button>}
                {!isPending && <button onClick={handleLogout} className={"white-btn"}>Logout</button>}
            </div>
        </div>
    );
};
export default LogoutModal;