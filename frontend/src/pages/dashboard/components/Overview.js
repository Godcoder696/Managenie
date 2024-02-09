import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Overview() {
  return (
    <>
        <VStack w={"max-content"} h={"max-content"} bgColor={"#3b3b3b"}
        py={6} px={10} spacing={5} borderRadius={10}>

            <Text alignSelf={"start"} fontSize={"large"}>Overview</Text>

            <HStack w={"max-content"} h={"max-content"} justify={"space-evenly"} spacing={10} >
                
                <Box bgColor={"purple"} h={"180px"} w={"180px"} borderRadius={"50%"}/>

                <SimpleGrid columns={3} columnGap={5} rowGap={1} alignItems={"center"}>
                    <Box h={"12px"} w={"12px"} bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text>New</Text>
                    <Text>23%</Text>

                    <Box h={"12px"} w={"12px"} bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text>In Progress</Text>
                    <Text>23%</Text>

                    <Box h={"12px"} w={"12px"} bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text>Completed</Text>
                    <Text>23%</Text>

                    <Box h={"12px"} w={"12px"} bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text>Due</Text>
                    <Text>23%</Text>
                </SimpleGrid>

            </HStack>
        </VStack> 
    </>
  )
}

export default Overview
