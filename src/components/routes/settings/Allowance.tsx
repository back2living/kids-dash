import {BigDollarIcon, WalletIcon} from "@/components/shared/Svg";
import {useState} from "react";

const balanceStyle = "border-2 border-[#ECECEC] bg-white rounded-xl p-4 flex gap-4 flex-1"
const Allowance = () => {
    const [showPointModal, setShowPointModal] = useState<boolean>(false);
    return (
        <div>
            <div>
                <p className={"text-md text-primary font-semibold"}>Allowance</p>

                <div className={"flex-center gap-6"}>
                    <div className={balanceStyle}>
                        <span>{WalletIcon}</span>
                        <div>
                            <p className={"text-sm text-secondary"}>Balance</p>
                            <p className={"text-primary font-semibold"}>5,000 pts</p>
                        </div>
                    </div>
                    <div className={balanceStyle}>
                        <span>{BigDollarIcon}</span>
                        <div>
                            <p className={"text-sm text-secondary"}>Spent</p>
                            <p className={"text-primary font-semibold"}>500 pts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allowance;