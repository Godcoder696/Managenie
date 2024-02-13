import { PlusSquareIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Task from './Task';

function NewTask() {
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
        <VStack align={"start"} spacing={5} overflowY={"scroll"}>
            <HStack w={"100%"} justify={"space-between"}>
                <Text fontSize={headText} >Assigned:</Text>
                <Button colorScheme='green' size={buttonSize}>
                    <PlusSquareIcon mr={2}/>
                    <Text size={text}>New Task</Text>
                </Button>
            </HStack>
            <SimpleGrid minChildWidth={"300px"} w={"100%"} columnGap={4} rowGap={4} >
                <Task status="in progress" col="orange"/>
                <Task status="completed" col="green"/>
            </SimpleGrid>
        </VStack>
        {/* <SideDrawer></SideDrawer>  */}
    </>
  )
}

export default NewTask