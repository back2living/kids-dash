import {ClosedPasswordIcon} from "@/components/shared/Svg";
import {useState} from "react";

interface IPasswordInput {
    label?:string;
    errors?:any;
    name?:string;
    register?: any;
}
const PasswordInput = ({label="Enter Password", errors, name, register}: IPasswordInput) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <label className={"auth-label"} htmlFor="">{label}</label>
            <div className={"w-full relative rounded-[100px]"}>
                <input {...register(name)} autoComplete={"off"} className={`password-input`} type={isOpen ? "text" : "password"} placeholder={"••••••••••"}/>
                <button type={"button"} onClick={() => setIsOpen(!isOpen)} className={"w-fit absolute top-1/2 right-4 -translate-y-1/2"}>
                    {isOpen ? ClosedPasswordIcon : ClosedPasswordIcon}
                </button>
            </div>

            {errors?.password && <span className={"auth-form-error mt-2"}>{errors?.password?.message}</span>}
        </div>
    );
};

export default PasswordInput;