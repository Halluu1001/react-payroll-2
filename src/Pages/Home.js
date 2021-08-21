import React,{useState,useEffect} from "react";
 import './Decorate.css';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import EmployeeService from '../EmployeeService';
import EmployeeService1 from '../EmployeeService1';
import Modal from '@material-ui/core/Modal';

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

const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 290,
  },
  title: {
    fontSize: 14,
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



const Home = () => {
	const[count,setCount]=useState(0);
	 const classes = useStyles();
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


	   EmployeeService.getEmployees().then(res=>{
        	setCount(res.data.length)
        });

     const[leave,setLeave]=useState(0);
     EmployeeService1.getLeaves().then(res=>{
          setLeave(res.data.length)
        });

     const[count1,setCount1]=useState([]);
          const[cancell,setCancel]=useState(0);

useEffect(()=>{
     EmployeeService1.getLeaves().then(res=>{
          setCount1(res.data)
        });
   },[]);


var s=[];
var s1=[];
  count1.map((approve)=>{
    if(approve.approved==='true')
    {
      return s.push(approve);
    }
    else
    {
      return s1.push(approve); 
    }
  })

 
  return (
    <div> 
	<div className="dis">
	<div className="new">
  <div style={{display:'flex',justifyContent:'space-around'}}>
	<div style={{border:'1px solid black'}}>
  <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Employee
        </Typography>
        	{count}
        </CardContent>
    </Card>
  </div>
  <div style={{border:'1px solid black'}}>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          New Leave
        </Typography>
          {leave}
        </CardContent>
    </Card>
  </div>
</div>
<div style={{border:'1px solid grey'}}>
     <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} onClick={handleOpen1} style={{cursor:'pointer'}} color="textSecondary" gutterBottom>
         Approved
        </Typography>
          {s.length}
        </CardContent>
    </Card>
</div>
<div style={{border:'1px solid orange'}}>
     <Card className={classes.root}>
      <CardContent>
        <Typography onClick={handleOpen} style={{cursor:'pointer'}} className={classes.title} color="textSecondary" gutterBottom>
         Rejected
        </Typography>
         {s1.length}
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
          s.map((ele)=>
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

	</div>	
  
   <footer>
        <p style={{position: 'sticky',left: 0,bottom: 0,width: '100%',backgroundColor: 'blue',color: 'white',textAlign: 'center',height: '40px'}}>All rights are reserved @2021</p>
    </footer>
  </div>
  );
};
export default Home;