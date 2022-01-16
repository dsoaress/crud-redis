import { Button, Flex } from '@chakra-ui/react'

import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <Flex align="flex-end" gap={4} mb={8}>
      <SearchInput />
      <Button colorScheme="blue" flexShrink={0}>
        Add new user
      </Button>
    </Flex>
  )
}
