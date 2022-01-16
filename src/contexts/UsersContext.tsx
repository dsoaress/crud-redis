import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

import { Loading } from '../components/Loading'

type User = {
  entityId?: string
  name: string
  email: string
}

type UsersContextData = {
  users: User[]
  setUsers: Dispatch<SetStateAction<User[]>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  error: string | null
  setError: Dispatch<SetStateAction<string | null>>
}

export const UsersContext = createContext({} as UsersContextData)

export function UsersProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        error,
        setUsers,
        setLoading,
        setError
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
