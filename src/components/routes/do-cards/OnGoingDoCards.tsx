import OngoingDoCardItem from "@/components/routes/do-cards/OngoingDoCardItem";
import {useFetchKidDoCards} from "@/hooks/useDocards";
import Image from "next/image";
import Loader from "@/components/routes/do-cards/Loader";

const OngoingDoCards = () => {
    const {data, isPending} = useFetchKidDoCards("processing", "goal", false);
    const isEmpty = data?.data?.length === 0;

    if (isPending) return <Loader />

    return (
        <div className={"max-w-[600px] h-[50vh] overflow-auto"}>
            {isEmpty && <div className={"flex-column items-center gap-4 py-12"}>
                <Image src={"/assets/images/savings.svg"} alt={"savings"} width={80} height={80}/>
                <p className={"text-primary font-semibold"}>No do cards yet</p>
            </div>}

            <div className={"mt-6 flex-column gap-2"}>
                {data?.data?.map((doCard: any, index: number) => <OngoingDoCardItem doCard={doCard} key={index}/>)}
            </div>
        </div>
    );
};

export default OngoingDoCards;