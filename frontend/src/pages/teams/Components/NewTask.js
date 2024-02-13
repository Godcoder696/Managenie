import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Task from './Task';

function NewTask() {
  return (
    <>
        <VStack align={"start"} spacing={5} overflowY={"scroll"}>
            <HStack w={"100%"} justify={"space-between"}>
                <Text fontSize={"large"} >Assigned Tasks:</Text>
                <Button colorScheme='green' >
                    <PlusSquareIcon mr={2}/>
                    New Task
                </Button>
            </HStack>
            <SimpleGrid minChildWidth={"300px"} w={"100%"} columnGap={4} rowGap={4} >
                <Task/>
            </SimpleGrid>
        </VStack>
        {/* <SideDrawer></SideDrawer>  */}
    </>
  )
}

export default NewTask