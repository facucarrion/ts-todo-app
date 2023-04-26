import { Task } from '../types/TaskTypes'

export const getLocalStorage = (key: string): Task[] => JSON.parse(localStorage.getItem(key) ?? '[]')
export const setLocalStorage = (key: string, tasks: Task[]): void => localStorage.setItem(key, JSON.stringify(tasks))
