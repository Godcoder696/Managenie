import { HStack, Text,VStack } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SideBar from './pages/Components/SideBar';
import Assigned from './pages/assigned/Assigned';
import DashBoard from './pages/dashboard/Dashboard';
import LoginSignup from './pages/login-signup/LoginSignup';
import NewTeam from './pages/teams/NewTeam';
import Team from './pages/teams/Team';
import Teams from './pages/teams/Teams';
import LogOut from './pages/logout/LogOut';
import { HamburgerIcon } from '@chakra-ui/icons';
import MobNav from './pages/Components/MobNav';

function App() {
  return (
    <>
      <VStack className='root' justify={"center"} > 
        <MobNav/>
        <HStack w={"100%"} h={{sm:"90%",lg:"100%"}}>
          <Switch>
              <Route path="/" exact>
                <LoginSignup/>
              </Route>
              <Route path="/">
                {
                  JSON.parse(localStorage.getItem("user"))?<SideBar></SideBar>:<></>
                }
                {
                  JSON.parse(localStorage.getItem("user"))?
                  <>
                    <Route path="/dashboard" exact><DashBoard/></Route>
                    <Route path="/Teams"><Teams /></Route>
                    <Route path="/Assigned"><Assigned /></Route>
                    <Route path="/NewTeam"><NewTeam/></Route>
                    <Route path="/LogOut"><LogOut/></Route>
                    <Route path="/projects:id"><Team/></Route>
                  </>
                  :
                  <>Sign In</>
                }
                
              </Route>
              <Route><>404 No Page Found!</></Route>
          </Switch>
        </HStack>
        
      </VStack>
    </>
  );
}

export default App;
