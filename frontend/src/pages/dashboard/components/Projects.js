import { Progress, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Projects() {
  return (
    <>
        <Text alignSelf={"start"} fontSize={"x-large"} fontWeight={"semibold"}> Projects</Text>

        <SimpleGrid w={"100%"} minH={"max-content"} minChildWidth={"280px"} columnGap={4} rowGap={4}>
            
        
            <VStack align={"start"} bgColor={"#3b3b3b"} px={10} py={6} borderRadius={10} spacing={2} >
                <Text>Money Manager</Text>
                <Text fontSize={"small"}>IOS</Text>
                <Text mt={2} bgColor={"#4a4a4a"} px={5} py={2} borderRadius={8}>09-02-2024</Text>
                <Progress value={20} size='xs' colorScheme='green' w={"100%"}
                h={1} mt={3}/>

            </VStack>
            <VStack align={"start"} bgColor={"#3b3b3b"} px={10} py={6} borderRadius={10} spacing={2}>
                <Text>Money Manager</Text>
                <Text fontSize={"small"}>IOS</Text>
                <Text mt={2} bgColor={"#4a4a4a"} px={5} py={2} borderRadius={8}>09-02-2024</Text>
                <Progress value={20} size='xs' colorScheme='green' w={"100%"}
                h={1} mt={3}/>

            </VStack>
            <VStack align={"start"} bgColor={"#3b3b3b"} px={10} py={6} borderRadius={10} spacing={2}>
                <Text>Money Manager</Text>
                <Text fontSize={"small"}>IOS</Text>
                <Text mt={2} bgColor={"#4a4a4a"} px={5} py={2} borderRadius={8}>09-02-2024</Text>
                <Progress value={20} size='xs' colorScheme='green' w={"100%"}
                h={1} mt={3}/>

            </VStack>
            <VStack align={"start"} bgColor={"#3b3b3b"} px={10} py={6} borderRadius={10} spacing={2}>
                <Text>Money Manager</Text>
                <Text fontSize={"small"}>IOS</Text>
                <Text mt={2} bgColor={"#4a4a4a"} px={5} py={2} borderRadius={8}>09-02-2024</Text>
                <Progress value={20} size='xs' colorScheme='green' w={"100%"}
                h={1} mt={3}/>

            </VStack>
            <VStack align={"start"} bgColor={"#3b3b3b"} px={10} py={6} borderRadius={10} spacing={2}>
                <Text>Money Manager</Text>
                <Text fontSize={"small"}>IOS</Text>
                <Text mt={2} bgColor={"#4a4a4a"} px={5} py={2} borderRadius={8}>09-02-2024</Text>
                <Progress value={20} size='xs' colorScheme='green' w={"100%"}
                h={1} mt={3}/>

            </VStack>
        </SimpleGrid> 
    </>
  )
}

export default Projects
