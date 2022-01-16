import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'

import { useSearch } from '../hooks/useSearch'
import { AddNewUser } from './AddNewUser'
import { Input } from './Input'

export function Header() {
  const { searchValue, setSearchValue } = useSearch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Flex align="flex-end" gap={4} mb={8}>
        <Input
          id="search"
          type="search"
          placeholder="Search by name or email"
          label="Search"
          icon={<BiSearchAlt2 />}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <Button
          colorScheme="blue"
          flexShrink={0}
          onClick={onOpen}
          leftIcon={<AiOutlinePlusCircle />}
          ref={btnRef}
        >
          Add new user
        </Button>
      </Flex>

      <AddNewUser isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  )
}
