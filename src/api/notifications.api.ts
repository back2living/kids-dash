import instance, {baseUrl} from "@/api/instance";

export const fetchNotifications = async () => {
    const {data} = await instance.get(`${baseUrl}/notifications?page=1&size=200`);
    return data;
}
export const readNotifications = async (id: string) => {
    const {data} = await instance.put(`${baseUrl}/notifications?notificationIds=${id}`);
    return data;
}
export const deleteNotifications = async (id: string) => {
    const {data} = await instance.delete(`${baseUrl}/notifications?notificationIds=${id}`);
    return data;
}