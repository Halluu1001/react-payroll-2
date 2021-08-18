import React from 'react';
import Routing1 from './Routing1.js';
import MyAccount from './Pages1/MyAccount';
import Leave from './Pages1/Leave';
import {useHistory} from 'react-router-dom';
import SalaryReport from './Pages1/SalaryReport';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Employee from './Employee.js';
const EmpRoute=(props)=>
{
  console.log(props.student);
	return(

	<Router>
    <Routing1/>

      <Switch>
          <Route exact path="/employeelogin">
            <Employee />
          </Route>
          <Route exact path="/MyAccount">
            <MyAccount student1={props.student} c={props.count1} />
          </Route>
          <Route exact path="/Leave">
            <Leave id1={props.id} />
          </Route>
          <Route exact path="/salary-report">
            <SalaryReport name={props.student} />
          </Route>
      </Switch>
    </Router>
		)
}
export default EmpRoute;