import {useState} from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import {cn} from "@/lib/utils";
import DoCardGoalsSection from "@/components/routes/do-cards/DoCardGoalsSection";
import DoCardPenaltiesSection from "@/components/routes/do-cards/DoCardPenaltiesSection";

const DoCards = () => {
    const [activeTab, setActiveTab] = useState("goals");
    const handleTabClick = (tab: string) => setActiveTab(tab);

    return (
        <DashboardLayout title={"Do-cards"}>
            <div>
                <div className={"mt-6 flex-center gap-2"}>
                    <button onClick={() => handleTabClick("goals")} className={cn(activeTab === "goals" ? "active-btn" : "inactive-btn")}>Goals</button>
                    <button onClick={() => handleTabClick("penalties")} className={cn(activeTab === "penalties" ? "active-btn" : "inactive-btn")}>Penalties</button>
                </div>


                {activeTab === "goals" && <DoCardGoalsSection/>}
                {activeTab === "penalties" && <DoCardPenaltiesSection/>}
            </div>
        </DashboardLayout>
    );
};

export default DoCards;