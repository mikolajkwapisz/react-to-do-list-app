import './home.css'
import { List} from '../../../components/index'
import { TaskType } from '../../../types/types'


export interface HomeProps {
  tasks: TaskType[],
  isLoading: boolean
}



const Home = ( {tasks, isLoading}: HomeProps ) => {
  return (
    <main className='home main__margin'>
      <div className="home__tables">
        { /* If tasksStatus is true then tasks are still active*/} 
        <List 
          tasks={tasks}
          isLoading = {isLoading}
          tasksRequiredStatus = {true}
        />
        <List 
          tasks={tasks}
          isLoading = {isLoading}
          tasksRequiredStatus = {false}
        />
      </div>
    </main>
  )
}

export default Home