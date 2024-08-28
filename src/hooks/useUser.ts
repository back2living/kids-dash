import {useQuery} from "@tanstack/react-query";
import instance, {baseUrl} from "@/api/instance";
import {UserType} from "@/interfaces/UserInterface";

const getAuthenticatedUser = async () => {
    const {data} = await instance.get(`${baseUrl}/users/user`);
    return data.data;
}

export const useAuthenticatedUser = () => {
    return useQuery({
        queryKey: ["authenticatedUser"],
        queryFn: () => getAuthenticatedUser(),
    })  as {data: UserType; isPending: boolean;};
};
