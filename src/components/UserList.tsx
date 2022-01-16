import { Flex } from '@chakra-ui/react'

import { useFetch } from '../hooks/useFetch'
import { UserCard } from './UserCard'

export function UserList() {
  const { users } = useFetch()

  return (
    <Flex flexDir="column" gap={4}>
      {users.map(({ entityId, name, email }) => (
        <UserCard key={entityId} name={name} email={email} />
      ))}
    </Flex>
  )
}
