import { Task } from '../types/TaskTypes'

const cleanIdArray = (tasks: Task[]): number[] => {
  return tasks.length > 0
    ? tasks.map(task => task.id)
    : [0]
}

export const newId = (tasks: Task[]): number => {
  const max = Math.max(...cleanIdArray(tasks))
  return max + 1
}
