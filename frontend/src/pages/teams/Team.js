import { ChevronDownIcon, PlusSquareIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import ProjectDashboard from './Components/ProjectDashboard';

function Team() {
    const [lodaing,setLoading]= useState(false);

  return (
    <>
        {
            lodaing?
            <>Loading</>
            :
            <ProjectDashboard/>
        }
    </>  
  )
}

export default Team
