import { Box } from '@chakra-ui/react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { UserList } from '../components/UserList'

export default function Home() {
  return (
    <Box as="main" maxWidth="800px" mx="auto" p={8}>
      <Header />
      <UserList />
      <Footer />
    </Box>
  )
}
