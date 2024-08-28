import React, {Dispatch, SetStateAction, useState} from "react";
import {storeCategoriesData} from "@/constants/data";
import {EditItemIcon, SelectedCategoryIcon} from "@/components/shared/Svg";

interface IAddDoCard {
    setShowAddGoalForm: Dispatch<SetStateAction<boolean>>
}

const DoCardGoalForm = ({setShowAddGoalForm}: IAddDoCard) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<null | number>(null);
    const [storeFrontItem, setStoreFrontItem] = useState<null | {}>(null);
    const [file, setFile] = useState<File | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedImage = e.target.files[0];
            setFile(selectedImage);
            // setSelectedImage([...e.target.files]); // If you need to handle multiple files
        } else {
            // Handle the case where no files are selected
            console.log("No files selected.");
            setFile(null);
        }
    }

    return (
        <div>
            <div className={"max-w-[500px]"}>
                <p className={"text-md font-semibold text-primary"}>Set a new do-card goal</p>
                <div className={"flex-column gap-6 mt-6"}>
                    <div>
                        <label className="auth-label">Target Points</label>
                        <input className={"auth-input"} type="text" placeholder={"Buy a Shoe"}/>
                    </div>


                    <div className={"w-full"}>
                        <label className="auth-label">Choose Category</label>
                        <div className={"rounded-3xl bg-primary p-1 flex-center overflow-x-auto gap-2"}>
                            {storeCategoriesData?.map(((item, index) => <div onClick={() => {
                                setStoreFrontItem(item);
                                setSelectedCategoryIndex(index);
                            }} key={item.img} className="relative min-w-[150px] h-[120px]">
                                {selectedCategoryIndex === index &&
                                    <span className={"absolute top-2 right-2"}>{SelectedCategoryIcon}</span>}
                                <img className="w-full h-full object-cover" src={item.img} alt={item.category}/>
                            </div>))}
                        </div>
                    </div>

                    <div>
                        <label className="auth-label">Target Points</label>
                        <input className={"auth-input"} type="text" placeholder={"😊 e.g sweep the floor"}/>
                    </div>

                    <div>
                        <label className="auth-label">Add a picture <span className={"text-[#B1B1B1]"}>(Optional)</span></label>
                        <label htmlFor="images" className={"bg-primary block p-4 rounded-2xl border border-dashed h-[152px]"}>
                            {file &&
                                <div className={"w-[150px] h-[120px] bg-[#f5f5f5] relative flex-center justify-center rounded-3xl"}>
                                    <label htmlFor="images" className={"edit-icon"}>
                                        <span onClick={() => setShowModal(true)}>{EditItemIcon}</span>
                                        <input accept=".jpeg, .jpg, .png" multiple onChange={(e) => handleImageUpload(e)} id={"images"} type="file" hidden/>
                                    </label>
                                    <img src={URL.createObjectURL(file)} alt="goal-image" className="w-full h-full object-cover rounded-[20px]"/>
                                </div>}

                            <input accept=".jpeg, .jpg, .png" multiple onChange={(e) => handleImageUpload(e)} id={"images"} type="file" hidden/>
                        </label>
                    </div>

                </div>
                <div className={"flex gap-6 mt-10"}>
                    <button onClick={() => setShowAddGoalForm(false)} className={"white-btn"}>Cancel</button>
                    <button className={"primary-btn"}>Create do-card goal</button>
                </div>
            </div>
        </div>
    );
};

export default DoCardGoalForm;