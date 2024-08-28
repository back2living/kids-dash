import InfoModal from "@/components/shared/InfoModal";
import React, {useState} from "react";
import CompletedModal from "@/components/routes/do-cards/modal/CompletedModal";
import Image from "next/image";

type DoCardProps = {
    doCard: any,
}

const CompletedDoCardItem = ({doCard}: DoCardProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)} className={"flex-between cursor-pointer items-start gap-6 bg-primary rounded-xl p-3"}>
                <div className={"flex items-center flex-1 gap-6"}>
                    <div className="relative w-36 h-20 lg:w-[200px] lg:h-[120px] rounded-xl gap-2 bg-white">
                        <Image fill className={"w-full h-full rounded-xl object-cover"} src={doCard.avatar} alt=""/>
                    </div>
                    <div className={"w-full"}>
                        <div className={"flex justify-between"}>
                            <p className={"font-medium text-primary"}>{doCard.purpose}</p>
                        </div>
                        <div className={"flex-center gap-6 my-2"}>
                            <div>
                                <p className={"text-primary text-sm font-medium"}>{doCard.paid}pts</p>
                                <p className={"text-secondary text-xs font-light"}>Saved</p>
                            </div>
                            <div>
                                <p className={"text-primary text-sm font-medium"}>Completed</p>
                                <p className={"text-secondary text-xs font-light"}>Target</p>
                            </div>
                        </div>
                        <div className={"flex-center gap-2 my-2"}>
                            <div className={"bg-[#ECECEC] h-4 flex-1 rounded-xl"}>
                                <p className={"bg-[#09C2B2] h-full w-full rounded-xl"}/>
                            </div>
                            <p className={"text-sm text-[#09C2B2] font-medium"}>100%</p>
                        </div>
                    </div>
                </div>
            </div>

            <InfoModal isOpen={showModal} style={"w-full lg:w-[400px] max-h-full overflow-y-auto"}>
                <CompletedModal doCard={doCard} closeModal={() => setShowModal(false)} />
            </InfoModal>
        </>
    );
};

export default CompletedDoCardItem;