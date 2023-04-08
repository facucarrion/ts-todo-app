import { SetStateAction } from 'react'

export interface TaskActions {
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
