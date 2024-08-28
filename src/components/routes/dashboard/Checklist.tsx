import {useEffect, useState} from "react";
import ChecklistCategory from "@/components/routes/dashboard/ChecklistCategory";
import Image from "next/image";
import {useFetchChecklistsCategories, useSubmitChecklist} from "@/hooks/useChecklists";
import Loader from "@/components/routes/dashboard/Loader";

const Checklist = () => {
    const [newActiveCategory, setNewActiveCategory] = useState<any>({});
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<null | any>(null);

    const handleChangeCategory = (category: any, index: number) => {
        setNewActiveCategory(category);
        setActiveTabIndex(index)
    }
    const {isPending, data, isRefetching} = useFetchChecklistsCategories(true);
    const {isPending: isSubmittingChecklist, mutate} = useSubmitChecklist();

    const handleSubmitChecklist = (checklist: any, index: number) => {
        setSelectedIndex(index);
        mutate({
            checklistId: checklist._id
        });
    }

    useEffect(() => {
        if (!isPending || isRefetching) {
            setNewActiveCategory(data?.data[activeTabIndex]);
            setActiveTabIndex(activeTabIndex);
        }
    }, [isPending, isRefetching]);

    return (
        <>
            {isPending && <Loader/>}

            {!isPending && <div className={"mt-10 lg:flex gap-6 rounded-2xl bg-primary p-1.5 hidden min-h-[400px] lg:w-full"}>
                {/*------------ CATEGORIES ------------*/}
                <div
                    className="p-2 min-w-[300px] w-[26.3%] rounded-xl max-w-[310px] bg-white overflow-auto hidden lg:block">
                    <div className={"flex-column gap-2 font-medium"}>
                        {data?.data?.map(((item: any, index: number) => <ChecklistCategory
                            handleChangeCategory={() => handleChangeCategory(item, index)}
                            isActive={newActiveCategory?._id === item?._id}
                            category={item}
                            key={item._id}/>))}
                    </div>
                </div>

                {/*------------ TASKS ------------*/}
                <div className="flex-1 pr-6">
                    <p className={`flex-center gap-1 py-2 px-6 rounded-full text-primary bg-white font-medium w-fit`}>Pending</p>

                    <div className={"mt-4 flex-column gap-2"}>
                        {newActiveCategory?.checklists?.map((checklist: any, index: number) => <div key={checklist?._id}
                                                                                                    className={`flex-center-between p-3 bg-white border border-[#E8E8E8] rounded-xl ${checklist?.hasActiveTask && "opacity-50 cursor-not-allowed"}`}>
                            <div className={"flex-center gap-3 font-medium text-primary"}>
                                <p className={"font-medium text-primary text-sm flex-1 flex-center gap-0.5"}>
                                    <span>{checklist.icon}</span> <span>{checklist.title}</span>
                                </p>
                            </div>

                            <div className={"flex-center gap-5"}>
                                <div className={"flex-center gap-2"}>
                                    <p className={"font-semibold text-secondary text-xs flex-center gap-1"}>
                                        <Image width={12} height={12} src="/assets/images/coin.png" alt=""/>
                                        <span>{checklist?.reward}</span>
                                    </p>
                                    <p className={"font-semibold text-red-600 text-xs"}>
                                        <span>Penalty: {checklist?.penalty}</span>
                                    </p>
                                </div>


                                {!isSubmittingChecklist && !checklist?.hasActiveTask && <button
                                    disabled={checklist?.hasActiveTask}
                                    onClick={() => handleSubmitChecklist(checklist, index)}
                                    className={`text-sm text-green font-semibold`}>Submit</button>
                                }
                                {isSubmittingChecklist && !checklist?.hasActiveTask && <button disabled={true} className={`text-sm text-green font-semibold disabled:cursor-not-allowed ${selectedIndex === index && "animate-pulse"}`}>Submit</button>}
                                {checklist?.hasActiveTask && <button disabled={true} className={`text-sm text-green font-semibold disabled:cursor-not-allowed`}>Submitted</button>}
                            </div>

                        </div>)}
                    </div>
                </div>
            </div>}
        </>
    );
};

export default Checklist;