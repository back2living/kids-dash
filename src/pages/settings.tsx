import DashboardLayout from "@/layouts/DashboardLayout";
import Profile from "@/components/routes/settings/Profile";
import Activities from "@/components/routes/settings/Activities";
import Notifications from "@/components/routes/settings/Notifications";
import {useState} from "react";
import {cn} from "@/lib/utils";

const Settings = () => {
    const [activeTab, setActiveTab] = useState("profile");

    const handleTabClick = (tab: string) => setActiveTab(tab);

    return (
        <DashboardLayout title={"Settings"}>
            <div>
                <div className={"mt-6 flex-center flex-wrap gap-2"}>
                    <button onClick={() => handleTabClick("profile")}
                            className={cn(activeTab === "profile" ? "active-btn" : "inactive-btn")}>Profile
                    </button>
                    <button onClick={() => handleTabClick("activities")}
                            className={cn(activeTab === "activities" ? "active-btn" : "inactive-btn")}>Activities
                    </button>
                    <button onClick={() => handleTabClick("notifications")}
                            className={cn(activeTab === "notifications" ? "active-btn" : "inactive-btn")}>Notifications
                    </button>
                </div>


                <div className={"mt-10"}>
                    {activeTab === "profile" && <Profile/>}
                    {activeTab === "activities" && <Activities/>}
                    {activeTab === "notifications" && <Notifications/>}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;