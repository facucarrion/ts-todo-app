import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import { usePostTask } from '../hooks/usePostTasks'

const Header: React.FC = () => {
  const { setInput, handleSubmit } = usePostTask()

  const { setTasks } = useContext(TasksContext)

  return (
    <header className='w-full flex flex-col gap-3 items-center'>
      <h1 className='text-4xl'>To-Do App</h1>
      <form
        className='w-full flex flex-row justify-between'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder="What's on your mind?"
          className='w-[90%] px-2 text-2xl bg-transparent border-b border-gray-300 text-white placeholder-gray-400 focus: outline-none'
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          type='submit'
          className='border border-white rounded-md aspect-square text-2xl transition-all duration-200 hover:bg-white hover:text-black'
        >
          +
        </button>
      </form>
      <button
        type='button'
        className='border border-white rounded-lg w-full py-2 font-semibold transition-all duration-200 hover:bg-white hover:text-black'
        onClick={() => setTasks([])}
      >
        Clear
      </button>
    </header>
  )
}

export { Header }
