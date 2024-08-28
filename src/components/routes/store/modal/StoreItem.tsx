import ModalTop from "@/components/shared/ModalTop";
import {CircleCloseIcon} from "@/components/shared/Svg";
import Image from "next/image";
import {usePurchaseStorefrontItem} from "@/hooks/useStorefront";
import Button from "@/components/shared/Button";
import {useCurrentUser, useSetCurrentUser} from "@/store/auth/authStore";

type Props = {
    closeModal: () => void;
    showSuccessModal: () => void;
    showFailureModal: () => void;
    item?: any
}
const StoreItem = ({closeModal, item, showFailureModal}: Props) => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {isPending, mutate} = usePurchaseStorefrontItem(setCurrentUser,currentUser, closeModal, showFailureModal);

    const handlePurchaseItem = () => {
        mutate({
            id: item?._id,
            points: item?.points
        });
    }

    return (
        <div>
            <ModalTop title={"Store item"} Icon={CircleCloseIcon} closeModal={closeModal}/>

            <div className={"modal-content h-[84vh] flex-column"}>
                <div className={"flex-1"}>
                    <div className={"bg-[#F5F5F5] h-[220px] flex-center justify-center rounded-3xl relative"}>
                        <img className={"w-full h-full object-cover rounded-3xl"} src={item.avatar} alt=""/>
                    </div>

                    <div className={"mt-6"}>
                        <p className={"text-[#515151] font-bold text-lg capitalize"}>{item.name}</p>
                        <div className={"flex-center gap-1"}>
                            <Image width={16} height={16} src="/assets/images/coin.png" alt=""/>
                            <p className={"text-secondary text-lg font-semibold"}>{item.points.toLocaleString("en-US")}</p>
                        </div>
                    </div>

                    <div className={"mt-6"}>
                        <p className={"text-[#868686] text-md font-medium"}>About the item</p>
                        <p className={"text-secondary capitalize mt-1"}>{item.description}</p>
                    </div>
                </div>
                <div className={"flex-column gap-2"}>
                    <Button name={`Get for ${item.points.toLocaleString("en-US")} pts`} isLoading={isPending} isValid={true} handleClick={handlePurchaseItem} className={"primary-btn font-semibold"}/>
                    <button onClick={closeModal} className={"white-btn h-14 font-semibold"}>No thanks</button>
                </div>
            </div>
        </div>
    );
};

export default StoreItem;