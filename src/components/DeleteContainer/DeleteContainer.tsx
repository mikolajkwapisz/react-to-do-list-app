import { useContext, useState } from 'react'
import { useQueryMutation } from '../../context/QueryContext'
import { TaskType } from '../../types/types'
import './deleteContainer.css'

interface DeleteContainerPropt {
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
    data: any
}

const DeleteContainer = ({isVisible, setIsVisible, data}: DeleteContainerPropt) => {

    const { deleteMultipleTasksMutation} = useQueryMutation()

    function deleteTasks(filter?: boolean): void | number {
        const filteredTasks: Array<TaskType> = data ? data.filter( (task: TaskType) =>{
         return typeof filter == 'undefined' ? task : task.status == filter}) : false 
        if(filteredTasks.length == 0){
            console.log(0)
        }else {
            deleteMultipleTasksMutation.mutate(filteredTasks)
            setIsVisible(false)
        }
    }

    return (
        <div className="deleteContainer" 
        style={ !isVisible ? {display: 'none'}: {display: 'flex'}} >
            <div className='deleteContainer__main' onClick={ () => setIsVisible( prev => !prev)}></div>
            <div className='deleteContainer__box'>
                <button className="deleteContainer__box--everything"
                    onClick={() => deleteTasks()}
                    >
                        Delete every task</button>
                <button className="deleteContainer__box--todo"
                    onClick={() => deleteTasks(true)}
                    >Delete todo tasks</button>
                <button className="deleteContainer__box--done"
                    onClick={() => deleteTasks(false)}
                    >Delete done tasks</button>
            </div>
        </div>
    )
}

export default DeleteContainer