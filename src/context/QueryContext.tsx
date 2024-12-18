import { createContext, useState, useEffect, useContext } from "react";
import { getTasks, addTask, deleteTask, updateTask, deleteMultipleTasks } from "../api/apiRequest";
import { MutationFunction, useMutation, UseMutationOptions, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { TaskType } from "../types/types";

interface DataProviderProps {
  children: any
}

interface QueryInterface{
  status: string
  data: any
  isLoading: boolean
  error: unknown
  addTaskMutation: UseMutationResult<AxiosResponse<any, any>, unknown, TaskType, unknown>
  updateTaskMutation: UseMutationResult<void, unknown, TaskType, unknown>
  deleteTaskMutation: UseMutationResult<void, unknown, string | number, unknown>
  deleteMultipleTasksMutation: UseMutationResult<AxiosResponse<any, any>[], unknown, TaskType[], unknown>
}

const QueryContext =  createContext<QueryInterface>({} as QueryInterface)


const QueryProvider = ({children}: DataProviderProps) => {
  const queryClient = useQueryClient()
  
  const { status, data, isLoading, error} = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
    enabled: true
  })
  
  const addTaskMutation = useMutation(addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })
  
    const updateTaskMutation = useMutation(updateTask, {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks'])
      }
    })
  
  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })

  const deleteMultipleTasksMutation = useMutation(deleteMultipleTasks, {
    onMutate: () => {
     setTimeout(() => {queryClient.invalidateQueries(['tasks'])}, 3000)
    }
  })
  
    return(
        <QueryContext.Provider value={{
          status, data, isLoading, error, addTaskMutation, updateTaskMutation, deleteTaskMutation,
          deleteMultipleTasksMutation
        }}>
            {children}
        </QueryContext.Provider>
    )
}

export default QueryProvider

export const useQueryMutation = () => useContext(QueryContext)