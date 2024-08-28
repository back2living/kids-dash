import ModalTop from "@/components/shared/ModalTop";
import {CircleCloseIcon} from "@/components/shared/Svg";
import Image from "next/image";
import React from "react";

interface IModal {
    doCard: any;
    closeModal: () => void;
    isMandatory: boolean;
    isCompleted: boolean;
    isOptional: boolean;
    handleTopupClick: () => void;
}

const PenaltyModal = ({doCard, closeModal, isCompleted, isMandatory, isOptional, handleTopupClick}: IModal) => {
    const width = (+doCard?.paid / +doCard.points) * 100;

    return (
        <div>
            <ModalTop title={"Penalty Details"} Icon={CircleCloseIcon} closeModal={closeModal}/>

            <div className={"px-6"}>
                <div className={"w-full"}>
                    <div className={"flex justify-between"}>
                        <p className={"font-medium text-md text-primary"}>{doCard.name}</p>
                    </div>
                    <div className={"flex-center gap-6 my-2"}>
                        <div>
                            <p className={"text-primary text-xs font-medium"}>{doCard.paid}pts</p>
                            <p className={"text-secondary text-xs font-light"}>Saved</p>
                        </div>
                        <div>
                            <p className={"text-primary text-xs font-medium"}>{doCard?.points}pts</p>
                            <p className={"text-secondary text-xs font-light"}>Target</p>
                        </div>
                    </div>
                    {isCompleted && <div>
                        <p className={"text-xs text-primary font-medium mb-1"}>Progress</p>
                        <div className={"flex-center gap-2"}>
                            <div className={"bg-[#ECECEC] h-4 flex-1 rounded-xl"}>
                                <p className={"bg-[#09C2B2] h-full w-full rounded-xl"}/>
                            </div>
                            <p className={"text-sm text-[#09C2B2] font-medium"}>100%</p>
                        </div>
                    </div>}
                    {!isCompleted && <div className={"flex-center gap-2 my-2"}>
                        <div className={"bg-[#ECECEC] h-4 flex-1 rounded-xl"}>
                            <p style={{width: `${width}%`}} className={`${isMandatory ? "bg-yellow" : "bg-purple"} h-full rounded-xl`}/>
                        </div>
                        <p className={`text-sm font-medium ${isMandatory ? "text-yellow" : "text-purple"}`}>{width}%</p>
                    </div>}
                </div>

                {!isCompleted && <button onClick={handleTopupClick} className={`${!isMandatory ? "primary-btn my-6" : "primary-btn bg-yellow hover:bg-amber-400 my-6"}`}>Pay do-card</button>}

                <div className={"grid grid-cols-2 mt-2"}>
                    <div>
                        <div className={"text-sm"}>
                            <p className={"text-secondary"}>Issued On</p>
                            <p className={"text-primary font-semibold mt-2"}>3rd May 2024</p>
                        </div>

                        <div className={"text-sm mt-6"}>
                            <p className={"text-secondary"}>Completed</p>
                            <p className={"text-primary font-semibold mt-2"}>23rd May 2024</p>
                        </div>
                    </div>

                    <div>
                        <div className={"text-sm"}>
                            <p className={"text-secondary"}>Type</p>
                            {isCompleted && <p className={"text-primary font-semibold mt-2"}>Completed</p>}
                            {isMandatory && <p className={"text-primary font-semibold mt-2"}>Mandatory</p>}
                            {isOptional && <p className={"text-primary font-semibold mt-2"}>Optional</p>}
                        </div>
                    </div>
                </div>
                <div className={"bg-primary p-4 rounded-[20px] mt-6"}>
                    <p className={"text-primary font-semibold"}>Recent Activities</p>

                    <div className={"mt-6 flex-column gap-4"}>
                        {Array.from({length: 6}).map((item, index) => <div key={index}
                                                                           className={"flex-center-between"}>
                            <div className={"flex-center gap-2"}>
                                <img className={"w-6 h-6 rounded-full"} src="/assets/images/boy-smile.webp" alt=""/>
                                <div>
                                    <p className={"text-primary text-sm font-semibold"}>Goal Funded</p>
                                    <p className={"text-[10px] text-secondary"}>10 hours ago</p>
                                </div>
                            </div>

                            <div className={"flex-center gap-1"}>
                                <span className={"text-green text-sm font-semibold"}>20</span>
                                <Image width={12} height={12} src="/assets/images/coin.png" alt=""/>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PenaltyModal;