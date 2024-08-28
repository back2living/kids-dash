import Allowance from "@/components/routes/settings/Allowance";
import Activity from "@/components/routes/settings/Activity";
import RecentActivities from "@/components/routes/settings/RecentActivities";

const Activities = () => {
    return (
        <div className={"max-w-[500px] flex-column gap-6"}>
            <p className={"text-md text-[#868686] font-medium"}>These are your statistics and activities</p>
            <Allowance/>
            <Activity/>
            <RecentActivities />
        </div>
    );
};

export default Activities;