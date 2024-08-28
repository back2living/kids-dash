import instance from "@/api/instance";
import {baseUrl} from "@/api/instance";
import {EmailFormValues} from "@/pages/signin";

export const signIn = async ({email, password}: EmailFormValues) => {
    const {data} = await instance.post(`${baseUrl}/auth/login/kid`, {email, password});
    return data;
}
export const logout = async () => {
    const {data} = await instance.delete(`${baseUrl}/auth/logout`);
    return data;
}