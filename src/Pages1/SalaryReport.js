
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
import EmployeeService1 from '../EmployeeService1';

const SalaryReport=(props)=> {
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
      
            const classes = useStyles();

      
      const[employee,setEmployee]=useState([]);
      
      useEffect(()=>{

       EmployeeService.getEmployees().then(res=>{
        	setEmployee(res.data)
        });
      },[])

		console.log(employee);
	   console.log(props.name);

		var empdata=[];

		employee.filter(function(empdat)
		{
			if(props.name==empdat.firstName.toLowerCase())
			{
				empdata.push(empdat);
			}
		})
		   const[leave,setLeave]=useState([]);

     useEffect(()=>{

    EmployeeService1.getLeaves().then((res)=>{
        setLeave(res.data);
    })
  },[])

     var s1=[];
    var s2=[];
    leave.filter((re)=>{
      if((props.name.toUpperCase())===re.userEntity.firstName)
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

    var salary=empdata.map((sal)=>parseInt(sal.salary));
    console.log(salary);
    
     var approvedLeave=s1.length;
      var totleave=approvedLeave+s2.length;

      var totgross1=salary-(s1.length*161);
      var basic1=salary*40/100;
      var hr1=basic1*25/100;

    return (
      <div>
        <div className="dis3">
            <h4 >Salary Report</h4>
    <br/>
    
    <TableContainer component={Paper} style={{width: 'auto', height: 'auto'}}>
      <Table className={classes.table} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">firstName</StyledTableCell>
            <StyledTableCell align="center">lastName</StyledTableCell>
            <StyledTableCell align="center">Salary</StyledTableCell>
            <StyledTableCell align="center">Approved-Leave</StyledTableCell>
            <StyledTableCell align="center">Total-Leave</StyledTableCell>
            <StyledTableCell align="center">Basic(40%)</StyledTableCell>
            <StyledTableCell align="center">Hr(25%)</StyledTableCell>
             <StyledTableCell align="center">Total Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
	         { 
            empdata.map((emp) => (
              <StyledTableRow key={emp.id}>
              
                <StyledTableCell component="th" scope="row">
                  {emp.firstName}
                </StyledTableCell>
                 <StyledTableCell component="th" scope="row">
                  {emp.lastName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {emp.salary}
                </StyledTableCell>
                 <StyledTableCell>
                    {approvedLeave}
              </StyledTableCell>
               <StyledTableCell>
                    {totleave}
              </StyledTableCell>
               <StyledTableCell>
                    {basic1}
              </StyledTableCell>
               <StyledTableCell>
                    {hr1}
              </StyledTableCell>
               <StyledTableCell>
                    {totgross1}
              </StyledTableCell>
              </StyledTableRow>
            ))}
            
             
           
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    
        </div>
   
    </div>
    )
}

export default SalaryReport;