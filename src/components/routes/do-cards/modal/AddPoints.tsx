import {CloseIcon} from "@/components/shared/Svg";
import ModalTop from "@/components/shared/ModalTop";
import Button from "@/components/shared/Button";
import {useState} from "react";
import {useAddDoCardPayment} from "@/hooks/useDocards";

interface IAddPoints {
    closeModal: () => void;
    doCard: any;
    status: string;
    type:string;
    isMandatory: boolean;
}

const AddPoints = ({closeModal, doCard, type, status, isMandatory}: IAddPoints) => {
    const [points, setPoints] = useState(0)
    const {mutate, isPending} = useAddDoCardPayment(closeModal)

    const handleAddKidPoints = () => {
        mutate({
            doCardId: doCard?._id,
            points,
            status,
            type,
            isMandatory
        })
    }

    return (
        <div>
            <ModalTop title={"Do-card top up"} Icon={CloseIcon} closeModal={closeModal} />

            <div className={"modal-content"}>
                <div>
                    <label className={"auth-label text-[#515151]"} htmlFor="">Points</label>
                    <div className={"w-full relative rounded-[100px]"}>
                        <input onChange={e => setPoints(+e.target.value)} className={`password-input`} type={"number"} placeholder={"How much"}/>
                        <p className={"w-fit absolute top-1/2 right-4 -translate-y-1/2 text-[#B1B1B1] font-medium"}>pts</p>
                    </div>
                </div>

                <div className={"flex gap-2 mt-10"}>
                    <button onClick={closeModal} className={"white-btn"}>Cancel</button>
                    <Button handleClick={handleAddKidPoints} isLoading={isPending} isValid={points > 0} name={"Add point"} />
                </div>
            </div>
        </div>
    );
};

export default AddPoints;