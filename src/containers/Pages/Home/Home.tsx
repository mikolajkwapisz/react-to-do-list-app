import './home.css'
import { List} from '../../../components/index'
import { TaskType } from '../../../types/types'


export interface HomeProps {
  tasks: TaskType[],
}



const Home = ( {tasks}: HomeProps ) => {
  return (
    <main className='home main__margin'>
      <div className="home__tables">
        { /* If tasksStatus is true then tasks are still active*/} 
        <List 
          tasks={tasks}
          tasksRequiredStatus = {true}
        />
        <List 
          tasks={tasks}
          tasksRequiredStatus = {false}
        />
      </div>
    </main>
  )
}

export default Home