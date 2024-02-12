import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'

function SideDrawer() {
  return (
    <>
      <Drawer
        isOpen={true}
        placement='right'
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#2b2b2b"} color={"white"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Assign Task
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='username'>Task Title</FormLabel>
                <Textarea
                  id='username'
                  placeholder='Enter task title'
                  resize={"none"}
                />
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Description</FormLabel>
                <Textarea id='desc' placeholder='task description' resize={"none"}/>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Assign To</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button mr={3} colorScheme='red' >
              Cancel
            </Button>
            <Button colorScheme='green'>Assign</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDrawer
