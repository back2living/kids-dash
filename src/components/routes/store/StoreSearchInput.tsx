const SearchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
        d="M9.58268 17.5003C13.9549 17.5003 17.4993 13.9559 17.4993 9.58366C17.4993 5.2114 13.9549 1.66699 9.58268 1.66699C5.21043 1.66699 1.66602 5.2114 1.66602 9.58366C1.66602 13.9559 5.21043 17.5003 9.58268 17.5003Z"
        stroke="#A1A1A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3327 18.3337L16.666 16.667" stroke="#A1A1A1" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"/>
</svg>

const StoreSearchInput = ({itemName, setItemName}: any) => {
    return (
        <div className={"w-full lg:w-[350px] px-4 py-2 h-12 flex-center gap-2.5 bg-primary rounded-2xl font-semibold"}>
            <span>{SearchIcon}</span>
            <input
                value={itemName}
                onChange={e => setItemName(e.target.value)}
                placeholder={"Search items"}
                type="text"
                className={"w-full h-10 outline-0 border-none outline-none text-secondary text-sm bg-transparent placeholder:text-secondary "}
            />
        </div>
    );
};

export default StoreSearchInput;