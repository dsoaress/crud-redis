import { Box } from '@chakra-ui/react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
// import { Loading } from '../components/Loading'
// import { Error } from '../components/Error'
import { UserList } from '../components/UserList'
import { useUsers } from '../hooks/useUsers'

export default function Home() {
  // const { loading, error } = useUsers()

  // if (loading && !error) return <Loading />
  // if (error) return <Error>{error}</Error>

  return (
    <Box as="main" maxWidth="800px" mx="auto" p={8}>
      <Header />
      <UserList />
      <Footer />
    </Box>
  )
}
