import { useEffect, useState } from 'react'

import { api } from '../services/api'

type User = {
  entityId: string
  name: string
  email: string
}

export function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api
      .get<User[]>('users')
      .then(({ data }) => {
        setLoading(false)
        setUsers(data)
      })
      .catch(error => {
        setError(error.message)
        console.error(error)
      })
  }, [])

  return { users, loading, error }
}
