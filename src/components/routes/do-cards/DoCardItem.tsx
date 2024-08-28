import InfoModal from "@/components/shared/InfoModal";
import React, {useState} from "react";
import ModalTop from "@/components/shared/ModalTop";
import {CircleCloseIcon} from "@/components/shared/Svg";

type GoalProps = {
    goal: {
        itemImg: string;
        name: string;
        points: number | string;
        target: number | string;
        profileImage?: string;
    },
    isCompleted?: boolean;
}

const DoCardItem = ({goal, isCompleted}: GoalProps) => {
    const width = (+goal?.points / +goal.target) * 100;

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)} className={"flex-between items-start gap-6 bg-primary rounded-xl p-3"}>
                <div className={"flex items-center flex-1 gap-6"}>
                    <div className="w-36 h-20 lg:w-[200px] lg:h-[120px] rounded-xl gap-2 bg-white">
                        <img className={"w-full h-full rounded-xl object-cover"} src={goal.itemImg} alt=""/>
                    </div>
                    <div className={"w-full"}>
                        <div className={"flex justify-between"}>
                            <p className={"font-medium text-primary"}>{goal.name}</p>
                        </div>
                        <div className={"flex-center gap-6 my-2"}>
                            <div>
                                <p className={"text-primary text-sm font-medium"}>{goal.points}pts</p>
                                <p className={"text-secondary text-xs font-light"}>Saved</p>
                            </div>
                            <div>
                                {!isCompleted && <p className={"text-primary text-sm font-medium"}>{goal.target}pts</p>}
                                {isCompleted && <p className={"text-primary text-sm font-medium"}>Completed</p>}
                                <p className={"text-secondary text-xs font-light"}>Target</p>
                            </div>
                        </div>
                        <div className={"flex-center gap-2 my-2"}>
                            <div className={"bg-[#ECECEC] h-4 flex-1 rounded-xl"}>
                                {isCompleted && <p className={"bg-[#09C2B2] h-full w-full rounded-xl"}/>}
                                {!isCompleted &&
                                    <p style={{width: `${width}%`}} className={"bg-purple h-full rounded-xl"}/>}
                            </div>
                            {isCompleted && <p className={"text-sm text-[#09C2B2] font-medium"}>100%</p>}
                            {!isCompleted && <p className={"text-sm text-purple font-medium"}>{width}%</p>}
                        </div>
                    </div>
                </div>
            </div>

            <InfoModal isOpen={showModal} style={"w-full lg:w-[400px] h-full overflow-y-auto"}>
                <ModalTop title={"Buy a Bicycle"} Icon={CircleCloseIcon} closeModal={() => {}} />
            </InfoModal>
        </>
    );
};

export default DoCardItem;