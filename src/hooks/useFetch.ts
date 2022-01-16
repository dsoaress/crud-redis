import { useEffect } from 'react'

import { api } from '../services/api'
import { useUsers } from './useUsers'

export function useFetch() {
  const { users, setUsers, setLoading, setError } = useUsers()

  useEffect(() => {
    async function fetchUsers() {
      setError('')
      setLoading(true)

      try {
        const { data } = await api.get('users')
        setUsers(data)
      } catch (error: any) {
        setError(error.message)
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [setError, setLoading, setUsers])

  return { users }
}
