import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type User = {
  entityId?: string
  name: string
  email: string
}

type UsersContextData = {
  users: User[]
  setUsers: Dispatch<SetStateAction<User[]>>
  error: string | null
  setError: Dispatch<SetStateAction<string | null>>
}

export const UsersContext = createContext({} as UsersContextData)

export function UsersProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  return (
    <UsersContext.Provider
      value={{
        users,
        error,
        setUsers,
        setError
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
