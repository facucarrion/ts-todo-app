import { useState, useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import { newId } from '../utils/newId'

interface UsePostTask {
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const usePostTask = (): UsePostTask => {
  const [input, setInput] = useState<string>('')

  const { tasks, setTasks } = useContext(TasksContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (input === '') return

    const newTask = {
      id: newId(tasks),
      body: input,
      completed: false
    }

    setInput('')
    setTasks([...tasks, newTask])
    event.currentTarget.reset()
  }

  return { setInput, handleSubmit }
}

export { usePostTask }
