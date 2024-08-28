import DashboardLayout from "@/layouts/DashboardLayout";
import {useState} from "react";
import {RightArrowIcon} from "@/components/shared/Svg";
import DoCardGoalForm from "@/components/routes/do-cards/modal/DoCardGoalForm";
import {useFetchAllStorefronts} from "@/hooks/useStorefront";
import {useAddDoCard} from "@/hooks/useDocards";
import {useRouter} from "next/router";

const NewDoCardPage = () => {
    const router = useRouter();
    const [showAddGoalForm, setShowAddGoalForm] = useState<boolean>(false);

    const handleRouteToKidProfile = async () => await router.push("/do-cards");

    const {data, isPending} = useFetchAllStorefronts();
    const {mutate, isPending: isAddDoCardPending} = useAddDoCard(handleRouteToKidProfile);

    const handleSubmitDoCard = (item: any) => {
        mutate({
            isMandatory: false,
            type: "goal",
            points: item?.points,
            purpose: item?.name,
            avatar: item?.avatar,
            storefrontItemId: item?._id
        })
    }
    if (isAddDoCardPending || isPending) {
        return <DashboardLayout title={"New Do-Card Goal"}>
            <div className={"max-w-[500px]"}>
                <p className={"mb-6 w-3/5 h-6 rounded-md bg-gray-300 animate-pulse"}/>

                {Array.from({length: 5})?.map((_, index) => <div
                    className={"flex-center-between border-b border-b-[#f5f5f5] p-3"}
                    key={index}>
                    <div className={"flex-center gap-3"}>
                        <div className={"w-12 h-12 rounded-xl bg-gray-300 animate-pulse"}/>
                        <p className={"font-semibold h-4 w-20 bg-gray-300 rounded-sm animate-pulse"}/>
                    </div>

                    <p className={"w-5 h-2.5 rounded-sm bg-gray-300 animate-pulse"}/>
                </div>)}

                <div className={"flex-column items-center gap-6 mt-12"}>
                    <p className={"text-primary w-5 h-2.5 animate-pulse bg-gray-300"}/>

                    <button className={"w-full bg h-16 bg-gray-300 animate-pulse rounded-full"}/>
                </div>
            </div>
        </DashboardLayout>
    }

    return (
        <DashboardLayout title={"New Do-Card Goal"}>
            <div className={"max-w-[500px]"}>
                {!showAddGoalForm && <div>
                    <p className={"text-[#515151] text-lg font-semibold"}>Set towards a storefront item</p>

                    <div className={"flex-column gap-2 max-h-[450px] overflow-auto mt-6"}>
                        {data?.data?.map((item: any) => item?.storefronts?.map((item: any) => <div
                            onClick={() => handleSubmitDoCard(item)}
                            className={"flex-center-between border-b border-b-[#f5f5f5] p-3 cursor-pointer"}
                            key={item?._id}
                        >
                            <div className={"flex-center gap-3"}>
                                <img className={"w-12 h-12 object-cover rounded-xl"} src={item.avatar} alt=""/>
                                <p className={"font-semibold"}>{item.name}</p>
                            </div>

                            <p>{RightArrowIcon}</p>
                        </div>))}
                    </div>

                    <div className={"flex-column items-center gap-6 mt-12"}>
                        <p className={"text-primary font-semibold"}>Or</p>

                        <button onClick={() => setShowAddGoalForm(true)} className={"primary-btn h-16"}>Set your own
                        </button>
                    </div>
                </div>}

                {showAddGoalForm && <DoCardGoalForm setShowAddGoalForm={setShowAddGoalForm}/>}
            </div>

        </DashboardLayout>
    );
};

export default NewDoCardPage;