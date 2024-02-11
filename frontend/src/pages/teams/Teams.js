import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Projects from '../dashboard/components/Projects'

function Teams() {
  return (
    <VStack w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"} spacing={5} >
        <Text fontSize={"x-large"} fontWeight={"semibold"}>
            PROJECTS
        </Text>
        
        <Projects></Projects>
    </VStack>
  )
}

export default Teams
