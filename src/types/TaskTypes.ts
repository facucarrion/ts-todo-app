export interface Task {
  id: number
  body: string
  completed: boolean
}

export interface TaskContext {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}
