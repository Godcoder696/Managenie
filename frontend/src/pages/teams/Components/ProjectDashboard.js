import { SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectDetails from './ProjectDetails';
import NewTask from './NewTask';

function ProjectDashboard() {
  return (
    <>
        <VStack  w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"} spacing={5} >

            <Text alignSelf={"start"} fontSize={"x-large"} fontWeight={"semibold"}>Project Dashboard</Text>

            <SimpleGrid columns={2} w={"100%"} h={"100%"} mt={5} columnGap={4} overflowY={"scroll"}>

                <ProjectDetails/>

                <NewTask/>
                
            </SimpleGrid>
        </VStack>
    </>
  )
}

export default ProjectDashboard
