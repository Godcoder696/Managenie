import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectDetails from './ProjectDetails';
import NewTask from './NewTask';

function ProjectDashboard() {
  return (
    <>
        <VStack  w={"100%"} h={"100%"} bgColor={"#2b2b2b"} p={10} align={"start"} spacing={5} >

            <Text alignSelf={"start"} fontSize={"x-large"} fontWeight={"semibold"}>Project Dashboard</Text>

            <SimpleGrid columns={2} w={"100%"} h={"100%"} mt={5} columnGap={4} overflowY={"scroll"} display={{sm:"none",md:"grid"}}>

                <ProjectDetails/>

                <NewTask/>
                
            </SimpleGrid>
            <Tabs isFitted variant='enclosed' w={"100%"} overflow={"scroll"} display={{sm:"initial",md:"none"}}>
                <TabList mb='1em'>
                    <Tab>Project Details</Tab>
                    <Tab>Tasks</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <ProjectDetails/>
                    </TabPanel>
                    <TabPanel>
                    <NewTask/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    </>
  )
}

export default ProjectDashboard
