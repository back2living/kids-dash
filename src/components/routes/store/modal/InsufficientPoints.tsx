import ModalTop from "@/components/shared/ModalTop";
import {CircleCloseIcon} from "@/components/shared/Svg";
import Image from "next/image";
import {useCurrentUser} from "@/store/auth/authStore";

const InsufficientPoints = ({closeModal}: {closeModal: () => void;}) => {
    const currentUser = useCurrentUser();

    return (
        <div>
            <ModalTop title={"Not enough points"} Icon={CircleCloseIcon} closeModal={closeModal}/>
            <div className={"modal-content flex-column items-center"}>
                <img className={"w-20"} src="/assets/images/insufficient-funds.svg" alt=""/>
                <div className={"flex-center gap-1 mt-6 mb-4"}>
                    <p className={"text-[#515151] text-md font-bold"}>Point balance:</p>
                    <Image width={16} height={16} src="/assets/images/coin.png" alt=""/>
                    <p className={"text-secondary text-lg font-semibold"}>{currentUser?.points?.toLocaleString("en-US")}</p>
                </div>
                <p className={"text-secondary text-center"}>You do not have enough point balance to purchase this item. Earn more by
                    completing your tasks or ask your guardian for a top-up.</p>
                <button onClick={closeModal} className={"white-btn mt-6"}>Done</button>
            </div>
        </div>
    );
};

export default InsufficientPoints;