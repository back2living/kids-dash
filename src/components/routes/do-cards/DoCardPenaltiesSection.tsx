import {useState} from "react";
import FilterDropdown from "@/components/shared/FilterDropdown";
import {DoCardIcon} from "@/components/shared/Svg";
import OptionalDoCardPenaltySection from "@/components/routes/do-cards/OptionalDoCardPenaltySection";
import MandatoryDoCardPenaltySection from "@/components/routes/do-cards/MandatoryDoCardPenaltySection";
import CompletedDoCardPenaltySection from "@/components/routes/do-cards/CompletedDoCardPenaltySection";

const filterArray = ["Optional", "Mandatory", "Completed"];


const DoCardPenaltiesSection = () => {
    const [selectedFilter, setSelectedFilter] = useState(filterArray[0]);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div>
            <div className={"flex-center-between my-6"}>
                <p className={"flex-center gap-2 font-medium text-lg"}>Do-Card Penalties <span>{DoCardIcon}</span></p>

                <FilterDropdown filterOptionArray={filterArray} setSelected={setSelectedFilter} selected={selectedFilter} setIsFocus={setIsFocus} isFocus={isFocus}/>
            </div>

            {selectedFilter === "Optional" && <OptionalDoCardPenaltySection/>}
            {selectedFilter === "Mandatory" && <MandatoryDoCardPenaltySection/>}
            {selectedFilter === "Completed" && <CompletedDoCardPenaltySection/>}
        </div>
    );
};

export default DoCardPenaltiesSection;