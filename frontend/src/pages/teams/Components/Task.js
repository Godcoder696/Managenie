import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Task() {
  return (
    <>
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
    </>
  )
}

export default Task
