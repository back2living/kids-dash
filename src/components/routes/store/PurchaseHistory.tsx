import Image from "next/image";
import InfoModal from "@/components/shared/InfoModal";
import {useState} from "react";
import PurchasedItem from "@/components/routes/store/modal/PurchasedItem";
import StatusTag from "@/components/shared/StatusTag";
import {useFetchStorefrontPurchases} from "@/hooks/useStorefront";

const Loader = () => {
    return <div className={"mt-6 flex-column gap-4"}>
        {Array.from({length: 4}).map((_, index) => <div
            className={"flex-center-between bg-animate rounded-lg cursor-pointer h-10"} key={index}/>)}
    </div>
}

const PurchaseHistory = () => {
    const [purchasedItem, setPurchasedItem] = useState<null | any>(null);
    const {isPending, data} = useFetchStorefrontPurchases();
    const isEmpty = data?.data?.length === 0;

    return (
        <>
            <div className={"flex-1"}>
                <p className={"text-[18px] text-primary font-semibold"}>Purchase History</p>

                {isPending && <Loader/>}
                {isEmpty && <div className={"mt-6 bg-primary gap-4 flex-column items-center justify-center rounded-3xl h-[100px]"}>
                    <p className={"font-semibold text-primary"}>You are yet to make a purchase.</p>
                </div>}

                {!isPending && !isEmpty && <div className={"h-[70vh] overflow-auto"}>
                    <div className={"mt-6 flex-column gap-4"}>
                        {data?.data?.map((item: any) => <div onClick={() => setPurchasedItem(item)} className={"bg-primary p-3 lg:p-0 rounded-2xl lg:bg-white flex-center-between cursor-pointer"} key={item._id}>
                            <div className={"flex-center gap-4"}>
                                <div className={"w-20 h-12"}>
                                    <img src={item.itemInfo.avatar} className={"w-full h-full object-cover rounded-lg"}
                                         alt=""/>
                                </div>
                                <div>
                                    <p className={"text-primary font-semibold capitalize"}>{item.itemInfo?.name}</p>
                                    <div className={"flex-center gap-1"}>
                                        <Image width={16} height={16} src="/assets/images/coin.png" alt=""/>
                                        <p className={"text-secondary text-sm font-semibold"}>{item?.itemInfo?.points}</p>
                                    </div>
                                </div>
                            </div>
                            <StatusTag status={item.status}/>
                        </div>)}
                    </div>
                </div>}
            </div>

            <InfoModal isOpen={purchasedItem} style={"w-full lg:w-[400px] max-h-full overflow-y-auto"}>
                <PurchasedItem item={purchasedItem} closeModal={() => setPurchasedItem(null)}/>
            </InfoModal>
        </>
    );
};

export default PurchaseHistory;