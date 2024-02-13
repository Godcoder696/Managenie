import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Task(params) {
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
        <VStack maxH={"150px"} p={4} bgColor={"#3b3b3b"} borderRadius={"0.4rem"} align={"start"} justify={"space-between"}>

            <Text w={"100%"} fontSize={headText} >Task Title</Text>

            <HStack w={"100%"} justify={'space-between'} mt={3}>
                <HStack>
                    <Text fontSize={text}>Status: </Text>
                    <Box p={2} borderRadius={"0.4rem"} fontSize={{base:"x-small",md:"small"}} bgColor={params.col}>{params.status}</Box>
                </HStack>
                {
                    params.status!=="completed"?
                    <Button colorScheme='red' size={buttonSize}>
                        Delete
                    </Button>
                    :
                    <></>
                }
            </HStack>
        </VStack>
    </>
  )
}

export default Task
