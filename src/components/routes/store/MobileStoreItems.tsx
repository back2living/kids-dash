import Banner from "@/components/routes/store/Banner";
import StoreSearchInput from "@/components/routes/store/StoreSearchInput";
import ShopCard from "@/components/routes/store/ShopCard";
import {useState} from "react";
import {useFetchAllStorefronts} from "@/hooks/useStorefront";
import Loader from "@/components/routes/store/Loader";

const MobileStoreItems = () => {
    const [itemName, setItemName] = useState("");
    const {data, isPending} = useFetchAllStorefronts();
    const filteredStorefrontItems = data?.data?.flatMap((item: any) => item?.storefronts?.filter((storefrontItem: any) => storefrontItem.name.toLowerCase().includes(itemName.toLowerCase())));

    return (
        <div className={"lg:hidden"}>
            <Banner/>
            <div className={"font-semibold flex-center gap-4 lg:gap-6 my-4"}>
                <StoreSearchInput itemName={itemName} setItemName={setItemName}/>
            </div>

            {isPending && <Loader />}
            {!isPending && <div className={"grid grid-cols-1 xs:grid-cols-2 gap-2"}>
                {filteredStorefrontItems?.map((item: any) => <ShopCard key={item._id} item={item}/>)}
            </div>}
        </div>
    );
};
export default MobileStoreItems;