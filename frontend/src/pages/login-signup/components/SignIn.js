import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputLeftAddon, TabPanel, Text, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import { CustomState } from '../../../context/ContextProvider';

function SignIn() {
    const {setUser}= CustomState();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const [loading,setLoading]= useState(false);
    const history= useHistory()
    const toast= useToast();

    const handleLogin= async()=>{
        setLoading(true);

        if(!email || !password){
            toast({
                title:"Fill out all fields",
                description:"Email or Password can't be empty.",
                status:"warning",
                duration: 2500,
                isClosable: true
            })
        }
        else{
            try {
                const config={
                    headers:{
                        "Content-type":"application/json"
                    }
                }
                const {data}= await axios.post("http://localhost:5000/route/user/login",{email,password},config)
    
                console.log(data);
    
                setUser(data)

                toast({
                    title:"Login Success!",
                    status:"success",
                    isClosable:true,
                    duration:2500
                })

                localStorage.setItem("user",JSON.stringify(data));  
                console.log(data);
    
                history.push("/dashboard")
                
            } catch (error) {
                toast({
                    title:"Error Occurred!",
                    description:error,
                    status:"danger",
                    duration: 2500,
                    isClosable: true
                })
            }
        }
        setLoading(false);
    }

  return (
    <div>
      <TabPanel>
        <VStack>
            <InputGroup size={"lg"}>
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
                <Button mt={3} w={"100%"} colorScheme='blue' onClick={()=>{handleLogin()}}
                    isLoading loadingText="Siging you in"
                >Sign-In</Button>
                :
                <Button mt={3} w={"100%"} colorScheme='blue' onClick={()=>{handleLogin()}}
                >Sign-In</Button>
            }

            <Text fontSize={"10px"} fontWeight="10px">OR </Text>

            <Button leftIcon={<FcGoogle />} w={"100%"} colorScheme='red'>
                Google
            </Button>
        </VStack>
    </TabPanel>
    </div>
  )
}

export default SignIn
