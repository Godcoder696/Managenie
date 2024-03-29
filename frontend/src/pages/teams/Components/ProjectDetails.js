import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'

function ProjectDetails() {
    const headText={
        md:"large",
        sm:"medium"
    }
    const text={
        md:"medium",
        sm:"small"
    }
    const buttonSize={
        md:"md",
        sm:"sm"
    }
  return (
    <>
        <VStack align={"start"} spacing={5} overflowY={"scroll"} >
            <Text fontSize={headText} >Project Details:</Text>

            <VStack align={"start"} w={"90%"}>
                <Text color={"#3d9afc"} fontSize={text}>project name*</Text>
                <Input type='text' value='previous name'></Input>
            </VStack>

            <VStack align={"start"} w={"90%"}>
                <Text color={"#3d9afc"} fontSize={text}>project description*</Text>
                <Textarea type='text' value={"previous description"} resize={"none"} h={"150px"}/>
            </VStack>

            <HStack justify={"space-between"} w={"90%"}>
                <Text fontWeight={"bold"} fontSize={"large"}>Start Date: </Text>
                <Text fontWeight={"bold"} fontSize={"large"}>dd/mm/yyyy</Text>
            </HStack>   

            <HStack w={"90%"} justify={"space-between"}>
                <Text color={"#3d9afc"} fontSize={text}>current team:</Text>
                <Menu>
                    <MenuButton as={Button} colorScheme='teal' rightIcon={<ChevronDownIcon />} w="45%" size={buttonSize}>
                        View
                    </MenuButton>
                    <MenuList colorScheme='teal' maxH={"200px"}     overflowY={"scroll"} bgColor={"teal"} >
                        <MenuItem bgColor='teal' w={"60%"}>Item 1</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>

            <VStack w={"90%"}>
                <InputGroup size={buttonSize}>
                    <InputLeftAddon bgColor={"transparent"}>
                        <SearchIcon/>
                    </InputLeftAddon>
                    <Input placeholder='Search user to add'/>
                </InputGroup>
            </VStack>

            <HStack w={"90%"} justify={"space-between"}>
                <Text color={"#3d9afc"} fontSize={text}>managers:</Text>
                <Menu >
                    <MenuButton as={Button} colorScheme='purple' rightIcon={<ChevronDownIcon />} w="45%" size={buttonSize}>
                        View
                    </MenuButton>
                    <MenuList colorScheme='purple' maxH={"200px"}     overflowY={"scroll"} bgColor={"purple"} >
                        <MenuItem bgColor='purple' w={"60%"}>Item 1</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>

            <VStack w={"90%"}>
                <InputGroup size={buttonSize}>
                    <InputLeftAddon bgColor={"transparent"}>
                        <SearchIcon/>
                    </InputLeftAddon>
                    <Input placeholder='Search to add managers' />
                </InputGroup>
            </VStack>

            <VStack w={"90%"} align={"start"}>
                <Text color={"#3d9afc"} fontSize={text}>Client*</Text>
                <Input type='text' value={"client"} size={buttonSize}></Input>
            </VStack>

        </VStack>
 
    </>
  )
}

export default ProjectDetails
