import instance, {baseUrl} from "@/api/instance";
import {IUpdateStorefrontDoCard} from "@/api/storefront.api";

export interface IAddDoCard {
    points: number;
    isMandatory?: boolean;
    purpose: string;
    storefrontItemId?: string;
    type: string;
    avatar?:string;
}

export interface IDoCardPayment {
    doCardId: string;
    points: number;
    status?: string;
    type?: string;
    isMandatory?: boolean;
}

export const fetchDoCards = async (status: string, type="", isMandatory?: boolean, pageNum?: number) => {
    const {data} = await instance.get(`${baseUrl}/docards?status=${status}&type=${type}&isMandatory=${isMandatory}&size=20&page=${pageNum}`);
    return data;
}
export const addDoCard = async ({storefrontItemId, purpose, points, isMandatory, type, avatar}: IAddDoCard) => {
    const {data} = await instance.post(`${baseUrl}/docards/kid`, {isMandatory, purpose, type, points, storefront: storefrontItemId, avatar});
    return data;
}
export const updateDoCard = async ({isMandatory, purpose, type, points, doCardId}: IUpdateStorefrontDoCard) => {
    const {data} = await instance.put(`${baseUrl}/docards/docard/${doCardId}`, {isMandatory, purpose, type, points});
    return data;
}
export const addDoCardPayment = async ({doCardId, points}: IDoCardPayment) => {
    const {data} = await instance.post(`${baseUrl}/docards/docard/${doCardId}/payment`, {points});
    return data;
}
export const deleteDoCard = async ({doCardId}: { doCardId: string }) => {
    const {data} = await instance.delete(`${baseUrl}/docards/docard/${doCardId}`);
    return data;
}