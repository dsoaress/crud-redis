import { useEffect, useState } from 'react'

import { api } from '../services/api'
import { useUsers } from './useUsers'

export function useSearch() {
  const { setUsers, setError } = useUsers()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    async function fetchSearch() {
      setError('')

      try {
        const { data } = await api.get('users', { params: { q: searchValue } })
        setUsers(data)
      } catch (error: any) {
        setError(error.message)
        console.error(error)
      }
    }

    fetchSearch()
  }, [searchValue, setError, setUsers])

  return { searchValue, setSearchValue }
}
