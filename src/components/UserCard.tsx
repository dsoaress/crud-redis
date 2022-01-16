import { Box, Text } from '@chakra-ui/react'

type UserCardProps = {
  name: string
  email: string
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <Box p={4} borderRadius={6} boxShadow="base" border={1} borderColor="gray.400" bg="gray.50">
      <Text fontWeight="bold" fontSize={14} color="blue.600">
        {name}
      </Text>
      <Text fontSize={12} color="gray.500">
        {email}
      </Text>
    </Box>
  )
}
