import ModalTop from "@/components/shared/ModalTop";
import {CircleCloseIcon} from "@/components/shared/Svg";

const Success = ({closeModal}: {closeModal: () => void;}) => {
    return (
        <div>
            <ModalTop title={""} Icon={CircleCloseIcon} closeModal={closeModal}/>
            <div className={"modal-content flex-column items-center"}>
                <img className={"w-20"} src="/assets/images/success.svg" alt=""/>
                <p className={"text-purple mt-6 mb-4 font-bold text-md"}>Purchase Sent!</p>
                <p className={"text-secondary text-center"}>Your item purchase has been sent to your guardian for approval. </p>
                <button onClick={closeModal} className={"primary-btn mt-6"}>Done</button>
            </div>
        </div>
    );
};

export default Success;