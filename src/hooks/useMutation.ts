import { api } from '../services/api'
import { useUsers } from './useUsers'

type User = {
  name: string
  email: string
}

export function useMutation() {
  const { users, setUsers, setLoading, setError } = useUsers()

  async function mutate(newUser: User) {
    setLoading(true)
    setError('')

    try {
      const { data } = await api.post('users', newUser)
      setUsers([...users, data])
    } catch (error: any) {
      setError(error.message)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return { mutate }
}
