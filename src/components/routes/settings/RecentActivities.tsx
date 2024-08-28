import {recentActivitiesData} from "@/constants/data";
import Image from "next/image";

const RecentActivities = () => {
    return (
        <div className={"bg-primary p-4 rounded-[20px]"}>
            <p className={"text-primary font-semibold"}>Recent Activities</p>
            <div className={"mt-6 flex-column gap-4"}>
                {recentActivitiesData.map((item, index) => <div key={index} className={"flex-center-between"}>
                    <div>
                        <p className={"text-sm text-primary font-semibold"}>{item.name}</p>
                        <p className={"text-[10px] text-secondary "}>{item.date}</p>
                    </div>

                    <div className={"flex-center gap-1"}>
                        <p className={"text-green text-sm font-semibold"}>{item.amount}</p>
                        <Image width={12} height={12} src="/assets/images/coin.png" alt=""/>
                    </div>
                </div> )}
            </div>
        </div>
    );
};

export default RecentActivities;