import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import { TaskArticle } from './TaskArticle'

const Main: React.FC = () => {
  const { tasks } = useContext(TasksContext)

  return (
    <main className='w-full max-w-[800px] h-[75%] flex flex-col gap-4'>
      {tasks.map(task => (
        <TaskArticle
          key={task.id}
          id={task.id}
          body={task.body}
          completed={task.completed}
        />
      ))}
    </main>
  )
}

export { Main }
