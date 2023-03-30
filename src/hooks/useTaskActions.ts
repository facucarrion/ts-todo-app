import { SetStateAction, useContext, useState } from 'react'
import { TasksContext } from '../context/TasksContext'
import { Task } from '../types/TaskTypes'

interface UseTaskActions {
  checked: boolean
  edit: boolean
  inputValue: string
  setInputValue: React.Dispatch<SetStateAction<string>>
  handle: {
    check: () => void
    delete: (event: React.MouseEvent<HTMLButtonElement>) => void
    edit: {
      change: (event: React.MouseEvent<HTMLButtonElement>) => void
      confirm: (newBody: string) => void
    }
  }
}

const useTaskActions = ({ id, body, completed }: Task): UseTaskActions => {
  const { tasks, setTasks } = useContext(TasksContext)

  const [checked, setChecked] = useState<boolean>(completed)
  const [edit, setEdit] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(body)

  const handleCheck = (): void => {
    setChecked(!checked)
    const taskToChange = tasks.find(task => task.id === id)
    const newTasks = tasks.filter(task => task.id !== id)
    if (taskToChange != null) {
      taskToChange.completed = !taskToChange.completed
      setTasks([...newTasks, taskToChange].sort((a, b) => a.id - b.id))
    }
  }

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    const newTaskList = tasks.filter(task => task.id !== id)
    setTasks(newTaskList)
  }

  const handleEdit = {
    change: (event: React.MouseEvent<HTMLButtonElement>): void => {
      setEdit(true);
      ((event.target as HTMLButtonElement).parentElement?.previousSibling as HTMLInputElement).focus()
    },
    confirm: (newBody: string): void => {
      setEdit(false)
      const taskToChange = tasks.find(task => task.id === id)
      const newTasks = tasks.filter(task => task.id !== id)
      if (taskToChange != null) {
        taskToChange.body = newBody
        setTasks([...newTasks, taskToChange].sort((a, b) => a.id - b.id))
      }
    }
  }

  return {
    checked,
    edit,
    inputValue,
    setInputValue,
    handle: {
      check: handleCheck,
      delete: handleDelete,
      edit: handleEdit
    }
  }
}

export { useTaskActions }
