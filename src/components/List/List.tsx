import './list.css'
import { TaskType } from '../../types/types'
import {FiClipboard, FiCheckSquare} from 'react-icons/fi'
import Task from '../Task/Task'
import { HomeProps } from '../../containers/Pages/Home/Home'
import { useQueryMutation } from '../../context/QueryContext'

interface ListProps extends HomeProps {
    tasksRequiredStatus: boolean
}

const List= ( {tasks, tasksRequiredStatus}: ListProps) => {
    const { isLoading} = useQueryMutation()
    const filteredTasks = tasks.filter( task => task.status == tasksRequiredStatus)
    console.log(filteredTasks)


  return (
    <>
        {
            tasksRequiredStatus ? (
                <div className='list__active list'>
                    <div className='list__active--title list__title'>
                        <FiClipboard />
                        <p>To-Do</p>
                    </div>
                    <div className="list__active--tasks list__tasks">
                        {isLoading && <p className='LOADING'>Loading ...</p>}
                        <ul>
                            { filteredTasks.length == 0 ? <h1 className='LOADING'>Empty list</h1> : tasks.map( task => (
                                   <li 
                                    key={task.id}
                                    className = "list__active--tasks--li">
                                    {task.status === tasksRequiredStatus && ( 
                                    <Task options ={task} />
                                   ) 
                               }
                               </li>
                                )) }
                        </ul>
                    </div>
                </div>
            ):
            (
                <div className='list__done list'>
                    <div className='list__done--title list__title'>
                        <FiCheckSquare />
                        <p>Done</p>
                    </div>
                    <div className='list__done--tasks list__tasks'>
                            {isLoading && <p className='LOADING'>Loading ...</p>}
                        <ul>
                            { filteredTasks.length == 0 ? <h1 className='LOADING'>Empty list</h1> : tasks.map( task => (
                                    <li key={task.id}>
                                        {task.status === tasksRequiredStatus && ( 
                                        <Task options ={task}
                                        
                                        />) 
                                    }
                                    </li>
                                )) }
                        </ul>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default List