import instance, {baseUrl} from "@/api/instance";

export interface IAddKidDoCardPayment {
    doCardId: string;
    kidId: string;
    points: number;
}
export interface IUpdateStorefrontDoCard {
    doCardId: string;
    isMandatory: boolean;
    purpose: string;
    type: string;
    points: number;
}

export const fetchStorefrontsWithCategories = async () => {
    const {data} = await instance.get(`${baseUrl}/storefronts/categories?withItems=true`);
    return data;
}
export const fetchStorefrontPurchases = async () => {
    const {data} = await instance.get(`${baseUrl}/storefronts/purchases`);
    return data;
}


export const purchaseStorefrontItem = async ({id}: { id: string }) => {
    const {data} = await instance.post(`${baseUrl}/storefronts/storefront/${id}/purchase`, {});
    return data;
}