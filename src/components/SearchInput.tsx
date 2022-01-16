import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react'

export function SearchInput(props: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor="search">Search</FormLabel>
      <Input id="search" type="search" placeholder="Search by name or email" {...props} />
    </FormControl>
  )
}
