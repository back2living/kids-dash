import {CircleCloseIcon} from "@/components/shared/Svg";
import ModalTop from "@/components/shared/ModalTop";
import Image from "next/image";
import StatusTag from "@/components/shared/StatusTag";

const CopyIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
        d="M7.40065 15.1663H4.60065C1.99398 15.1663 0.833984 14.0063 0.833984 11.3997V8.59967C0.833984 5.99301 1.99398 4.83301 4.60065 4.83301H7.40065C10.0073 4.83301 11.1673 5.99301 11.1673 8.59967V11.3997C11.1673 14.0063 10.0073 15.1663 7.40065 15.1663ZM4.60065 5.83301C2.53398 5.83301 1.83398 6.53301 1.83398 8.59967V11.3997C1.83398 13.4663 2.53398 14.1663 4.60065 14.1663H7.40065C9.46732 14.1663 10.1673 13.4663 10.1673 11.3997V8.59967C10.1673 6.53301 9.46732 5.83301 7.40065 5.83301H4.60065Z"
        fill="#AF70EE"/>
    <path
        d="M11.4007 11.1663H10.6673C10.394 11.1663 10.1673 10.9397 10.1673 10.6663V8.59967C10.1673 6.53301 9.46732 5.83301 7.40065 5.83301H5.33398C5.06065 5.83301 4.83398 5.60634 4.83398 5.33301V4.59967C4.83398 1.99301 5.99398 0.833008 8.60065 0.833008H11.4007C14.0073 0.833008 15.1673 1.99301 15.1673 4.59967V7.39967C15.1673 10.0063 14.0073 11.1663 11.4007 11.1663ZM11.1673 10.1663H11.4007C13.4673 10.1663 14.1673 9.46634 14.1673 7.39967V4.59967C14.1673 2.53301 13.4673 1.83301 11.4007 1.83301H8.60065C6.53398 1.83301 5.83398 2.53301 5.83398 4.59967V4.83301H7.40065C10.0073 4.83301 11.1673 5.99301 11.1673 8.59967V10.1663Z"
        fill="#AF70EE"/>
</svg>

type Props = {
    closeModal: () => void;
    item?: any
}

const PurchasedItem = ({closeModal, item}: Props) => {
    // TODO: format the date.
    // TODO: copy the ID.

    return (
        <div className={"h-full pb-6 xl:pb-0"}>
            <ModalTop title={"Item purchase"} Icon={CircleCloseIcon} closeModal={closeModal}/>

            <div className={"modal-content h-[84vh] flex-column"}>
                <div className={"flex-1"}>
                    <div className={"bg-[#F5F5F5] h-[220px] flex-center justify-center rounded-3xl relative"}>
                        <img className={"w-full h-full object-cover rounded-3xl"} src={item.itemInfo.avatar} alt=""/>
                    </div>
                    <p className={"text-[#515151] font-bold mt-6 text-lg"}>{item.item}</p>
                    <div className={"flex-center-between mt-6"}>
                        <div>
                            <p className={"text-secondary"}>Transaction ID</p>
                            <p className={"text-primary font-medium"}>{item?._id}</p>
                        </div>
                        <button className={"flex-center py-1 px-2 gap-0.5 font-medium text-sm text-purple bg-[#EFE2FC] rounded-full"}>{CopyIcon} Copy</button>
                    </div>
                    <div className={"my-6 lg:my-10"}>
                        <p className={"text-secondary"}>Date and time</p>
                        <p className={"text-md text-primary font-medium"}>10 October, 2023 • 9:52 AM</p>
                    </div>
                    <div className={"flex gap-10"}>
                        <div className={"flex-1"}>
                            <p className={"text-secondary"}>Transaction Status</p>
                            <StatusTag status={item.status} className={"text-md mt-2"}/>
                        </div>
                        <div className={"flex-1"}>
                            <p className={"text-secondary"}>Item Price</p>
                            <div className={"flex-center gap-1 mt-2"}>
                                <Image width={24} height={24} src="/assets/images/coin.png" alt=""/>
                                <p className={"text-secondary text-md font-semibold"}>{item.points?.toLocaleString("en-US")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex-column gap-2 mt-12 xl:mt-0"}>
                    <button onClick={closeModal} className={"white-btn h-14 font-semibold"}>Done</button>
                </div>
            </div>
        </div>
    );
};

export default PurchasedItem;