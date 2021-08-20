import './Decorate.css';

import React, { useEffect, useState} from 'react'
import {withStyles, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core'
import EmployeeService from '../EmployeeService';
import NativeSelect from '@material-ui/core/NativeSelect';
import DatePicker from 'react-date-picker';

const SalaryReport=()=> {
    const useStyles = makeStyles((theme) => ({
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
      const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 15,
          
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      const[name,setName]=useState(0);
      const [value, onChange] = useState(new Date());

     
        const classes = useStyles();
   		console.log(name);

        const handleChange = (event) => {
          
        };
      
      const[employee,setEmployee]=useState([]);
      
      useEffect(()=>{

       EmployeeService.getEmployees().then(res=>{
        	setEmployee(res.data)
        });
      },[])

		console.log(employee);
	
		var empdata=[];

		employee.filter(function(empdat)
		{
			if(name==empdat.id)
			{
				empdata.push(empdat);
			}
		})
		// console.log("the empdat: ",empdata);	
    // console.log("id: ",name);
    return (
      <div>
        <div className="dis3">
            <h4 >Salary Report</h4>

		       <label>Select Name: <NativeSelect
		          onChange={(e)=>setName(e.target.value)}
		          label="Name"
		        >
		       <option value="">Select Emp name</option>
		         {
		         	employee.map((emp)=>(
		         		<option value={emp.id}>{emp.firstName}</option>
		         	))
		         }
		        </NativeSelect>
		        </label>
      <br/>
      <h4 style={{marginTop: -10,marginLeft: -150}}>Select Date:</h4>
	<div style={{marginTop: -65,marginLeft: 180}}>
      <DatePicker
        onChange={onChange}
        value={value}
      />
    </div><br/>
    
    <TableContainer component={Paper} style={{width: 1000, height: 200 , marginLeft: 60}}>
      <Table className={classes.table} aria-label="customized table" >
        <TableHead>
          <TableRow>
          	<StyledTableCell align="center">Employee Id</StyledTableCell>
            <StyledTableCell align="center">Employee Name</StyledTableCell>
            <StyledTableCell align="center">Date Of Birth</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center">Position Titile</StyledTableCell>
            <StyledTableCell align="center">Salary</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
	         { empdata.map((emp) => (
	            <StyledTableRow key={emp.id}>
	              <StyledTableCell component="th" scope="row">
	                {emp.id}
	              </StyledTableCell>
	              <StyledTableCell align="center">{emp.firstName}</StyledTableCell>
	              <StyledTableCell align="center">{emp.dateOfBirth}</StyledTableCell>
	              <StyledTableCell align="center">{emp.phoneNumber}</StyledTableCell>
	              <StyledTableCell align="center">{emp.positionTitle}</StyledTableCell>
	              <StyledTableCell align="center">{emp.salary}</StyledTableCell>
	            </StyledTableRow>
	          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    
        </div>
    <footer>
        <p style={{position: 'sticky',left: 0,bottom: 0,width: '100%',backgroundColor: 'blue',color: 'white',textAlign: 'center',height: '40px'}}>All rights are reserved @2021</p>
    </footer>
    </div>
    )
}

export default SalaryReport;