import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useHistory} from 'react-router-dom';
import EmpRoute from './EmpRoute';
import EmployeeService from './EmployeeService';
import EmployeeService1 from './EmployeeService1';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import User from './userlogin.jpeg'
import Admin from './Login';

const Employee=()=>
{
	const [value, setValue] = useState('Employee');
	const[name,setName]=useState("");
  	const[password,setPassword]=useState("");
  	
  	const[employee,setEmployee]=useState([]);
  		// let history=useHistory();

	const handleChange = (event) => {
    setValue(event.target.value);
  };
 	const[val,setVal]=useState(false);


 	const[leaves,setLeaves]=useState([]);
 	useEffect(()=>{
		EmployeeService1.getLeaves().then((res)=>{
			setLeaves(res.data)
		});
	},[]);

 	var s1=[];
 	leaves.map(function(user){
 		
 			s1.push({id:user.userEntity.id,name:user.userEntity.firstName});	
 	})


 	useEffect(()=>{
		EmployeeService.getEmployees().then((res)=>{
			setEmployee(res.data)
		});
	},[]);
 	console.log(employee);
 	var s=[];

 	employee.map((em)=>{
 		s.push({id:em.id,name:em.firstName,emailid:em.emailId,password:em.password})
 	})

 	
 	console.log(s);
 
 	
 	console.log("the leaves are: ",leaves.approved);
 	const[name1,setName1]=useState("");
 	const[id,setId]=useState(0);
 	var s2=[];
 	const[count,setCount]=useState(0);

 	console.log("the s is: ",s);
   const handleClick=()=>
  {

  	s.map((em1)=>{

	    if((name!=em1.emailid) || (password!=em1.password))
	    {
	      alert("verifying!!");
	      
	    }
	    else
	    {
	    	
		 	for(let i=0;i<s1.length;i++)
		 	{		 		
		 			if(s1[i].id===em1.id)
		 			{
		 				s2.push(s1[i]);
		 			}
		 	}
		 	
	    	setVal(true);
	    	setName1(em1.name)
	    	setId(em1.id);
	    	setCount(s2.length);
	    }
  	})

  }
 	console.log("the s2 is: ",s2.map((s3)=>s3));


	return(
		<div class="vh-100 d-flex justify-content-center align-items-center" >
        
		{val===true ? null : <div >
			{value==='Employee' ? <div class="card mx-auto" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src= {User} class="img-fluid rounded-start" alt="Responsive image"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: 'center'}}>Employee Login</h5><br/>
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
  <input value="Employee" type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
  <label class="btn btn-outline-primary" for="btnradio1">Employee</label>

  <input value="Admin" type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="btnradio2">Admin</label>
</div></div>
      </div>
    </div>
  </div>
 
</div>
			// {/* <label>Employee Login</label>
			// <br/> <label style={{textAlign: 'center'}}>Enter User Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></label>
		    //   <br/><label style={{textAlign: 'center'}}>Enter Password:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
		    //  <br/>
		    //  <div className="btn">
		    //   <Button variant="contained" color="secondary" onClick={handleClick}>
		    //         Employee Login
		    //   </Button>
		    
		    //   </div> */}
			:<Admin />}	</div>}
		{val===true && <EmpRoute student={name1.toLowerCase()} count1={count} id={id} />}
		
		</div>
		)
}
export default Employee;