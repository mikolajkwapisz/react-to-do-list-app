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

export const deleteTask = async (id: any) => {
    return await postsApi.delete(`/tasks/${id}`)
}

export const deleteMultipleTasks = async (tasks: Array<TaskType>) => {
    const res = tasks.map( async task => await postsApi.delete(`/tasks/${task.id}`))
    const result = await Promise.all(res)
    return result

}

export const updateTask = async (task: TaskType) => {
    return await postsApi.patch(`/tasks/${task.id}`, task)
}

