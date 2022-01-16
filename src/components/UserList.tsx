import { Box, Flex } from '@chakra-ui/react'

import { useFetchUsers } from '../hooks/useFetchUsers'
import { Loading } from './Loading'
import { UserCard } from './UserCard'

export function UserList() {
  const { users, loading, error } = useFetchUsers()

  if (error) return <div>{error}</div>

  return loading ? (
    <Loading />
  ) : (
    <Flex flexDir="column" gap={4}>
      {users.map(({ entityId, name, email }) => (
        <UserCard key={entityId} name={name} email={email} />
      ))}
    </Flex>
  )
}
