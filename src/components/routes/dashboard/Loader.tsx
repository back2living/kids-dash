const Loader = () => {
    return (
        <div>
            <div className={"mt-10 rounded-2xl bg-animate hidden md:block min-h-[400px]"}/>

            <div className={"md:hidden mt-8 flex-column gap-2"}>
                {Array.from({length: 5}).map((_, index) => <div key={index} className={"p-2 bg-animate h-11 border border-[#E8E8E8] rounded-xl"}/>)}
            </div>
        </div>
    );
};

export default Loader;