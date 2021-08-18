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

const Login=(props)=>
{
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[correct,setCorrect]=useState(false);
  console.log("hai login");

  const[radio1,setRadio1]=useState(true);

  const handleClick=()=>
  {
    if((name!="Admin") || (password!="Admin@123"))
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
    <>
   <div className="App-header1">
    {value==='Admin' ? <div className="App-header1">
      <label>Admin Login</label>
      <label>Enter userName:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></label>
      <label>Enter Password:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
      <Button variant="contained" color="secondary" onClick={handleClick}>
            Login
      </Button>
      <RadioGroup className="radiobtn" aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel  value="Admin" control={<Radio />} label="Admin" />
        <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
      </RadioGroup>
    </div>:<Employee />}

    </div>
    </>
    )
}
export default Login;