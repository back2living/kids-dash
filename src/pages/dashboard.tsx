import DashboardLayout from "@/layouts/DashboardLayout";
import PointBalance from "@/components/routes/dashboard/PointBalance";
import Checklist from "@/components/routes/dashboard/Checklist";
import {useCurrentUser} from "@/store/auth/authStore";
import {formattedDate} from "@/lib/helpers";
const Dashboard = () => {
    const currentUser = useCurrentUser();
    const currentDate = formattedDate();

    return (
        <DashboardLayout title={"Dashboard"}>
            <div className={"mt-6 lg:mt-0"}>
                <h2 className={"lg:text-xl font-semibold text-primary"}>Good morning, {currentUser?.firstName} 👋🏻</h2>
                <p className={"lg:mt-2 text-secondary text-xs lg:text-md font-semibold"}>It’s {currentDate}</p>

                <PointBalance />

                <Checklist />
            </div>
        </DashboardLayout>
    );
};
export default Dashboard;