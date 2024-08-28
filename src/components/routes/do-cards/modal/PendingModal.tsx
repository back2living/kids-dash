import {CircleCloseIcon} from "@/components/shared/Svg";
import ModalTop from "@/components/shared/ModalTop";
import Image from "next/image";

interface IModal {
    doCard: any;
    closeModal: () => void;
    handleButtonClick: () => void;
}

const PendingModal = ({closeModal, doCard, handleButtonClick}: IModal) => {
    const width = (+doCard?.paid / +doCard.points) * 100;

    return (
        <div>
            <ModalTop title={doCard.purpose} Icon={CircleCloseIcon} closeModal={closeModal}/>

            <div className={"px-6"}>
                <div>
                    <div className={"flex items-center flex-1 gap-4"}>
                        <div className="relative w-[200px] h-[120px] rounded-xl gap-2 bg-white">
                            <Image fill className={"w-full h-full rounded-xl object-cover"} src={doCard.avatar} alt=""/>
                        </div>
                        <div className={"w-full"}>
                            <div className={"flex justify-between"}>
                                <p className={"font-medium text-md text-primary capitalize"}>{doCard.purpose}</p>
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
                            <div>
                                <p className={"text-xs text-primary font-medium mb-1"}>Progress</p>
                                <div className={"flex-center gap-2"}>
                                    <div className={"bg-[#ECECEC] h-4 flex-1 rounded-xl"}>
                                        <p style={{width: `${width}%`}} className={"bg-purple h-full rounded-xl"}/>
                                    </div>
                                    <p className={"text-sm text-purple font-medium"}>{width}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button disabled={!doCard.isAcknowledged} onClick={handleButtonClick} className={"primary-btn my-6"}>Top-up</button>
                <div className={"grid grid-cols-2"}>
                    <div className={"text-sm"}>
                        <p className={"text-secondary"}>Created On</p>
                        <p className={"text-primary font-semibold mt-2"}>3rd May 2024</p>
                    </div>
                    <div className={"text-sm"}>
                        <p className={"text-secondary"}>Created by</p>
                        <p className={"text-primary font-semibold mt-2"}>YOU</p>
                    </div>
                </div>
                <div className={"bg-primary p-4 rounded-[20px] mt-6"}>
                    <p className={"text-primary font-semibold"}>Recent Activities</p>

                    <div className={"mt-6 flex-column gap-4"}>
                    {Array.from({length: 6}).map((item, index) => <div key={index} className={"flex-center-between"}>
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

export default PendingModal;