import { Box, Flex, Text } from '@chakra-ui/react'

export function Error(error: string) {
  return (
    <Box pos="fixed" inset={0} bg="gray.100">
      <Flex justify="center" align="center" height="100%">
        <Text>{error}</Text>
      </Flex>
    </Box>
  )
}
