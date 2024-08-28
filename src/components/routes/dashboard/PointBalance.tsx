import {useCurrentUser} from "@/store/auth/authStore";
import {useFetchChecklistsCategories} from "@/hooks/useChecklists";

const PointBalance = () => {
    const currentUser = useCurrentUser();
    const {isPending, data} = useFetchChecklistsCategories(true);
    const pendingChecklists = data?.data?.map((checklist: any) => checklist?.checklists?.map((checklist: any) => checklist))?.flat();

    return (
        <>
            <div className={"mt-6 relative p-6"}>
                <img src="/assets/images/dash-bg.png" className={"absolute h-full inset-0 w-full rounded-3xl object-cover object-center"} alt=""/>
                <div className={"flex-column gap-4 lg:gap-6 relative"}>
                    <p className={"text-[#EFE2FC]"}>Point balance</p>
                    <p className={"text-xl lg:text-[40px] lg:leading-[40px] text-white font-bold"}>{currentUser?.points?.toLocaleString("en-US")}</p>
                    <div className={"flex-center gap-2"}>
                        <div className={"dashboard-task-btn py-2 px-3 text-white w-[160px]"}>
                            {isPending && <p className={"font-bold h-3 w-5 bg-purple rounded-sm animate-pulse"}/>}
                            {!isPending && <p className={"font-bold"}>{pendingChecklists?.length}</p>}
                            <p className={"text-sm font-medium mt-2"}>⏳ Pending tasks</p>
                        </div>
                        <div className={"dashboard-task-btn py-2 px-3 text-white w-[160px]"}>
                            <p className={"font-bold"}>0</p>
                            <p className={"text-sm font-medium mt-2"}>✅ Completed tasks</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PointBalance;