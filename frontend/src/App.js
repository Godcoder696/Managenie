import { HStack, Text } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/dashboard/components/DashBoard';
import LoginSignup from './pages/login-signup/LoginSignup';

function App() {
  return (
    <>
      <HStack className='root' justify={"center"} spacing={20}> 
        <Switch>
            <Route path="/" exact><LoginSignup></LoginSignup></Route>
            <Route path="/dashboard" exact><DashBoard></DashBoard></Route>
            <Route path="/one" ><Text>Hello one</Text></Route>
            <Route path="/two" ><Text>Hello two</Text></Route>
            <Route><>404 No Page Found!</></Route>
        </Switch>
      </HStack>
    </>
  );
}

export default App;
