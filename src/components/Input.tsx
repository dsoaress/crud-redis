import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { ReactElement } from 'react'

export type InputProps = {
  label: string
  icon: ReactElement
} & ChakraInputProps

export function Input({ id, label, icon, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
        <ChakraInput id={id} {...rest} />
      </InputGroup>
    </FormControl>
  )
}
