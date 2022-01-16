import { useEffect } from 'react'

import { api } from '../services/api'
import { useUsers } from './useUsers'

export function useFetch() {
  const { users, setUsers, setError } = useUsers()

  useEffect(() => {
    async function fetchUsers() {
      setError('')

      try {
        const { data } = await api.get('users')
        setUsers(data)
      } catch (error: any) {
        setError(error.message)
        console.error(error)
      }
    }

    fetchUsers()
  }, [setError, setUsers])

  return { users }
}
