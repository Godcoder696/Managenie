import { HStack, Text } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/dashboard/Dashboard';
import LoginSignup from './pages/login-signup/LoginSignup';
import SideBar from './pages/Components/SideBar';

function App() {
  return (
    <>
      <HStack className='root' justify={"center"} > 
        <Switch>
            <Route path="/" exact><LoginSignup></LoginSignup></Route>
            <Route path="/">
              {
                localStorage.getItem("user")?<SideBar></SideBar>:<></>
              }
              <Route path="/dashboard" exact><DashBoard></DashBoard></Route>
              <Route path="/Teams" ><Text>Hello two</Text></Route>
              <Route path="/Assigned" ><Text>Hello one</Text></Route>
              <Route path="/NewTeam" ><Text>Hello two</Text></Route>
              <Route path="/LogOut" ><Text>Hello two</Text></Route>
            </Route>
            <Route><>404 No Page Found!</></Route>
        </Switch>
      </HStack>
    </>
  );
}

export default App;
