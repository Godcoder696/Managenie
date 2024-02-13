import { HamburgerIcon } from '@chakra-ui/icons'
import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Hero from '../../assets/pm-logo-trans.png'

function MobNav() {
  return (
    <>
        <HStack w={"100%"} px={5} display={{base:"flex",lg:"none"}}
        align={"center"} justify={"space-between"} 
        >
          <HStack align={"center"}>
            <Image src={Hero} h={"30px"}></Image>
            <Text fontSize={"x-large"} ml={2} fontWeight={"semibold"}>Managenie</Text>
          </HStack>
          <HamburgerIcon h={"25px"} w={"25px"}/>
        </HStack>
    </>
  )
}

export default MobNav
