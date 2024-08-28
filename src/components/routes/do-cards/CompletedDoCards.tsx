import Image from "next/image";
import CompletedDoCardItem from "@/components/routes/do-cards/CompletedDoCardItem";
import {useFetchKidDoCards} from "@/hooks/useDocards";
import Loader from "@/components/routes/do-cards/Loader";

const CompletedDoCards = () => {
    const {data, isPending} = useFetchKidDoCards("approved", "goal", false);
    const isEmpty = data?.data?.length === 0;

    if (isPending) return <Loader />

    return (
        <div className={"mt-6 flex-column gap-2 h-[50vh] overflow-auto"}>
            {isEmpty && <div className={"flex-column items-center gap-4 py-12"}>
                <Image src={"/assets/images/savings.svg"} alt={"savings"} width={80} height={80}/>
                <p className={"text-primary font-semibold"}>No savings goals completed yet</p>
            </div>}
            {!isEmpty && data?.data?.map((doCard: any) => <div key={doCard._id} className={"max-w-[600px]"}>
                <CompletedDoCardItem doCard={doCard}/>
            </div>)}
        </div>
    );
};

export default CompletedDoCards;