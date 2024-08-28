import Link from "next/link";
import AuthLayout from "@/layouts/AuthLayout";
import {useRouter} from "next/router";
const ForgotPassword = () => {
    const router = useRouter();

    const handleSubmit = () => router.push("/signin");

    return (
        <AuthLayout>
            <div className={"max-w-[450px]"}>
                <Link href={"/signin"}>
                    <img src="/assets/images/logo.svg" alt=""/>
                </Link>

                <div className={"mt-52"}>
                    <div>
                        <p className={"auth-title"}>Forgot password</p>
                        <p className={"auth-text"}>Please check in with your guardian and ask them for your password.</p>
                    </div>

                    <button onClick={handleSubmit} className={"mt-10 white-btn"}>Submit</button>
                </div>
            </div>

            <p className={"text-grey text-sm text-center"}>Having troubles? Please contact Support at <Link className={"text-[#F07846]"} href="/">help@playground.co</Link></p>
        </AuthLayout>
    );
};
export default ForgotPassword;