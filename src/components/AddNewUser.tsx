import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack
} from '@chakra-ui/react'
import { RefObject, useState } from 'react'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'

import { useMutation } from '../hooks/useMutation'
import { Input } from './Input'

type AddNewUserProps = {
  isOpen: boolean
  onClose: () => void
  btnRef: RefObject<HTMLButtonElement>
}

export function AddNewUser({ isOpen, onClose, btnRef }: AddNewUserProps) {
  const { mutate } = useMutation()
  const [user, setUser] = useState({ name: '', email: '' })

  async function handleSave() {
    await mutate(user)
    onClose()
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create a new user</DrawerHeader>

        <DrawerBody>
          <Stack spacing={6}>
            <Input
              id="name"
              type="text"
              label="Name"
              icon={<FiUser />}
              value={user.name}
              onChange={e => setUser(prev => ({ ...prev, name: e.target.value }))}
            />
            <Input
              id="email"
              type="email"
              label="Email"
              icon={<BsFillEnvelopeFill />}
              value={user.email}
              onChange={e => setUser(prev => ({ ...prev, email: e.target.value }))}
            />
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
