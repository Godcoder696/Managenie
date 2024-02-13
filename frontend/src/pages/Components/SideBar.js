import React from 'react'

import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import Hero from '../../assets/pm-logo-trans.png';
import { MdDashboard } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaSquarespace } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";

function SideBar() {
  return (
    <>
      <VStack h={"100%"} w={"max-content"} bgColor={"#1e1e1e"} padding={10} alignItems={"start"} display={{lg:"initial",base:"none"}}>

        <HStack w={"max-content"} justify={"start"} spacing={7} > 
          <Image src={Hero} h={"50px"}></Image>
          <Text fontSize={"xx-large"}>Managenie</Text>
        </HStack>
        
        <VStack alignItems={"start"} w={"100%"}>
          <HStack mt={10} w={"100%"} p={3} spacing={5} >
            <MdDashboard />
            <Link color={"#3d9afc"} href='/dashboard'>Dashboard</Link>
          </HStack>
          <HStack mt={3} w={"100%"} p={3} spacing={5}>
            <RiTeamLine />
            <Link href='/Teams'>Project</Link>
          </HStack>
          <HStack mt={3} w={"100%"} p={3} spacing={5}>
            <MdOutlineWorkOutline/>
            <Link href='/Assigned'>Assigned</Link>
          </HStack>
          <HStack mt={3} w={"100%"} p={3} spacing={5}>
            <FaPlus ></FaPlus>
            <Link href='/NewTeam'>New Project</Link>
          </HStack>
          <HStack mt={3} w={"100%"} p={3} spacing={5}>
            <BiLogOutCircle ></BiLogOutCircle>
            <Link href='/LogOut'>Log Out</Link>
          </HStack> 
        </VStack>
      </VStack>
    </>
  )
}

export default SideBar
