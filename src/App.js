
import React,{useState} from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Routing from './Routing.js';
import AddClass from './Pages/AddClass';
import AddEmployee from './Pages/AddEmployee';
import Report from './Pages/Report';
import LeaveEmployee from './Pages/LeaveEmployee';
import Salary from './Pages/Salary';
import SalaryReport from './Pages/SalaryReport';
import Login from './Login.js';
import Routing1 from './Routing1.js';
import MyAccount from './Pages1/MyAccount';
import Employee from './Employee.js';

const App=()=>
{
  console.log("hai home");
  const[login,setLogin]=useState(false);

  const handleChange=(newlogin)=>
  {
    setLogin(newlogin);
  }

  console.log(login);

  return(
    <div>
  
   {login===true ?  <Router>
    
      <Routing/>

      <Switch>

      <Route exact path="/home" component={Home} />
      <Route exact path="/add-class" component={AddClass} />
       <Route exact path="/addEmployee" component={AddEmployee} />
        <Route exact path="/report" component={Report} />
         <Route exact path="/leave-employee" component={LeaveEmployee} />
          <Route exact path="/salary" component={Salary} />
           <Route exact path="/salary-report" component={SalaryReport} />
            <Route exact path="/year-wise-salary" component={SalaryReport} />
             <Route exact path="/admin" component={SalaryReport} />
              <Route exact path="/change-password" component={SalaryReport} />
      </Switch>
    </Router>: <Login handleChange1={handleChange} />}

    </div>
    );
}
export default App;