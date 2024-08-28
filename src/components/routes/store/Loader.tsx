const Loader = () => {
    return (
        <div className={"grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"}>
            {Array.from({length: 4})?.map((_, index: number) => <div key={index}>
                <div className={"relative group"}>
                    <div className={"w-full h-[150px] lg:h-[250px] bg-animate relative rounded-3xl"}/>
                </div>

                <div className={"mt-4"}>
                    <p className={"bg-animate h-4 w-40 rounded-sm"}/>
                    <p className={"bg-animate h-3 w-14 rounded-sm mt-2"}/>
                </div>

            </div>)}
        </div>
    );
};

export default Loader;