import { Box, HStack, Image, Tab, TabList, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import BG from '../../assets/pm-hp-bg.png';
import Hero from '../../assets/pm-logo-trans.png';


function LoginSignup() {
    
  return (
    <>
        <VStack >
          <HStack alignItems={"center"} justify={"start"}>
            <Image src={Hero} h={"150px"}/>
            <Text fontSize={"40px"}  className='logoTxt'>Managenie</Text>
          </HStack>
          <Image src={BG} ></Image>
        </VStack>
        <Box h={"max-content"} w={"400px"} borderRadius={8} 
            bgColor={"whitesmoke"}
            color={"black"}
            p={2}
        >
            <Tabs isFitted variant='enclosed' colorScheme='blue'>
            <TabList mb='1em'>
                <Tab>Sign In</Tab>
                <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
                <SignIn></SignIn>
                <SignUp></SignUp>
            </TabPanels>
            </Tabs>
        </Box>
    </>
  )
}

export default LoginSignup
