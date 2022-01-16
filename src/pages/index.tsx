import { Box } from '@chakra-ui/react'

import { Error } from '../components/Error'
import { Header } from '../components/Header'
import { UserList } from '../components/UserList'
import { useUsers } from '../hooks/useUsers'

export default function Home() {
  const { error } = useUsers()

  if (error) return <Error>{error}</Error>

  return (
    <Box as="main" maxWidth="800px" mx="auto" p={8}>
      <Header />
      <UserList />
    </Box>
  )
}
