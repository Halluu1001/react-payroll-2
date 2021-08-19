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
    <>
   <div>
   {value==='Admin' ?  <div  className="App-header2">
     
  
   
    
      <label style={{textAlign: "center", fontWeight: "bold", display:'flex',justifyContent:'center'}}>Admin Login</label>
      <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <br/>
      <div ><label style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>Enter User Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></label></div>
      <br/><label style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>Enter Password:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
     <br/> <Button variant="contained" color="secondary" onClick={handleClick}>
            Login
      </Button>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <RadioGroup className="radiobtn" aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel  value="Admin" control={<Radio />} label="Admin" />
        <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
      </RadioGroup>
      </div>
  
    </div>:<Employee />}
    </div>
    </>
    )
}
export default Login;