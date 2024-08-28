import instance, {baseUrl} from "@/api/instance";

export const submitChecklist = async ({checklistId}: { checklistId: string }) => {
    const {data} = await instance.post(`${baseUrl}/checklists/tasks/checklist/${checklistId}/task`);
    return data;
}
export const fetchChecklistsCategories = async (withChecklists= true) => {
    const {data} = await instance.get(`${baseUrl}/checklists/categories?withChecklists=${withChecklists}`);
    return data;
}
