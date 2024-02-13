import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Overview() {
  return (
    <>
        <VStack w={"max-content"} h={"max-content"} bgColor={"#3b3b3b"}
        py={6} px={{md:6,base:3}} spacing={5} borderRadius={10}>

            <Text alignSelf={"start"} fontSize={"large"} ml={{base:3,md:0}}>Overview</Text>

            <HStack w={"max-content"} h={"max-content"} justify={"space-evenly"} spacing={10} >
                
                <Box bgColor={"purple"} h={{md:"180px",base:"100px"}} w={{md:"180px",base:"100px"}} borderRadius={"50%"} ml={{sm:3,md:0}}/>

                <SimpleGrid columns={3} columnGap={5} rowGap={1} alignItems={"center"}>
                    <Box h={{md:"12px",base:"8px"}} w={{md:"12px",base:"8px"}} bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text fontSize={{sm:"small",md:"medium"}}>New</Text>
                    <Text  fontSize={{sm:"small",md:"medium"}}>23%</Text>

                    <Box h={{md:"12px",sm:"8px"}} w={{md:"12px",sm:"8px"}}  bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text fontSize={{sm:"small",md:"medium"}}>In Progress</Text >
                    <Text fontSize={{sm:"small",md:"medium"}}>23%</Text>

                    <Box h={{md:"12px",sm:"8px"}} w={{md:"12px",sm:"8px"}}  bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text fontSize={{sm:"small",md:"medium"}}>Completed</Text >
                    <Text fontSize={{sm:"small",md:"medium"}}>23%</Text>

                    <Box h={{md:"12px",sm:"8px"}} w={{md:"12px",sm:"8px"}}  bgColor={"red"} borderRadius={"50%"}></Box>
                    <Text fontSize={{sm:"small",md:"medium"}}>Due</Text>
                    <Text fontSize={{sm:"small",md:"medium"}} >23%</Text>
                </SimpleGrid>

            </HStack>
        </VStack> 
    </>
  )
}

export default Overview
