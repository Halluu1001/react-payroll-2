import React,{useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

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

const Table1=()=>
{
	const[employee,setEmployee]=useState([]);
	const classes = useStyles();
	return(
		<div>
		<TableContainer className={classes.table1} component={Paper}>
	      <Table className={classes.table} aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <TableCell><strong>Employee Id</strong></TableCell>
	            <TableCell align="right"><strong>Class</strong></TableCell>
	            <TableCell align="right"><strong>Basic Pay</strong></TableCell>
	            <TableCell align="right"><strong>Salary</strong></TableCell>
	            <TableCell align="right"><strong>T_ALL</strong></TableCell>
	            <TableCell align="right"><strong>M_ALL</strong></TableCell>
	            <TableCell align="right"><strong>W_ALL</strong></TableCell>
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
				            
				              <TableCell align="right">{employe.positionTitle}</TableCell>
				              <TableCell align="right">
				              	
				              	<DeleteOutlineIcon style={{color:'red'}}  />
								
							  </TableCell>
							 
	        	</TableRow>
	        	 ))}
	        </TableBody>
	     </Table>
    	</TableContainer>
    	</div>
		)
}
export default Table;