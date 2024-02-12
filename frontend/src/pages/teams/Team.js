import { AddIcon, ChevronDownIcon, PlusSquareIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import SideDrawer from './Components/SideDrawer';

function Team() {
    const [lodaing,setLoading]= useState(false);

  return (
    <>
        {
            lodaing?
            <>Loading</>
            :
            <VStack  w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"} spacing={5} >

                <Text alignSelf={"start"} fontSize={"x-large"} fontWeight={"semibold"}>Project Dashboard</Text>

                    <SimpleGrid columns={2} w={"100%"} h={"100%"} mt={5} columnGap={4} overflowY={"scroll"}>

                        <VStack align={"start"} spacing={5} overflowY={"scroll"}>
                            <Text fontSize={"large"} >Project Details:</Text>
                            <VStack align={"start"} w={"90%"}>
                                <Text color={"#3d9afc"}>project name*</Text>
                                <Input type='text' value='previous name'></Input>
                            </VStack>
                            <VStack align={"start"} w={"90%"}>
                                <Text color={"#3d9afc"}>project description*</Text>
                                <Textarea type='text' value={"previous description"} resize={"none"} h={"150px"}/>
                            </VStack>
                            <HStack justify={"space-between"} w={"90%"}>
                                <Text fontWeight={"bold"} fontSize={"large"}>Start Date: </Text>
                                <Text fontWeight={"bold"} fontSize={"large"}>dd/mm/yyyy</Text>
                            </HStack>   
                            <HStack w={"90%"} justify={"space-between"}>
                                <Text color={"#3d9afc"}>current team:</Text>
                                <Menu>
                                    <MenuButton as={Button} colorScheme='teal' rightIcon={<ChevronDownIcon />} w="45%">
                                        View
                                    </MenuButton>
                                    <MenuList colorScheme='teal' maxH={"200px"}     overflowY={"scroll"} bgColor={"teal"} >
                                        <MenuItem bgColor='teal' w={"60%"}>Item 1</MenuItem>
                                    </MenuList>
                                </Menu>
                            </HStack>
                            <VStack w={"90%"}>
                                <InputGroup>
                                    <InputLeftAddon bgColor={"transparent"}>
                                        <SearchIcon/>
                                    </InputLeftAddon>
                                    <Input placeholder='Search user to add'/>
                                </InputGroup>
                            </VStack>
                            <HStack w={"90%"} justify={"space-between"}>
                                <Text color={"#3d9afc"}>current managers:</Text>
                                <Menu >
                                    <MenuButton as={Button} colorScheme='purple' rightIcon={<ChevronDownIcon />} w="45%">
                                        View
                                    </MenuButton>
                                    <MenuList colorScheme='purple' maxH={"200px"}     overflowY={"scroll"} bgColor={"purple"} >
                                        <MenuItem bgColor='purple' w={"60%"}>Item 1</MenuItem>
                                    </MenuList>
                                </Menu>
                            </HStack>
                            <VStack w={"90%"}>
                                <InputGroup>
                                    <InputLeftAddon bgColor={"transparent"}>
                                        <SearchIcon/>
                                    </InputLeftAddon>
                                    <Input placeholder='Search to add managers'/>
                                </InputGroup>
                            </VStack>

                            <VStack w={"90%"} align={"start"}>
                                <Text color={"#3d9afc"}>Client*</Text>
                                <Input type='text' value={"client"}></Input>
                            </VStack>

                        </VStack>

                        <VStack align={"start"} spacing={5} overflowY={"scroll"}>
                            <HStack w={"100%"} justify={"space-between"}>
                                <Text fontSize={"large"} >Assigned Tasks:</Text>
                                <Button colorScheme='green' >
                                    <PlusSquareIcon mr={2}/>
                                    New Task
                                </Button>
                            </HStack>
                            <SimpleGrid minChildWidth={"300px"} w={"100%"} columnGap={4} rowGap={4} >
                                <VStack maxH={"150px"} p={4} bgColor={"#3b3b3b"} borderRadius={"0.4rem"} align={"start"} justify={"space-between"}>
                                    <Text w={"100%"} fontSize={"large"}>Task Title</Text>
                                    <HStack w={"100%"} justify={'space-between'} mt={3}>
                                        <HStack>
                                            <Text>Status: </Text>
                                            <Box p={2} borderRadius={"0.4rem"} fontSize={"small"} bgColor={"orange"}>In Progress</Box>
                                        </HStack>
                                        <Button colorScheme='red'>
                                            Delete
                                        </Button>
                                    </HStack>
                                </VStack>

                                <VStack maxH={"150px"} p={4} bgColor={"#3b3b3b"} borderRadius={"0.4rem"} align={"start"} justify={"space-between"}>
                                    <Text w={"100%"} fontSize={"large"}>Task Title</Text>
                                    <HStack w={"100%"} justify={'space-between'} mt={3}>
                                        <HStack>
                                            <Text>Status: </Text>
                                            <Box p={2} borderRadius={"0.4rem"} fontSize={"small"} bgColor={"green"}>Completed</Box>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <VStack maxH={"150px"} p={4} bgColor={"#3b3b3b"} borderRadius={"0.4rem"} align={"start"} justify={"space-between"}>
                                    <Text w={"100%"} fontSize={"large"}>Task Title</Text>
                                    <HStack w={"100%"} justify={'space-between'} mt={3}>
                                        <HStack>
                                            <Text>Status: </Text>
                                            <Box p={2} borderRadius={"0.4rem"} fontSize={"small"} bgColor={"orange"}>In Progress</Box>
                                        </HStack>
                                        <Button colorScheme='red'>
                                            Delete
                                        </Button>
                                    </HStack>
                                </VStack>
                                <VStack maxH={"150px"} p={4} bgColor={"#3b3b3b"} borderRadius={"0.4rem"} align={"start"} justify={"space-between"}>
                                    <Text w={"100%"} fontSize={"large"}>Task Title</Text>
                                    <HStack w={"100%"} justify={'space-between'} mt={3}>
                                        <HStack>
                                            <Text>Status: </Text>
                                            <Box p={2} borderRadius={"0.4rem"} fontSize={"small"} bgColor={"orange"}>In Progress</Box>
                                        </HStack>
                                        <Button colorScheme='red'>
                                            Delete
                                        </Button>
                                    </HStack>
                                </VStack>
                                <VStack maxH={"150px"} p={4} bgColor={"#3b3b3b"} borderRadius={"0.4rem"} align={"start"} justify={"space-between"}>
                                    <Text w={"100%"} fontSize={"large"}>Task Title</Text>
                                    <HStack w={"100%"} justify={'space-between'} mt={3}>
                                        <HStack>
                                            <Text>Status: </Text>
                                            <Box p={2} borderRadius={"0.4rem"} fontSize={"small"} bgColor={"orange"}>In Progress</Box>
                                        </HStack>
                                        <Button colorScheme='red'>
                                            Delete
                                        </Button>
                                    </HStack>
                                </VStack>
                                <VStack maxH={"150px"} p={4} bgColor={"#3b3b3b"} borderRadius={"0.4rem"} align={"start"} justify={"space-between"}>
                                    <Text w={"100%"} fontSize={"large"}>Task Title</Text>
                                    <HStack w={"100%"} justify={'space-between'} mt={3}>
                                        <HStack>
                                            <Text>Status: </Text>
                                            <Box p={2} borderRadius={"0.4rem"} fontSize={"small"} bgColor={"orange"}>In Progress</Box>
                                        </HStack>
                                        <Button colorScheme='red'>
                                            Delete
                                        </Button>
                                    </HStack>
                                </VStack>
                                
                            </SimpleGrid>
                        </VStack>
                </SimpleGrid>
                <SideDrawer></SideDrawer>
            </VStack>
        }
    </>  
  )
}

export default Team
