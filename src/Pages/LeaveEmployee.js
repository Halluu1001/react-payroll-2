 import './Decorate.css';


import React,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import EmployeeService1 from '../EmployeeService1';

const useStyles = makeStyles({
	  table: {
	    minWidth: 400,
	   	   
	  },
	  table1: {
	    display: 'flex',
		justifyContent: 'center',
	  	position: 'absoulte',
	  	// boxShadow: '5px 10px #888888',
	  	filter: 'drop-shadow(0 0 0.75rem grey)',

	    },

	});


const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,

        },
        body: {
          fontSize: 15,
          
        }
        }))(TableCell);
const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

const Report =()=>
{
	const[employee,setEmployee]=useState([]);

	useEffect(()=>{
		EmployeeService1.getLeaves().then((res)=>{
			setEmployee(res.data)
		});
	},[]);

	const classes = useStyles();
	// const Swal = require('sweetalert2')

	
	const history=useHistory();

	const[approved,setApproved]=useState(false);
	const[cancelled,setCancelled]=useState(false);

	var s={approved:'true',cancelled:'false'}
	var s1={approved:'false',cancelled:'true'}
	function setApproved1(id)
	{
		EmployeeService1.updateLeave(id,s).then((res)=>{
			console.log("the approved: ");
			setApproved(true)
		})
	}

	function setCancelled1(id)
	{
		
		EmployeeService1.updateLeave(id,s1).then((res)=>{
			console.log("the cancelled: ",id);
			
		})
		
	}
	

return(
	<>
	
	<div className="dis3">
	
		<TableContainer className={classes.table1} style={{width: 900, height: 400 , marginLeft: 90}} component={Paper}>
	      <Table className={classes.table} aria-label="customized table">
	        <TableHead>
	          <TableRow>
	          
	            <StyledTableCell align="center"><strong>Date of Leave</strong></StyledTableCell>
	            <StyledTableCell align="center"><strong>No.of Days</strong></StyledTableCell>
	            <StyledTableCell align="center"><strong>Reason</strong></StyledTableCell>
	           <StyledTableCell align="center"><strong>Employee Name</strong></StyledTableCell>
	           <StyledTableCell align="center"><strong>Action1 </strong></StyledTableCell>
	           <StyledTableCell align="center"><strong>Action2 </strong></StyledTableCell>
	          </TableRow>
	        </TableHead>	
	        <TableBody>
	        	{employee.map((employe) => 
	        		(
	        	<StyledTableRow  key={employee.id}>
			        		 
				           
				              <StyledTableCell component="th" scope="row" align="center">{employe.date}</StyledTableCell>
				              <StyledTableCell align="center">{employe.numberOfDays}</StyledTableCell>
				              <StyledTableCell align="center">{employe.reason}</StyledTableCell>
				             
				      
	        				  <StyledTableCell align="center">{employe.userEntity.firstName}</StyledTableCell>
	        				   <StyledTableCell align="center">
					        	  <Button variant="contained" title={approved===true ? "this leave is approved" : "this leave is Rejected"}  onClick={(e)=>{setApproved1(employe.id)}} color="secondary">
								  		Approved
								  </Button>
								</StyledTableCell>
								<StyledTableCell align="center">
					        	  <Button variant="contained"  onClick={(e)=>{setCancelled1(employe.id)}} color="primary">
								  		Rejected
								  </Button>
								</StyledTableCell>
				             
	        	 </StyledTableRow>
	        	 ))}
	        	 
	        </TableBody>
	     </Table>
    	</TableContainer>
    	
    </div>
    <footer>
        <p style={{position: 'sticky',left: 0,bottom: 0,width: '100%',backgroundColor: 'blue',color: 'white',textAlign: 'center',height: '40px'}}>All rights are reserved @2021</p>
    </footer>
    	</>
	);
	
}
export default Report;