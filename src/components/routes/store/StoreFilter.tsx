import {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {SelectedIcon} from "@/components/shared/Svg";

const filterArray = ["All items", "Wears", "Hobby", "Toys"];

const StoreFilter = () => {
    const [selected, setSelected] = useState(filterArray[0]);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div>
            <div>
                <Listbox value={selected} onChange={e => {
                    setSelected(e);
                }}>
                    <div className="relative">
                        <Listbox.Button onClick={() => setIsFocus(!isFocus)} className={`px-2 lg:px-4 h-12 w-[125px] flex-center justify-center gap-2 bg-primary rounded-2xl border-none`}>
                            <span className={`block font-medium text-secondary text-sm`}>{selected ? selected : "Ongoing"}</span>
                            <span className="block pointer-events-none">{isFocus ? <ChevronUp color={"#868686"}/> : <ChevronDown color={"#868686"}/>}</span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="select-dropdown-box w-[250px] h-fit z-50 left-0">
                                <div>
                                    <p className={"text-[#868686] px-4 py-2 font-medium text-sm"}>Filter</p>
                                    <div className="border border-gray-100 my-2"/>
                                    <div className={"px-1"}>
                                        {filterArray?.map((item, personIdx) => (
                                            <Listbox.Option
                                                onChange={e => console.log("e", e)}
                                                onClick={() => setIsFocus(false)}
                                                key={personIdx}
                                                className={({active}) => `rounded-lg relative cursor-default py-2 text-primary  ${active ? "bg-[#F9FAFB]" : ""}`}
                                                value={item}
                                            >
                                                {({selected}) => (
                                                    <p className={`flex-center-between gap-2 px-3`}>
                                                        <span className={`block text-primary capitalize dark:text-secondary-dark text-sm font-medium ${selected && "dark:text-[##363636]"}`}>{item}</span>
                                                        {selected && <span>{SelectedIcon}</span>}
                                                    </p>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </div>
                                </div>
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            </div>
        </div>
    );
};

export default StoreFilter;