import './Decorate.css';


import React, {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PDF from './PDF';
import EmployeeService1 from '../EmployeeService1';
import EmployeeService from '../EmployeeService';
import NativeSelect from '@material-ui/core/NativeSelect';

function Salary() {
 
  const ref = React.createRef();
 

  
    
    const useStyles = makeStyles((theme) => ({
      root: {
        minWidth: 450,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        table: {
            minWidth: 1000,
          },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
     
        const classes = useStyles();
        
      const[id,setId]=useState('');
      const[month,setMonth]=useState('');
      const[employee,setEmployee]=useState([]);
      
      useEffect(()=>{

       EmployeeService.getEmployees().then(res=>{
        	setEmployee(res.data)
        });
      },[])

      

      const[leave,setLeave]=useState([]);
      useEffect(()=>{
      	EmployeeService1.getLeaves().then((res)=>{
      		setLeave(res.data);
      })
      },[])

      

      console.log("the leave: ",leave);
     
        	 console.log("the name: "+id);

      console.log("the employee: ",employee);
	      console.log("the employee id: ",id);

	

	 var s=0;
   let position="";
   var lastname="";
     employee.filter((re1)=>{
     	if(id===re1.firstName)
     	{
     		s=re1.salary;  	
     		position=re1.positionTitle;
        lastname=re1.lastName;
     	}
     })
     console.log(s);


    var s1=[];
    var s2=[];

    leave.filter((re)=>{
      if((id)===(re.userEntity.firstName))
      {
       	 if(re.approved==='true')
        {
          s1.push(re);
        }
        else
        {
          s2.push(re);
        }
      }
    })
    console.log("the s1: ",s1.length);
    console.log("the s2: ",s2);

    	

    
      var approvedLeave=s1.length;
      var totleave=approvedLeave+s2.length;

      var totgross1=s-(s1.length*161);
      var basic1=s*40/100;
      var hr1=basic1*25/100;


    return (

      <div>
        <div className="main1">
            <h4 >Salary Report</h4>
         <br/>
      
     <label>Select Name: <NativeSelect
		          onChange={(e)=>setId(e.target.value)}
		          label="Name"
		        >
		       <option value="">Select Emp name</option>
		         {
		         	employee.map((emp)=>(
		         		<option value={emp.firstName}>{emp.firstName}</option>
		         	))
		         }
		        </NativeSelect>
		        </label>
		        <br/>
     
         
    {<PDF position1={position} lastname1={lastname} empname={id} basicgross={s} aprleave={approvedLeave} leave={totleave} fgross={totgross1} basic={basic1} hr={hr1} />}
       
        </div>
   
    </div>
    )
}

export default Salary