import React, {useState} from "react";
import InfoModal from "@/components/shared/InfoModal";
import FormModal from "@/components/shared/FormModal";
import PendingModal from "@/components/routes/do-cards/modal/PendingModal";
import AddPoints from "@/components/routes/do-cards/modal/AddPoints";
import Image from "next/image";
import {motion} from "framer-motion";

export type DoCardProps = {
    doCard: {
        itemImg: string;
        name: string;
        points: number | string;
        target: number | string;
        profileImage?: string;
        avatar?: string;
        paid: number;
        purpose: string;
        status: string;
    },
}

const PendingDoCardItem = ({doCard}: DoCardProps) => {
    const [showModal, setShowModal] = useState(false);
    const [showTopupModal, setShowTopupModal] = useState(false);

    const handleShowTopupModal = () => {
        setShowModal(false);
        setShowTopupModal(true);
    }
    const width = (+doCard?.paid / +doCard.points) * 100

    return (
        <>
            <div onClick={() => setShowModal(true)} className={"flex-between cursor-pointer items-start gap-6 bg-primary rounded-xl p-3"}>
                <div className={"flex items-center flex-1 gap-6"}>
                    <div className="w-36 h-20 lg:w-[200px] lg:h-[120px] rounded-xl gap-2 bg-white relative">
                        <Image fill className={"w-full h-full rounded-xl object-cover"} src={doCard?.avatar || ""} alt=""/>
                    </div>
                    <div className={"w-full"}>
                        <p className={"font-medium capitalize text-primary"}>{doCard.purpose}</p>
                        <div className={"flex-center gap-6 my-2"}>
                            <div>
                                <p className={"text-primary text-sm font-medium"}>{doCard.points}pts</p>
                                <p className={"text-secondary text-xs font-light"}>Target</p>
                            </div>
                            <div>
                                <p className={"text-primary text-sm font-medium capitalize"}>{doCard?.status}</p>
                                <p className={"text-secondary text-xs font-light"}>Status</p>
                            </div>
                        </div>
                        <div className={"my-2"}>
                            <div className={"bg-[#ECECEC] h-4 flex-1 rounded-xl"}>
                                <motion.p animate={{width: `${width}%`}} style={{width: `${width}%`}}
                                          className={"bg-purple h-full rounded-xl"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InfoModal isOpen={showModal} style={"w-full lg:w-[400px] max-h-full overflow-y-auto"}>
                <PendingModal handleButtonClick={handleShowTopupModal} doCard={doCard} closeModal={() => setShowModal(false)} />
            </InfoModal>

            <FormModal isOpen={showTopupModal} style={"w-full lg:w-[450px] max-h-full overflow-y-auto"}>
                <AddPoints status={"pending"} type={"goal"} isMandatory={false} doCard={doCard} closeModal={() => setShowTopupModal(false)} />
            </FormModal>
        </>
    );
};

export default PendingDoCardItem;