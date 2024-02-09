import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Clients from './components/Clients';
import Overview from './components/Overview';
import Projects from './components/Projects';

function Dashboard() {
  return (
    <>
        <VStack w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"} spacing={5} >

            <Text fontSize={"x-large"} fontWeight={"semibold"}>
                 Welcome {JSON.parse(localStorage.getItem("user")).name}
            </Text>

            <VStack overflowY={"scroll"} h={"max-content"} w={"100%"} spacing={7} alignItems={"start"}>

                <Overview></Overview>
    
                <Projects></Projects>            

                <Clients></Clients>

                <Box></Box>
                
            </VStack>
        </VStack>
    </>
  )
}

export default Dashboard
