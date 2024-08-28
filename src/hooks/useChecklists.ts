import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {submitChecklist, fetchChecklistsCategories} from "@/api/checklist.api";
import toast from "react-hot-toast";

export const useFetchChecklistsCategories = (withChecklists: boolean) => {
    return useQuery({
        queryKey: ["checklistsCategories"],
        queryFn: () => fetchChecklistsCategories(withChecklists)
    });
}
export const useSubmitChecklist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({checklistId}: { checklistId: string }) => submitChecklist({checklistId}),
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: ["checklistsCategories"] });
            toast.success(data?.message);
        },
        onError: (error: any) =>  toast.error(error?.response?.data?.message)
    })
}
