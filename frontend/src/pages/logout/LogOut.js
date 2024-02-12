import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function LogOut() {
  return (
    <>
        <VStack w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} justify={"center"}>
          <VStack w={"40%"} h={"40%"} bgColor={"#4b4b4b"} borderRadius={"1rem"} p={10} justify={"space-evenly"}>
            <Text fontSize={"larger"}>Are you sure that you want to log out?</Text>
            <HStack w={"100%"} justify={"space-evenly"}>
              <Button w={"40%"} colorScheme='green'>Yes</Button>
              <Button w={"40%"} colorScheme='red'>No</Button>
            </HStack>
          </VStack>
        </VStack>  
    </>
  )
}

export default LogOut
