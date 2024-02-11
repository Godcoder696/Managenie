import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Input, InputGroup, Menu, MenuButton, MenuItem, MenuList, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

function NewTeam() {
  return (
    <>
      <VStack w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"}>
        <Text fontSize={"x-large"} fontWeight={"semibold"}>
          New Project
        </Text>
        <VStack overflowY={"scroll"} mt={7} w={"100%"} align={"start"}>

          <HStack p={2} w={"60%"} justify={"space-between"} align={"start"}>
            <Text fontSize={"large"}>Project Name: </Text>
            <InputGroup w={"max-content"} size={"lg"} >
              <Input placeholder='required' required w={"340px"}/>
            </InputGroup>
          </HStack>

          <HStack p={2} w={"60%"} justify={"space-between"} align={"start"}>
            <Text fontSize={"large"} wordBreak={"keep-all"}>Project Description: </Text>
            <InputGroup w={"max-content"} size={"lg"}>
              <Textarea placeholder='enter description ...' size={"lg"} h={"150px"} w={"340px"} resize={"none"} />
            </InputGroup>
          </HStack>

          <HStack p={2} w={"60%"} justify={"space-between"} align={"start"}>
            <Text fontSize={"large"}>Start Date: </Text>
            <Input type='date' w={"340px"}></Input>
          </HStack>

          <HStack p={2} w={"60%"} justify={"space-between"} align={"start"}>
            <Text fontSize={"large"}>Select Members: </Text>
            <VStack w={"340px"} align={"start"}>
              
              <Input type='text' w={"100%"} placeholder='enter user email'></Input>
              <VStack w={"100%"} maxH={"200px"} bgColor={"#1e1e1e"} mt={-2} p={3} overflowY={"scroll"} borderBottomRadius={"0.5rem"}>
                <VStack w={"100%"}>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                </VStack>
              </VStack>
              <HStack w={"100%"} h={"max-content"} wrap={"wrap"}>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
              </HStack>
            </VStack>
          </HStack>
          <HStack p={2} w={"60%"} justify={"space-between"} align={"start"}>
            <VStack align={"start"}>
              <Text fontSize={"large"}>Select Managers: </Text>
              <Text fontSize={"x-small"} color={"red"}>Member can't be a manager *</Text>
            </VStack>
            <VStack w={"340px"} align={"start"}>
              <Input type='text' w={"100%"} placeholder='enter manager email'></Input>
              <VStack w={"100%"} maxH={"200px"} bgColor={"#1e1e1e"} mt={-2} p={3} overflowY={"scroll"} borderBottomRadius={"0.5rem"}>
                <VStack w={"100%"}>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                  <Box w={"100%"} h={"50px"} bgColor={"red"} borderRadius={"0.3rem"}></Box>
                </VStack>
              </VStack>
              <HStack w={"100%"} h={"max-content"} wrap={"wrap"}>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
                <Box px={"4"} py={"1"} bgColor={"green"} borderRadius={"1rem"}>Vishakapatnam</Box>
              </HStack>
            </VStack>
          </HStack>

          <HStack p={2} w={"60%"} justify={"space-between"} align={"start"}>
            <Text fontSize={"large"}>Company Name: </Text>
            <InputGroup w={"max-content"} size={"lg"} >
              <Input placeholder='required' required w={"340px"}/>
            </InputGroup>
          </HStack>

          <HStack p={2} w={"60%"} justify={"space-between"} align={"start"}>
            <Text fontSize={"large"}>Project Type: </Text>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="340px">
                Choose
              </MenuButton>
              <MenuList w="340px">
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <Button colorScheme='blue' w={"60%"} mt={5} p={6} fontWeight={"semibold"}>Create Team</Button>
        </VStack>
      </VStack> 
    </>
  )
}

export default NewTeam
