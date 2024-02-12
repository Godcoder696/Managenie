import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function SideDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  return (
    <>
      <Drawer
        isOpen={true}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#2b2b2b"} color={"white"} >
          <HStack borderBottomWidth='1px' w={"100%"} justify={"space-between"} p={5} align={"center"}>
            <Text fontSize={"x-large"}>Assign Task</Text>
            <CloseIcon cursor={"pointer"}/>
          </HStack>

          <DrawerBody mt={4}>
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
                <Select id='owner' defaultValue='segun' maxH={"300px"} overflowY={"scroll"} colorScheme='black'>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px' >
            <Button mr={3} colorScheme='red' onClick={onClose}>
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
