import {DeleteIcon} from "@/components/shared/Svg";
import {cn} from "@/lib/utils";
import InfoModal from "@/components/shared/InfoModal";
import React, {useState} from "react";
import PenaltyModal from "@/components/routes/do-cards/modal/PenaltyModal";
import AddPoints from "@/components/routes/do-cards/modal/AddPoints";
import FormModal from "@/components/shared/FormModal";
import {motion} from "framer-motion";

const PenaltyCard = ({isCompleted, doCard, isMandatory, isOptional}: any) => {
    const [showModal, setShowModal] = useState(false);
    const [showTopupModal, setShowTopupModal] = useState(false);

    const width = (doCard?.paid / doCard?.points) * 100;

    const handleShowTopupModal = () => {
        setShowModal(false);
        setShowTopupModal(true);
    }

    return (
        <>
            <div onClick={() => setShowModal(true)} className={cn(
                "bg-primary p-3 rounded-2xl border border-purple cursor-pointer",
                isMandatory && "border border-yellow",
                isCompleted && "border border-green"
            )}>
                <div className={"flex-column gap-2"}>
                    <div className={"font-medium flex-center-between"}>
                        <p className={"text-primary"}>{doCard.purpose}</p>
                        <span>{DeleteIcon}</span>
                    </div>

                    <div className={"flex-center gap-6 text-sm font-medium text-primary"}>
                        <div>
                            <p className={"text-secondary text-xs font-light"}>Paid</p>
                            <p>{isCompleted ? "Completed" : `${doCard?.paid}pts`}</p>
                        </div>
                        <div>
                            <p className={"text-secondary text-xs font-light"}>Points</p>
                            <p>{doCard.points}pts</p>
                        </div>
                    </div>


                    <div className={"flex-center gap-2 my-2"}>
                        <div className={"bg-[#ECECEC] h-4 flex-1 rounded-xl transition-all duration-200 ease-in-out"}>
                            {isCompleted && <p className={"bg-green h-full w-full rounded-xl"}/>}
                            {isMandatory && <motion.p animate={{width: `${width}%`}} style={{width: `${width}%`}} className={`bg-yellow h-full rounded-xl`}/>}
                            {isOptional && <motion.p animate={{width: `${width}%`}} style={{width: `${width}%`}} className={`bg-purple h-full rounded-xl`}/>}
                        </div>

                        {isCompleted && <p className={"text-sm text-green font-medium"}>100%</p>}
                        {isMandatory && <p className={"text-sm text-yellow font-medium"}>{width}%</p>}
                        {isOptional && <p className={"text-sm text-purple font-medium"}>{width}%</p>}
                    </div>
                </div>
            </div>

            <InfoModal isOpen={showModal} style={"w-full lg:w-[400px] max-h-full overflow-y-auto"}>
                <PenaltyModal handleTopupClick={handleShowTopupModal} isOptional={isOptional} isMandatory={isMandatory} isCompleted={isCompleted} doCard={doCard} closeModal={() => setShowModal(false)}/>
            </InfoModal>

            <FormModal isOpen={showTopupModal} style={"w-full lg:w-[450px] max-h-full overflow-y-auto"}>
                <AddPoints status={"pending"} type={"penalty"} isMandatory={isMandatory} doCard={doCard} closeModal={() => setShowTopupModal(false)} />
            </FormModal>
        </>
    );
};

export default PenaltyCard;