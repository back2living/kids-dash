import React, {useState} from "react";
import {cn} from "@/lib/utils";
import OngoingDoCards from "@/components/routes/do-cards/OnGoingDoCards";
import CompletedDoCards from "@/components/routes/do-cards/CompletedDoCards";
import PendingDoCards from "@/components/routes/do-cards/PendingDoCards";
import Link from "next/link";

const DoCardGoalsSection = () => {
    const [activeTab, setActiveTab] = useState("pending");
    const handleTabClick = (tab: string) => setActiveTab(tab);

    return (
        <div>
            <div className={"flex-center-between mt-6"}>
                <p className={"text-lg font-semibold text-[#515151]"}>Do-card goals</p>
                <Link className={"text-purple font-semibold"} href={`/new-do-card`}>New do-card goal +</Link>
            </div>

            <div className={"my-6 flex-center gap-2 font-medium"}>
                <button onClick={() => handleTabClick("pending")}
                        className={cn(activeTab === "pending" ? "inactive-btn text-primary" : "inactive-btn bg-white text-secondary")}>Pending
                </button>
                <button onClick={() => handleTabClick("ongoing")}
                        className={cn(activeTab === "ongoing" ? "inactive-btn text-primary" : "inactive-btn bg-white text-secondary")}>Ongoing
                </button>
                <button onClick={() => handleTabClick("completed")}
                        className={cn(activeTab === "completed" ? "inactive-btn text-primary" : "inactive-btn bg-white text-secondary")}>Completed
                </button>
            </div>

            {activeTab === "pending" && <PendingDoCards/>}
            {activeTab === "ongoing" && <OngoingDoCards/>}
            {activeTab === "completed" && <CompletedDoCards/>}
        </div>
    );
};

export default DoCardGoalsSection;