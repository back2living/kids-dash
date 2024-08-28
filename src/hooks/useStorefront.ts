import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchStorefrontPurchases, fetchStorefrontsWithCategories, purchaseStorefrontItem} from "@/api/storefront.api";
import toast from "react-hot-toast";

export const useFetchAllStorefronts = () => {
    return useQuery({
        queryKey: ["storefronts"],
        queryFn: () => fetchStorefrontsWithCategories()
    });
}
export const usePurchaseStorefrontItem = (setCurrentUser: (user: any) => void, currentUser: any, closeModal: () => void, showFailureModal: () => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({id}: { id: string; points: number }) => purchaseStorefrontItem({id}),
        onSuccess: async (data, variables) => {
            await queryClient.invalidateQueries({ queryKey: ["storefrontPurchases"] });
            setCurrentUser({...currentUser, points: currentUser?.points - variables?.points});
            toast.success(data?.message);
            closeModal();
        },
        onError: (error: any) =>  {
            const insufficientFundsText = "you do not have sufficient points to complete this action";
            if (error?.response?.data?.message === insufficientFundsText) {
                showFailureModal();
            } else {
                toast.error(error?.response?.data?.message)
            }
        }
    })
}
export const useFetchStorefrontPurchases = () => {
    return useQuery({
        queryKey: ["storefrontPurchases"],
        queryFn: () => fetchStorefrontPurchases()
    });
}
