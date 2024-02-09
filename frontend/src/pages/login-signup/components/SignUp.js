import React, { useState } from 'react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftAddon, TabPanel, Text, VStack, useToast } from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { CustomState } from '../../../context/ContextProvider'

function SignUp() {
    const [email,setEmail]= useState();
    const [userName,setUserName]= useState();
    const [password,setPassword]= useState();
    const [loading,setLoading]= useState(false);
    const {setUser}= CustomState();
    const toast= useToast();
    const history= useHistory();
    
    const handleSignUp= async ()=>{
        setLoading(true);

        if(!userName || !email || !password ){
            toast({
                title:"Enter All Fields",
                description:"Name, Email & Password should be filled!",
                status:"warning",
                isClosable:true,
                duration:2500
            })
        }
        else{
            try {
                const config={
                    headers:{
                        "Content-type":"application/json"
                    }
                }

                const {data}= axios.post("http://localhost:5000/route/user/signup",{userName,email,password},config)

                setUser(data);

                toast({
                    title:"Id Created!",
                    status:"success",
                    isClosable:true,
                    duration:2500
                })

                localStorage.setItem("user",JSON.stringify(data));
                console.log(data);

                history.push("/dashboard");
            } catch (error) {
                toast({
                    title:"Error Occured",
                    description:error,
                    status:"danger",
                    isClosable:true,
                    duration:2500
                })
            }
        }

        setLoading(false);
    }

  return (
    <TabPanel>
        <VStack>
            <InputGroup size={"lg"}>
                <InputLeftAddon>
                    <FaUser/>
                </InputLeftAddon>
                <Input type='text' placeholder='Enter your user name' onChange={(e)=>{setUserName(e.target.value)}}/>
            </InputGroup>
            <InputGroup size={"lg"} mt={3}>
                <InputLeftAddon>
                    <EmailIcon></EmailIcon>
                </InputLeftAddon>
                <Input type='email' placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </InputGroup>
            <InputGroup mt={3} size={"lg"}>
                <InputLeftAddon>
                    <LockIcon></LockIcon>
                </InputLeftAddon>
                <Input type='password' placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
            </InputGroup>
            {
                loading?
                <Button mt={3} w={"100%"} colorScheme='blue' loadingText="Siging you up" isLoading/>
                :
                <Button mt={3} w={"100%"} colorScheme='blue' onClick={()=>{handleSignUp()}}>Sign-Up</Button>
            }
            
            <Text fontSize={"10px"} fontWeight="10px">OR </Text>
            <Button leftIcon={<FcGoogle />} w={"100%"} colorScheme='red'>
                Google
            </Button>
        </VStack>
    </TabPanel>
  )
}

export default SignUp
