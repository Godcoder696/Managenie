import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Progress() {
  return (
    <>
        <VStack p={3} align={"start"} overflowY={"scroll"}>
            <Box h={"100%"} w={"100%"}>

                <VStack maxH={"250px"} w={"100%"} bgColor={"#3b3b3b"} borderRadius={6} mt={2} p={3} align={"start"} justify={"space-between"}>
                    <Box>
                        <Text fontSize={"larger"} overflow={"hidden"} fontWeight={"semibold"}>Task Title</Text>
                        <Text fontSize={"small"} mt={1}>Task Description</Text>
                    </Box>
                    <HStack alignSelf={"end"} mt={5}>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='blue'>In Progress</Button>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='teal'>Completed</Button>
                    </HStack>
                </VStack>
                
                <VStack maxH={"250px"} w={"100%"} bgColor={"#3b3b3b"} borderRadius={6} mt={2} p={3} align={"start"} justify={"space-between"}>
                    <Box>
                        <Text fontSize={"larger"} overflow={"hidden"} fontWeight={"semibold"}>Task Title</Text>
                        <Text fontSize={"small"} mt={1}>Task Description</Text>
                    </Box>
                    <HStack alignSelf={"end"} mt={5}>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='blue'>In Progress</Button>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='teal'>Completed</Button>
                    </HStack>
                </VStack>

                <VStack maxH={"250px"} w={"100%"} bgColor={"#3b3b3b"} borderRadius={6} mt={2} p={3} align={"start"} justify={"space-between"}>
                    <Box>
                        <Text fontSize={"larger"} overflow={"hidden"} fontWeight={"semibold"}>Task Title</Text>
                        <Text fontSize={"small"} mt={1}>Task Description</Text>
                    </Box>
                    <HStack alignSelf={"end"} mt={5}>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='blue'>In Progress</Button>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='teal'>Completed</Button>
                    </HStack>
                </VStack>

                <VStack maxH={"250px"} w={"100%"} bgColor={"#3b3b3b"} borderRadius={6} mt={2} p={3} align={"start"} justify={"space-between"}>
                    <Box>
                        <Text fontSize={"larger"} overflow={"hidden"} fontWeight={"semibold"}>Task Title</Text>
                        <Text fontSize={"small"} mt={1}>Task Description</Text>
                    </Box>
                    <HStack alignSelf={"end"} mt={5}>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='blue'>In Progress</Button>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='teal'>Completed</Button>
                    </HStack>
                </VStack>

                <VStack maxH={"250px"} w={"100%"} bgColor={"#3b3b3b"} borderRadius={6} mt={2} p={3} align={"start"} justify={"space-between"}>
                    <Box>
                        <Text fontSize={"larger"} overflow={"hidden"} fontWeight={"semibold"}>Task Title</Text>
                        <Text fontSize={"small"} mt={1}>Task Description</Text>
                    </Box>
                    <HStack alignSelf={"end"} mt={5}>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='blue'>In Progress</Button>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='teal'>Completed</Button>
                    </HStack>
                </VStack>

                <VStack maxH={"250px"} w={"100%"} bgColor={"#3b3b3b"} borderRadius={6} mt={2} p={3} align={"start"} justify={"space-between"}>
                    <Box>
                        <Text fontSize={"larger"} overflow={"hidden"} fontWeight={"semibold"}>Task Title</Text>
                        <Text fontSize={"small"} mt={1}>Task Description</Text>
                    </Box>
                    <HStack alignSelf={"end"} mt={5}>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='blue'>In Progress</Button>
                        <Button size={"sm"} borderRadius={"0.5rem"}  p={4} colorScheme='teal'>Completed</Button>
                    </HStack>
                </VStack>
            </Box>
        </VStack>
    </>
  )
}

export default Progress
