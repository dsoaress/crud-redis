import { Box, Flex, Spinner } from '@chakra-ui/react'

export function Loading() {
  return (
    <Box pos="fixed" inset={0} bg="gray.100">
      <Flex justify="center" align="center" height="100%">
        <Spinner size="md" color="blue.600" />
      </Flex>
    </Box>
  )
}
