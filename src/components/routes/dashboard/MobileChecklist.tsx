import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";
import ChecklistCategory from "@/components/routes/dashboard/ChecklistCategory";
import {mobileVariants} from "@/components/shared/Navbar/MobileNavbar";
import {ChecklistMenuIcon, CircleCloseIcon} from "@/components/shared/Svg";
import Image from "next/image";
import {useSubmitChecklist} from "@/hooks/useChecklists";

const MobileChecklist = ({data, handleChangeCategory, newActiveCategory}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<null | any>(null);

    const {isPending: isSubmittingChecklist, mutate} = useSubmitChecklist();

    const handleSubmitChecklist = (checklist: any, index: number) => {
        setSelectedIndex(index);
        mutate({
            checklistId: checklist._id
        });
    }

    return (
        <div className={"mt-12"}>

            <div className={"text-primary text-sm font-medium flex-center gap-2.5"}>
                <button onClick={() => setIsOpen(true)}>{ChecklistMenuIcon}</button>
                <p>{newActiveCategory?.title}</p>
            </div>

            <div className={"mt-4 flex-column gap-2"}>
            {newActiveCategory?.checklists?.map((checklist: any, index: number) => <div key={checklist?._id} className={`p-3 bg-white border border-[#E8E8E8] rounded-xl ${checklist?.hasActiveTask && "opacity-50 cursor-not-allowed"}`}>
                <p className={"font-medium text-primary text-sm flex-1 flex-center gap-0.5"}>
                    <span>{checklist.icon}</span> <span>{checklist.title}</span>
                </p>

                <div className={"flex-center-between gap-5"}>
                    <div className={"flex-center gap-2"}>
                        <p className={"font-semibold text-secondary text-xs flex-center gap-1"}>
                            <Image width={12} height={12} src="/assets/images/coin.png" alt=""/>
                            <span>{checklist?.reward}</span>
                        </p>
                        <p className={"font-semibold text-orange text-xs flex-center gap-1"}>
                            <Image width={12} height={12} src="/assets/images/penalty-coin.svg" alt=""/>
                            <span>- {checklist?.penalty}</span>
                        </p>
                    </div>


                    {!isSubmittingChecklist && !checklist?.hasActiveTask && <button disabled={checklist?.hasActiveTask} onClick={() => handleSubmitChecklist(checklist, index)} className={`text-sm text-orange font-semibold`}>Submit Task</button>}
                    {isSubmittingChecklist && !checklist?.hasActiveTask && <button disabled={true} className={`text-sm text-orange font-semibold disabled:cursor-not-allowed ${selectedIndex === index && "animate-pulse"}`}>Submit</button>}
                    {checklist?.hasActiveTask && <button disabled={true} className={`text-sm text-primary font-semibold disabled:cursor-not-allowed`}>Submitted</button>}
                </div>

            </div>)}
            </div>

            <AnimatePresence>
                {isOpen && <motion.div className={"fixed p-4 bg-black/40 top-0 left-0 z-10 h-full w-full"}
                                       initial={{opacity: 0, x: -15}} animate={{opacity: 1, x: 0}}
                                       exit={{opacity: 0, x: -15}}>
                    <motion.div className={"bg-white mx-auto rounded-2xl h-full max-w-[500px] p-4"}
                                variants={mobileVariants} initial={"initial"} animate={"final"} exit={{opacity: 0}}>
                        <div className={"relative"}>
                            <button onClick={() => setIsOpen(false)} className={"absolute top-2 right-2"}>{CircleCloseIcon}</button>
                            <p className={"p-4"}>Categories</p>

                            <div className={"flex-column gap-2 font-medium"}>
                                {data?.data?.map(((item: any, index: number) => <ChecklistCategory
                                    handleChangeCategory={() => {
                                        handleChangeCategory(item, index);
                                        // setIsOpen(false)
                                    }}
                                    isActive={newActiveCategory?._id === item?._id}
                                    category={item}
                                    key={item._id}/>))}
                            </div>

                        </div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </div>
    );
};
export default MobileChecklist;