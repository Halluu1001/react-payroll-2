import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routing from './Routing';
import './App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Employee from './Employee';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Logo from './Login2.png'

const Login=(props)=>
{
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[correct,setCorrect]=useState(false);
  console.log("hai login");

  const[radio1,setRadio1]=useState(true);

  const handleClick=()=>
  {
    if((name!="123") || (password!="123"))
    {
      alert("enter correct userName and password!!");
    }
    else
    {
      props.handleChange1(true);
    }
  }
  const [value, setValue] = useState('Admin');
  


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);

  return(
    
   <div  class="vh-100 d-flex justify-content-center align-items-center">
     
     {value==='Admin' ? 

   <div class="card mx-auto" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src= {Logo} class="img-fluid rounded-start" alt="Responsive image"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: 'center'}}>Admin Login</h5><br/>
        <div class="form-floating mb-3 ">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={name} onChange={(e)=>setName(e.target.value)}/>
  <label for="floatingInput">User Name</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  <label for="floatingPassword">Password</label>
</div><br/>
        <div class="col-md-12 text-center">  <button type="button"onClick={handleClick} class="btn btn-primary"  >Login</button></div>
      <br/> <div class="col-md-12 text-center"> <div class="btn-group" role="group" aria-label="Basic radio toggle button group" value={value} onChange={handleChange}>
  <input value="Admin" type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
  <label class="btn btn-outline-primary" for="btnradio1">Admin</label>

  <input value="Employee" type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio2">Employee</label>
</div></div>
      </div>
    </div>
  </div>
 
</div>:<Employee />}
  
    
    </div>
    
    )
}
export default Login;
