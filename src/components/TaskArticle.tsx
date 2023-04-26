import { useTaskActions } from '../hooks/useTaskActions'
import { Task } from '../types/TaskTypes'

const TaskArticle: React.FC<Task> = ({ id, body, completed }) => {
  const { checked, edit, handle, inputValue, setInputValue } = useTaskActions({ id, body, completed })

  const handleCheck = handle.check

  return (
    <article className='flex justify-between items-center w-full p-4 border border-white rounded-lg text-2xl'>
      <input
        id={`${id}-input`}
        className='w-[80%] border-none text-white bg-transparent focus: outline-none'
        style={{ textDecoration: checked ? 'line-through' : 'none', borderBottom: `1px solid ${edit ? '#efefef' : 'transparent'}` }}
        readOnly={!edit}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <div className='flex gap-2'>
        <button
          className='text-base'
          onClick={(event) => handle.delete(event)}
        >
          delete
        </button>
        <button
          className='text-base'
          onClick={
            edit
              ? () => handle.edit.confirm(
                  (document.getElementById(`${id}-input`) as HTMLInputElement).value
                )
              : handle.edit.change
          }
        >
          {edit ? 'confirm' : 'edit'}
        </button>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleCheck}
        />
      </div>

    </article>
  )
}

export { TaskArticle }
