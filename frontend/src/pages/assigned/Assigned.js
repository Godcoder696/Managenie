import React from 'react'
import {Box, Button, Center, HStack, SimpleGrid, Text, VStack} from '@chakra-ui/react'
import Request from './Components/Request'
import Progress from './Components/Progress'
import Completed from './Components/Completed'

function Assigned() {
  return (
    <>
        <VStack w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"} spacing={5} >

          <Text fontSize={"x-large"} fontWeight={"semibold"}>
            {JSON.parse(localStorage.getItem("user")).name}'s Assigned Work
          </Text>

          <SimpleGrid w={"100%"} h={"100%"} p={2} columns={3} columnGap={1} >
              <HStack >
                <Text p={3} fontSize={"larger"} fontWeight={"semibold"}>New Requests</Text>
                <Box h={"10px"} w={"10px"} bgColor={"red"} borderRadius={"50%"}/>
              </HStack>
              <HStack >
                <Text p={3} fontSize={"larger"} fontWeight={"semibold"}>In Progress</Text>
                <Box h={"10px"} w={"10px"} bgColor={"yellow"} borderRadius={"50%"}/>
              </HStack>
              <HStack >
                <Text p={3} fontSize={"larger"} fontWeight={"semibold"}>Completed</Text>
                <Box h={"10px"} w={"10px"} bgColor={"green"} borderRadius={"50%"}/>
              </HStack>
              
              

              <Request></Request>

              <Progress></Progress>

              <Completed></Completed>
          </SimpleGrid> 
        </VStack>
    </>
  )
}

export default Assigned
