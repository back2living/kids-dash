import Image from "next/image";
import {completedDoCardsData} from "@/constants/data";
import PenaltyCard from "@/components/routes/do-cards/PenaltyCard";
import {useFetchKidDoCards} from "@/hooks/useDocards";
import {useCurrentUser} from "@/store/auth/authStore";
import PenaltyLoader from "@/components/routes/do-cards/PenaltyLoader";

const CompletedDoCardPenaltySection = () => {
    const currentUser = useCurrentUser();
    const {data, isPending} = useFetchKidDoCards("approved", "penalty");
    const isEmpty = data?.data?.length === 0;
    if (isPending) return <PenaltyLoader />

    return (
        <div>
            {isEmpty && <div className={"flex-column items-center gap-4 py-12"}>
                <Image src={"/assets/images/NoPenalty.svg"} alt={"savings"} width={80} height={80}/>
                <p className={"text-primary font-semibold"}>{currentUser?.firstName} has no active Do Card</p>
            </div>}

            {!isEmpty && <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-6"}>
                {data?.data?.map((doCard: any, index: number) => <PenaltyCard isCompleted doCard={doCard} key={index} />)}
            </div>}
        </div>
    );
};

export default CompletedDoCardPenaltySection;