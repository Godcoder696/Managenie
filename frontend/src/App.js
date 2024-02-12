import { HStack, Text } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/dashboard/Dashboard';
import LoginSignup from './pages/login-signup/LoginSignup';
import SideBar from './pages/Components/SideBar';
import Teams from './pages/teams/Teams';
import Assigned from './pages/assigned/Assigned';
import NewTeam from './pages/teams/NewTeam';
import LogOut from './pages/logout/LogOut';
import MyPlans from './pages/plan/MyPlans';
import Team from './pages/teams/Team';

function App() {
  return (
    <>
      <HStack className='root' justify={"center"} > 
        <Switch>
            <Route path="/" exact><LoginSignup></LoginSignup></Route>
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
                  <Route path="/MyPlans"><MyPlans/></Route>
                  {/* <Route path="/LogOut"><LogOut/></Route> */}
                  <Route path="/projects:id"><Team/></Route>
                </>
                :
                <>Sign In</>
              }
              
            </Route>
            <Route><>404 No Page Found!</></Route>
        </Switch>
      </HStack>
    </>
  );
}

export default App;
