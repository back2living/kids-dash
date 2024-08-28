import {useState} from "react";
import InfoModal from "@/components/shared/InfoModal";
import StoreItem from "@/components/routes/store/modal/StoreItem";
import FormModal from "@/components/shared/FormModal";
import InsufficientPoints from "@/components/routes/store/modal/InsufficientPoints";
import Success from "@/components/routes/store/modal/Success";

type Props = {
    item: {
        name: string;
        description: string;
        avatar: string;
        points: number;
        category: string;
    }
}

const ShopCard = ({item}: Props) => {
    const [selectedItem, setSelectedItem] = useState<null | any>(null);
    const [showInsufficientFundsModal, setShowInsufficientFundsModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    return (
        <>
            <div className={"cursor-pointer"} onClick={() => setSelectedItem(item)}>
                <div className={"relative group"}>
                    <div className={"w-full h-[150px] lg:h-[250px] xs:rounded-xl tablet:rounded-2xl lg:rounded-3xl"}>
                        <img className={"w-full h-full object-cover xs:rounded-xl tablet:rounded-2xl lg:rounded-3xl transition duration-300 group-hover:opacity-80"} src={item.avatar} alt=""/>
                    </div>
                </div>
                <div className={"mt-2 lg:mt-4"}>
                    <p className={"text-[#515151] font-bold capitalize"}>{item.name}</p>
                    <p className={"text-secondary-dark text-sm font-medium mt-2"}>{item.points} pts</p>
                </div>
            </div>

            <InfoModal isOpen={selectedItem} style={"w-full lg:w-[400px] h-full overflow-y-auto"}>
                <StoreItem showSuccessModal={() => setShowSuccessModal(true)} showFailureModal={() => {
                    setShowInsufficientFundsModal(true);
                    setSelectedItem(null);
                }} closeModal={() => setSelectedItem(null)} item={selectedItem}/>
            </InfoModal>
            <FormModal isOpen={showInsufficientFundsModal} style={"lg:w-[450px] w-[92%]  rounded-3xl mb-4 lg:rounded-t-3xl max-h-full overflow-y-auto lg:mb-0"}>
                <InsufficientPoints closeModal={() => setShowInsufficientFundsModal(false)} />
            </FormModal>
            <FormModal isOpen={showSuccessModal} style={"lg:w-[450px] w-[92%]  rounded-3xl mb-4 lg:rounded-t-3xl max-h-full overflow-y-auto lg:mb-0"}>
                <Success closeModal={() => setShowSuccessModal(false)} />
            </FormModal>
        </>
    );
};
export default ShopCard;