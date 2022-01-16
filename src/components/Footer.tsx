import { Box, Link, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box as="footer" textAlign="center" pt={8} bg="gray.50" color="gray.700">
      <Text fontSize="sm">
        Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by <Link href="https://github.com/dsoares">Daniel Soares</Link>
      </Text>
    </Box>
  )
}
