import DashboardLayout from "@/layouts/DashboardLayout";
import ShopCard from "@/components/routes/store/ShopCard";
import Banner from "@/components/routes/store/Banner";
import PurchaseHistory from "@/components/routes/store/PurchaseHistory";
import StoreSearchInput from "@/components/routes/store/StoreSearchInput";
import {cn} from "@/lib/utils";
import {useState} from "react";
import MobileStoreItems from "@/components/routes/store/MobileStoreItems";
import {useFetchAllStorefronts} from "@/hooks/useStorefront";
import Loader from "@/components/routes/store/Loader";

const Store = () => {
    const [activeTab, setActiveTab] = useState("store");
    const [itemName, setItemName] = useState("");

    const handleTabClick = (tab: string) => setActiveTab(tab);

    const {data, isPending} = useFetchAllStorefronts();
    const filteredStorefrontItems = data?.data?.flatMap((item: any) => item?.storefronts?.filter((storefrontItem: any) => storefrontItem.name.toLowerCase().includes(itemName.toLowerCase())));


    return (
        <DashboardLayout title={"Store"}>
            <div className={"lg:flex gap-10 hidden"}>
                <div className={"w-[69%]"}>
                    <Banner/>
                    <div className={"lg:flex-center-between my-10"}>
                        <p className={"text-md lg:text-lg font-semibold text-[#515151]"}>Store items</p>

                        <StoreSearchInput itemName={itemName} setItemName={setItemName}/>
                    </div>
                    <div className={"h-[50vh] overflow-auto"}>
                        {isPending && <Loader />}

                        {!isPending && <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"}>
                            {filteredStorefrontItems?.map((item: any) => <ShopCard key={item._id} item={item}/>)}
                        </div>}
                    </div>
                </div>
                <PurchaseHistory/>
            </div>


            <div className={"lg:hidden"}>
                <div className={"mt-6 flex-center gap-2 mb-4"}>
                    <button onClick={() => handleTabClick("store")} className={cn(activeTab === "store" ? "active-btn" : "inactive-btn")}>Store Items
                    </button>
                    <button onClick={() => handleTabClick("history")} className={cn(activeTab === "history" ? "active-btn" : "inactive-btn bg-none")}>Purchase
                        history
                    </button>
                </div>

                {activeTab === "store" && <MobileStoreItems />}
                {activeTab === "history" && <PurchaseHistory />}
            </div>
        </DashboardLayout>
    );
};

export default Store;