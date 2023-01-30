import axios from "axios";
import { TaskType } from "../types/types";

const postsApi  = axios.create({
    baseURL: 'http://localhost:3500'
})

export const getTasks = async () => {
    const res = await postsApi.get("/tasks")
    return res.data
}

export const addTask = async (task: TaskType) => {
    return await postsApi.post(`/tasks`, task)
}

export const deleteTask = async (id: any) => {
    return await postsApi.delete(`/tasks/${id}`, id)
}

export const updateTask = async (task: TaskType) => {
    return await postsApi.patch(`/tasks/${task.id}`, task)
}

