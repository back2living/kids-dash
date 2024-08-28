const StatusTag = ({status, className}: {status: string; className?: string}) => {
    return (
        <p className={`w-fit capitalize font-semibold ${className ? className : "text-xs xl:text-sm"} ${status === "pending" ? "text-secondary" : status === "processing" ? "text-secondary" : (status === "approved" || status === "paid" || status === "Approved" || status === "successful" || status === "completed") ? "text-[#09C2B2]" : "text-[#F07846]"}`}>
            {status}
        </p>
    );
};

export default StatusTag;