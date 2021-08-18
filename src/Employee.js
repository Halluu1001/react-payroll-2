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

const Employee=()=>
{
	const [value, setValue] = useState('Admin');
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
		<div>
		{val===true ? null : <div className="App-header1">
			<label>Employee Login</label>
			 <label>Enter userName:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></label>
		      <label>Enter Password:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
		     <br/>
		     <div className="btn">
		      <Button variant="contained" color="secondary" onClick={handleClick}>
		            Employee Login
		      </Button>
		    
		      </div>
		</div>}
		{val===true && <EmpRoute student={name1.toLowerCase()} count1={count} id={id} />}
		</div>
		)
}
export default Employee;