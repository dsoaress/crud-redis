import { Box, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function Error({ children }: { children: ReactNode }) {
  return (
    <Box pos="fixed" inset={0} bg="gray.100">
      <Flex justify="center" align="center" height="100%">
        <Text>{children}</Text>
      </Flex>
    </Box>
  )
}
