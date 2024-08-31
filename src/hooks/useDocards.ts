import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    addDoCard, addDoCardPayment,
    deleteDoCard,
    fetchDoCards,
    IAddDoCard, IDoCardPayment,
    updateDoCard
} from "@/api/docards.api";
import {
    IUpdateStorefrontDoCard
} from "@/api/storefront.api";
import toast from "react-hot-toast";

export const useFetchKidDoCards = (status: string, type: string, isMandatory?: boolean, pageNum?: number) => {
    return useQuery({
        queryKey: ["allDoCards", status, type, isMandatory, pageNum],
        queryFn: () => fetchDoCards(status, type, isMandatory, pageNum)
    });
}
export const useAddDoCardPayment = (closeModal: () => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({doCardId, points}: IDoCardPayment) => addDoCardPayment({doCardId, points}),
        onSuccess: async (data, variables) => {
            await queryClient.invalidateQueries({ queryKey: ["allDoCards", variables.status, variables.type, variables.isMandatory] });
            await queryClient.invalidateQueries({ queryKey: ["allDoCards"] });
            toast.success(data?.message);
            closeModal();
        },
        onError: (error: any) =>  toast.error(error?.response?.data?.message)
    })
}
export const useAddDoCard = (handleRouteToKidProfile: () => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({storefrontItemId, points, type, purpose, isMandatory, avatar}: IAddDoCard) => addDoCard({storefrontItemId, purpose, points, isMandatory, type, avatar}),
        onSuccess: async (data) => {
            handleRouteToKidProfile();
            await queryClient.invalidateQueries({ queryKey: ["allDoCards"] });
            toast.success(data?.message);
        },
        onError: (error: any) =>  toast.error(error?.response?.data?.message)
    })
}