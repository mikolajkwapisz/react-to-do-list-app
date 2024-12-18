import axios from "axios";
import { TaskType } from "../types/types";

const postsApi  = axios.create({
    baseURL: 'http://localhost:3500',
    timeout: 10000
})


export const getTasks = async () => {
    const res = await postsApi.get("/tasks/")
    return res.data
}

export const addTask = async (task: TaskType) => {
    return await postsApi.post(`/tasks`, task)
}

export const deleteTask = async (id: number | string): Promise<void> => {
    try {
        await postsApi.delete(`/tasks/${id}`);
        console.log(`Task with ID ${id} successfully deleted.`);
    } catch (error: any) {
        console.error(`Failed to delete task with ID ${id}:`, error.response?.data || error.message);
        throw new Error(`Delete operation failed for task with ID ${id}`);
    }
};

export const deleteMultipleTasks = async (tasks: Array<TaskType>) => {
    const res = tasks.map( async task => await postsApi.delete(`/tasks/${task.id}`))
    const result = await Promise.all(res)
    return result
}

export const updateTask = async (task: TaskType): Promise<void> => {
    if (!task.id) {
        throw new Error("Task ID is required for updating.");
    }

    try {
        const response = await postsApi.patch(`/tasks/${task.id}`, task);
        console.log(`Task with ID ${task.id} updated successfully:`, response.data);
    } catch (error: any) {
        console.error(`Failed to update task with ID ${task.id}:`, error.response?.data || error.message);
        throw new Error(`Update operation failed for task with ID ${task.id}`);
    }
};

