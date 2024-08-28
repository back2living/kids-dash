import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteNotifications, fetchNotifications, readNotifications} from "@/api/notifications.api";
import toast from "react-hot-toast";

export const useFetchNotifications = () => {
    return useQuery({
        queryKey: ["notifications"],
        queryFn: () => fetchNotifications()
    });
}

export const useReadNotification = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({id}: {id: string}) => readNotifications(id),
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: ["notifications"] });
            toast.success(data?.message);
        },
        onError: (error: any) =>  toast.error(error?.response?.data?.message)
    })
}

export const useDeleteNotification = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({id}: {id: string}) => deleteNotifications(id),
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({ queryKey: ["notifications"] });
            toast.success(data?.message);
        },
        onError: (error: any) =>  toast.error(error?.response?.data?.message)
    })
}

// export const useFetchUserNotifications = () => {
//     return useInfiniteQuery({
//         queryKey: ["notifications"],
//         queryFn: fetchUserNotifications,
//         initialPageParam: 1,
//         getNextPageParam: (lastPage, allPages) => {
//             const totalPages = allPages[0]?.meta?.pages;
//             const currentPage = lastPage?.meta?.page;
//             const nextPage = lastPage?.meta?.nextPage
//             console.log(currentPage);
//             console.log(nextPage);
//             console.log(totalPages);
//             return currentPage < totalPages ? nextPage : undefined;
//         }
//     })
// }