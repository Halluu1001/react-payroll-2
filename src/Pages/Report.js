 import './Decorate.css';



import React,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Decorate.css';
import EmployeeService from '../EmployeeService';

const useStyles = makeStyles({
	  table: {
	    minWidth: 400,
	    width:'auto',
	    backGroundSize:'cover',
	   
	  },
	  table1: {
	    display: 'flex',
		justifyContent: 'center',
	  	position: 'absoulte',
	  	// boxShadow: '5px 10px #888888',
	  	filter: 'drop-shadow(0 0 0.75rem crimson)',

	    }
	});

const Report =()=>
{
	const[employee,setEmployee]=useState([]);

	useEffect(()=>{
		EmployeeService.getEmployees().then((res)=>{
			setEmployee(res.data)
		});
	});

	
	const classes = useStyles();
	// const Swal = require('sweetalert2')

	const handleClick=(id)=>
	{
		Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
		  if (result.isConfirmed) 
		  {
		  	EmployeeService.deleteEmployee(id).then(res=>{
		    Swal.fire(
		      'Deleted!',
		      'Your data has been deleted.',
		      'success'
		    )
		    setEmployee(employee.filter(employee=>employee.id != id));
			})

		    	
		  }
		})
		
	}


return(
	 <div>
	<div>
	
	<div className="main">
	
		<TableContainer className={classes.table1} component={Paper}>
	      <Table className={classes.table} aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <TableCell><strong>Employee Id</strong></TableCell>
	            <TableCell align="right"><strong>First Name</strong></TableCell>
	            <TableCell align="right"><strong>Last Name</strong></TableCell>
	            <TableCell align="right"><strong>Date Of Birth</strong></TableCell>
	            <TableCell align="right"><strong>Gender</strong></TableCell>
	            <TableCell align="right"><strong>Address</strong></TableCell>
	            <TableCell align="right"><strong>Phone Number</strong></TableCell>
	            <TableCell align="right"><strong>Email Id</strong></TableCell>
	    		<TableCell align="right"><strong>Password</strong></TableCell>
	            <TableCell align="right"><strong>Position Title</strong></TableCell>
	            <TableCell align="right"><strong>Salary</strong></TableCell>
	            <TableCell align="right"><strong>Actions</strong></TableCell>
	          </TableRow>
	        </TableHead>	
	        <TableBody>
	        	{employee.map((employe) => 
	        		(
	        	<TableRow key={employee.id}>
			        		 <TableCell component="th" scope="row">
				                {employe.id}
				              </TableCell>
				              <TableCell align="right">{employe.firstName}</TableCell>
				              <TableCell align="right">{employe.lastName}</TableCell>
				              <TableCell align="right">{employe.dateOfBirth}</TableCell>
				              <TableCell align="right">{employe.gender}</TableCell>
				              <TableCell align="right">{employe.address}</TableCell>
				              <TableCell align="right">{employe.phoneNumber}</TableCell>
				              <TableCell align="right">{employe.emailId}</TableCell>
				              <TableCell align="right">{employe.password}</TableCell>
				              <TableCell align="right">{employe.positionTitle}</TableCell>
				              <TableCell align="right">{employe.salary}</TableCell>
				              <TableCell align="right">
				              	
				              	<DeleteOutlineIcon style={{color:'red'}} onClick={()=>handleClick(employe.id)}  />
								
							  </TableCell>
							  
	        	</TableRow>
	        	 ))}
	        </TableBody>
	     </Table>
    	</TableContainer>
    
    </div>
     
    	</div>
    	<footer>
        <p style={{position: 'fixed',left: 0,bottom: 0,width: '100%',backgroundColor: 'blue',color: 'white',textAlign: 'center',height: '40px'}}>All rights are reserved @2021</p>
    </footer>
    </div>
	);
	
}
export default Report;