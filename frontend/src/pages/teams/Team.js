import { Box, HStack, Input, InputGroup, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function Team() {
    const [lodaing,setLoading]= useState(false);

  return (
    <>
        {
            lodaing?
            <>Loading</>
            :
            <VStack  w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"} spacing={5} >

                <Text alignSelf={"start"} fontSize={"x-large"} fontWeight={"semibold"}>Project Dashboard</Text>

                    <SimpleGrid columns={2} w={"100%"} h={"100%"} mt={5} columnGap={4}>
                        
                        <VStack align={"start"} spacing={5} overflowY={"scroll"}>
                            <Text fontSize={"large"} >Project Details:</Text>
                            <VStack align={"start"} w={"70%"}>
                                <Text color={"#3d9afc"}>project name*</Text>
                                <Input type='text' value='previous name'></Input>
                            </VStack>
                            <VStack align={"start"} w={"70%"}>
                                <Text color={"#3d9afc"}>project description*</Text>
                                <Textarea type='text' value={"previous description"} resize={"none"} h={"150px"}/>
                            </VStack>
                            <HStack justify={"space-between"} w={"70%"}>
                                <Text fontWeight={"bold"} fontSize={"large"}>Start Date: </Text>
                                <Text fontWeight={"bold"} fontSize={"large"}>dd/mm/yyyy</Text>
                            </HStack>   


                        </VStack>

                        <VStack align={"start"}>
                            <Text fontSize={"large"}>Assigned Tasks:</Text>
                        </VStack>
                </SimpleGrid>
            </VStack>
        }
    </>  
  )
}

export default Team
