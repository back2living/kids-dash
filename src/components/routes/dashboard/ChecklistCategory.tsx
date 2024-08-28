interface ICategory {
    isActive: boolean;
    handleChangeCategory: () => void;
    category: any;
}
export const style = {
    active: "flex-center-between p-3 bg-primary rounded-xl border border-[#E8E8E8] group cursor-pointer",
    inactive: "flex-center-between p-3 rounded-xl group cursor-pointer"
}

const ChecklistCategory = ({isActive, handleChangeCategory, category}: ICategory) => {


    return (
        <div onClick={handleChangeCategory} className={isActive ? style.active : style.inactive}>
            <div className={"text-[#363636] flex-center text-sm gap-1.5"}>
                <span>{category.icon}</span>
                <span>{category.title}</span>
            </div>

            <div className={"flex-center gap-2 relative"}>
                <p className={"text-sm text-secondary"}>{category.checklists.length}</p>
            </div>
        </div>
    );
};

export default ChecklistCategory;