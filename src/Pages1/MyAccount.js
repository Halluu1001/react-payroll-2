import React,{useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import EmployeeService1 from '../EmployeeService1';
import './Decorate1.css';
import Modal from '@material-ui/core/Modal';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 290,
  },
  title: {
    fontSize: 24,
    color:'red'
  },
  pos: {
    marginBottom: 12,
  },
   paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const MyAccount=(props)=>
{
  
	 const classes = useStyles();
   const[leave,setLeave]=useState([]);
    const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

   useEffect(()=>{

    EmployeeService1.getLeaves().then((res)=>{
        setLeave(res.data);
    })
  },[])
    
    var s1=[];
    var s2=[];
    leave.filter((re)=>{
      if((props.student1.toUpperCase())===re.userEntity.firstName)
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
  

	return(
	<div className="dis1">
	<h1 style={{position:'relative',top:'-120px',color:'black'}} >welcome {props.student1}</h1>

  <div style={{display:'flex',justifyContent:'space-between'}}>
		
    <Card className={classes.root} style={{border:'1px solid red'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Leaves
        </Typography>
        	{props.c}
        </CardContent>
    </Card>

    <Card className={classes.root} style={{border:'1px solid red'}}>
      <CardContent>
        <Typography className={classes.title} style={{cursor:'pointer'}} color="textSecondary" onClick={handleOpen1} gutterBottom>
          Approved Leave
        </Typography>
          {s1.length}
        </CardContent>
    </Card>

  </div>
  <div style={{display:'flex',justifyContent:'space-between',border:'1px solid red'}}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} style={{cursor:'pointer'}} color="textSecondary" onClick={handleOpen} gutterBottom>
          Rejected
        </Typography>
          {s2.length}
        </CardContent>
    </Card>
</div>

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{cursor:'pointer'}}
      >
        <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Cancelled Leave</h2>
      <p id="simple-modal-description">
         {
          s2.map((ele)=>
          {
            return(
            <ul>
              <li>
              <p>Employee Name: {ele.userEntity.firstName}</p>
              <p>Reason: {ele.reason}</p>
              </li>      
            </ul>
              )
          })                   
         }
      </p>
     
    </div>
      </Modal>

     <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{cursor:'pointer'}}
      >
        <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Approved Leave</h2>
      <p id="simple-modal-description">
         {
          s1.map((ele)=>
          {
            return(
            <ul>
              <li>
              <p>Employee Name: {ele.userEntity.firstName}</p>
              <p>Reason: {ele.reason}</p>
              </li>      
            </ul>
              )
          })                   
         }
      </p>
     
    </div>
      </Modal>

    </div>
		)
}
export default MyAccount;