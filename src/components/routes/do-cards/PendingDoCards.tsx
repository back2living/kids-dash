import Image from "next/image";
import PendingDoCardItem from "@/components/routes/do-cards/PendingDoCardItem";
import {useFetchKidDoCards} from "@/hooks/useDocards";
import {useCurrentUser} from "@/store/auth/authStore";
import Loader from "@/components/routes/do-cards/Loader";

const PendingDoCards = () => {
    const currentUser = useCurrentUser();
    const {data, isPending} = useFetchKidDoCards("pending", "goal", false);
    const isEmpty = data?.data?.length === 0;

    if (isPending) return <Loader />

    return (
        <div className={"h-[50vh] overflow-auto"}>
            <div className={"flex-column gap-2"}>
                {isEmpty && <div className={"flex-column items-center gap-4 py-12"}>
                    <Image src={"/assets/images/savings.svg"} alt={"savings"} width={80} height={80}/>
                    <p className={"text-primary font-semibold"}>{currentUser?.firstName} has no pending Do Cards.</p>
                </div>}
                {!isEmpty && data?.data?.map((doCard: any) => <div key={doCard?._id} className={"max-w-[600px]"}>
                    <PendingDoCardItem doCard={doCard} key={doCard._id}/>
                </div>)}
            </div>
        </div>
    );
};

export default PendingDoCards;