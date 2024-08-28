const Loader = () => {
    return (
        <div className={"flex-column gap-2"}>
            {Array.from({length: 3}).map((_, index) => <div key={index} className={"max-w-[600px] h-36 bg-animate rounded-xl"}/>)}
        </div>
    );
};

export default Loader;