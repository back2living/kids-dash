const Banner = () => {
    return (
        <div className={"max-w-[1300px] w-full relative px-5 py-5 lg:p-10"}>
            <img src="/assets/images/store-bg.png" className={"absolute h-full inset-0 w-full rounded-2xl lg:rounded-3xl object-cover object-center"} alt=""/>
            <div className={"flex-column gap-2 lg:gap-6 relative"}>
                <p className={"text-white text-sm lg:text-lg"}>Welcome to the store.</p>
                <p className={"lg:text-xl text-white font-semibold"}>What would you like to <br/> purchase?</p>
            </div>

        </div>
    );
};

export default Banner;