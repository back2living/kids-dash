const notificationsSettings = [
    {
        name: "New tasks",
        checked: true,
    },
    {
        name: "Savings goals progress",
        checked: true,
    },
    {
        name: "New items in store",
        checked: true,
    },
    {
        name: "Marketing campaigns",
        checked: false,
    },{
        name: "Research participation opportunites",
        checked: false,
    },

];

const Notifications = () => {
    return (
        <div className={"lg:w-full max-w-[500px]"}>
            <p className={"text-md text-[#868686] font-medium"}>Manage your push notifications settings</p>
            <div className={"mt-4 flex-column gap-2"}>
                {notificationsSettings.map(item => <div className={"py-4 flex-center-between border-b last:border-b-0 border-[#E8E8E8]"} key={item.name}>
                    <p className={"text-[#515151] font-medium"}>{item.name}</p>
                    <input type="checkbox" checked={item.checked} className={"h-4 w-4 checked:accent-[#09C2B2] accent-[#09C2B2] rounded-[10px]"}/>
                </div>)}
            </div>

        </div>
    );
};

export default Notifications;