import React from 'react'
import { CustomState } from '../../context/ContextProvider'
import { Box } from '@chakra-ui/react';

function Dashboard() {
    const {user}= CustomState();
    console.log(user);
  return (
    <>
    {
        localStorage.getItem("user")?
        <Box w={"100%"} h={"100%"} bgColor={"#2b2b2b"}>
            
        </Box>
        :
        <>
            Please Sign In!
        </>
    } 
    </>
  )
}

export default Dashboard
