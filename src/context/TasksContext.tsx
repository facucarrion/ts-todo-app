import { createContext, useEffect, useState } from 'react'
import { TaskContext } from '../types/TaskTypes'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

interface Props {
  children: React.ReactNode
}

const TasksContext = createContext<TaskContext>({
  tasks: [],
  setTasks: () => {}
})

const TasksProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState(getLocalStorage('tasks'))

  useEffect(() => setLocalStorage('tasks', tasks), [tasks])

  const data = {
    tasks,
    setTasks
  }

  return (
    <TasksContext.Provider value={data}>
      {children}
    </TasksContext.Provider>
  )
}

export { TasksContext, TasksProvider }
