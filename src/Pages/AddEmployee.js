import './Decorate.css';
import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import {useHistory} from 'react-router-dom';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Swal from 'sweetalert2'
import EmployeeService from '../EmployeeService';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 270,
    height: 'auto',
    border: '2px solid black',
    filter: 'drop-shadow(0 0 0.75rem grey)' ,
    display: 'flex',

  },
 
  title: {
    fontSize: 34,
    forWeight: 'bold',
    textAlign:'center'
  },
  pos: {
    marginBottom: 12,
  },
  date: {
  	border: '2px solid red',
  
  },
  date1: {
  	border: '2px solid green',
  
  },
 
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const AddEmployee=()=>{
	const classes = useStyles();
	const[firstname,setName]=useState("");
	const[lastname,setLastName]=useState("");
	const[date,setDate]=useState("");
	const[gender,setGender]=useState("");
	const[address,setAddress]=useState("");
	const[phone,setPhone]=useState("");
	const[emailid,setEmailId]=useState("");
	const[password,setPassword]=useState("");

	const [position, setPosition] = useState("");
  	const[salary,setSalary] = useState(0);

  	const[error,setError]=useState("");											//first name
  	const[errorVal,setErrorVal]=useState(false);

  	const[error1,setError1]=useState("");										//last name
  	const[errorvallast,setErrorValLast]=useState(false);

  	const[dateerr,setDateErr]=useState("");										//date error

  	const[phoneerr,setPhoneErr]=useState("");									//phone error
  	const[errorVal1,setErrorVal1]=useState(false);

 
  	const[emailerr,setEmailErr]=useState(false);								//email error
  	const[errtext,setErrorText]=useState("");
  	const[text,setText]=useState("");

  	const[selecterr,setSelectErr]=useState("");		
  	const[selecttxt,setSelectTxt]=useState(false);								//option error

  	const[radioerr,setRadioErr]=useState("");	

  	const[salaryerr,setSalaryErr]=useState("");
	const[salarytxt,setSalaryTxt]=useState(false);

	const[show,setShow]=useState(true);
	const[passerr,setPassErr]=useState(false);

  	const Swal = require('sweetalert2')

  	const [value,setValue]= useState(0);
  									
  const handleChange = (event) => {
    setPosition(event.target.value);
  };

	let history=useHistory();
	const handleSubmit=()=>
	{
		let employeeDetail={firstName:firstname,lastName:lastname,dateOfBirth:date,gender:gender,address:address,phoneNumber:phone,emailId:emailid,positionTitle:position,salary:salary,password:password};
		// console.log(JSON.stringify(employeeDetail));

		
		if(((firstname=="") && setErrorVal(true)) || ((lastname=="") && setErrorValLast(true)) || (date=="") || (gender=="") || ((phone=="")&&(setErrorVal1(true))) || ((emailid=="")&&setEmailErr(true)) || (position!=null) )
		{
			
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: 'Some data is missing!',
			})
		}
		if((phone.length!=10) || (text == "fail") || (position == ""))
		{
			Swal.fire({
			  icon: 'error',
			  title: 'Oops...',
			  text: 'Some data missing!',
			})
		}
		
		else
		{
			
			EmployeeService.createEmployee(employeeDetail).then(res=>{
			Swal.fire({
			  icon: 'success',
			  title: 'saved to DB',
			  text: 'move to employees list',
		 	  
			}).then(function() {
    				history.push('/report')	
				});
			console.log(res.data);
			});

			setErrorVal(false)
			setErrorValLast(false)
			setText("fail")

			setDateErr("")
			setName("")
			setLastName("")
			setDate("")
			setGender("")
			setAddress("")
			setPhone("")
			setEmailId("")
			setPosition("")
			setSalary(0)
		}
	}

	const handleAddress=(event)=>
	{
		
		setAddress(event.target.value)
	}
	
	const handleCancel=()=>{
		history.push("/home");
	}

	const handleBlur=()=>{
		if(firstname=="")
		{	
			setErrorVal(true)
			setError("This field is required")
		}
		else{setErrorVal(false); setError("")}
	}
	const handleBlurLastName=()=>
	{
		if(lastname=="")
		{
			setErrorValLast(true)
			setError1("This field is required!")
		}
		else
		{
			setErrorValLast(false)
			setError1("")
		}
	}

	const handleBlurPhone=()=>
	{
		const phonenum=new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
		if(phone.match(phonenum))
		{
			setErrorVal1(false);
			setPhoneErr("")
		}
		else
		{
			setErrorVal1(true)
			setPhoneErr("Phone No is required")
		}
	}

	const handleBlurEmail=()=>{

		const email=new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
		
		if(emailid.match(email))
		{
			setEmailErr(false)
			setErrorText("")
			setText("sucess");
		}
		else
		{
			setEmailErr(true)
			setText("fail")
			setErrorText("EmailId required")
		}
	}

	const handleBlurSelect=()=>
	{
		if(position==="")
		{
			setSelectErr("must select one option!")
			setSelectTxt(true)
		}
		else
		{
			setSelectTxt(false)
			setSelectErr("")
		}
	}

	const handleBlurDate=()=>{

		let d=new Date(date)
		let d1=d.getMonth()+1;
		let d2=d.getDate();
		let d3=d.getFullYear();
		if(isNaN(d1) || isNaN(d2) || isNaN(d3))
		{
			setDateErr(classes.date);

		}
		else
		{
			setDateErr(classes.date1);
		}
	}

	const handleBlurSalary=()=>{
		
			if(salary>=1000)
			{
				setSalaryErr("")
				setSalaryTxt(false)
			}
		
		else
		{
			setSalaryErr("Enter salary")
			setSalaryTxt(true)
		}
	}

	const handleClicking=()=>
	{
		if(show)
		{
			setShow(false);
		}
		else
		{
			setShow(true)
		}
	}
	const handleBlurPassword=()=>
	{
		var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		if(strongRegex.test(password))
		{
			setPassErr(true);
		}
		else
		{
			setPassErr(false);
		}
	}

	
	return(
	
	<div className="form2">
		<Card className={classes.root} >
		<CardContent>
			<Typography className={classes.title}  gutterBottom>
	          Employee Detail
	        </Typography>
	        <div className="form1">
		        <label className="txt1">First Name
		        <div className="field1">    	
		        	 <TextField className="txtfield1" error={errorVal} helperText={error} onBlur={handleBlur} onChange={(e)=>setName(e.target.value.toUpperCase())} value={firstname} size="small"  label="First Name" variant="outlined" required />    	
		        </div>
		        </label>
		      <br/>

		        <label className="txt1">Last Name
		        	<TextField className="txtfield2" error={errorvallast} helperText={error1} onBlur={handleBlurLastName}  onChange={(e)=>setLastName(e.target.value.toUpperCase())} value={lastname} size="small"  label="Last Name" variant="outlined" />
		        </label>
		       <br/>
		       
		        <label className="txt1">Date Of Birth
		        <div className="field2">
		        	 <input className="date" className={dateerr} onBlur={handleBlurDate}  onChange={(e)=>setDate(e.target.value)} type="date" name="begin" 
					        placeholder="dd-mm-yyyy" value={date}
					        min="1996-01-01" max="2030-12-31"
					 />{isNaN(date) ? <CheckCircleIcon style={{color:'green'}} /> : <CancelIcon style={{color:'red'}} />}
		        </div>
		        </label>
		         <br/>

		        <label className="txt">Gender
		        <div className="radio1">
		        	 <RadioGroup className="radio" aria-label="gender" name="gender1" value={gender} onChange={(e)=>setGender(e.target.value)}>
				        <FormControlLabel value="female" control={<Radio />} label="Female" />
				        <FormControlLabel value="male" control={<Radio />} label="Male" />
				     
				      </RadioGroup>
		        </div>
		        </label>
		         <br/>

		        <label className="txt1">Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		        <div>
		        	<TextField className="address"  onChange={handleAddress} value={address} size="small" className={classes.input} label="Address Line-1" variant="outlined" required/>       	
		        </div>
		        </label>
		  		 <br/>
		        
		        <label  className="txt1">Phone Number
		        <div >
				<PhoneInput
				style={{height:'40px',marginLeft:'20px',position:'relative'}}
						international
						defaultCountry="IN"
						value={value}
						
						onChange={setValue}/>
		        </div>
				
		        </label>
		         <br/>
		     
		        <label className="txt1">Email Id
		        <div>
		        	<TextField className="emailid" error={emailerr} helperText={errtext} onBlur={handleBlurEmail} onChange={(e)=>{setEmailId(e.target.value)}} label="Email Id" placeholder="ex:abc@gmail.com" value={emailid} size="small" variant="outlined" required/>{((text ==="sucess") && <CheckCircleIcon style={{color:'green',position:'relative',left:'58px',top:'5px'}} />) || ((text==="fail") && <CancelIcon className="circle2" style={{color:'red'}} />) }
		        </div>
		        </label>
		         <br/>

		        <label className="txt1">Password
		        <div>
		         	<input onBlur={handleBlurPassword} style={{border:'1px solid green',height:'35px',width:'200px',left:'44px',top:'20px',position:'relative'}} placeholder="password" type={(show) ? "password" : "text"} value={password} onChange={(e)=>{setPassword(e.target.value)}}/><label style={{left:'10px',top:'26px',position:'relative'}} onClick={handleClicking}>{(show) ? <VisibilityIcon /> : <VisibilityOffIcon />}</label>{(passerr) ? <p style={{color:'green',marginTop:'19px',display:'flex',justifyContent:'center'}}>Success</p> : <p style={{color:'red',display:'flex',marginTop:'24px',justifyContent:'center'}}>Password is required</p> }
		        </div>
		        </label>

		        <br />
		        <label className="txt1">Position title
		        <div className="select">
		        		<NativeSelect
				          id="demo-customized-select-native"
				          value={position}
				          onChange={(e)=>setPosition(e.target.value)}
				          input={<BootstrapInput />}
				          onBlur={handleBlurSelect}
				          error={selecttxt} 
				          helperText={selecterr}
				          
				        >
				          <option label="Select Title" value="" />
				          <option value="Android App Development">Android App Development</option>
				          <option value="Java Developer">Java Developer</option>
				          <option value="AngularJs Developer">Angular Js</option>
				          <option value="Fresher">Fresher</option>
				           <option value="Web Development">Web Development</option>
				        </NativeSelect>{(position==="") ? <CancelIcon style={{color:'red',position:'relative',left:'8px'}} /> : <CheckCircleIcon style={{color:'green',position:'relative',left:'8px'}} />}
		        </div>
		        </label>
		 		 <br/>

		 		  <label  className="txt1">Salary
		        <div>
					<TextField className="salary" error={salarytxt} helperText={salaryerr} onBlur={handleBlurSalary} type="number" onChange={(e)=>setSalary(e.target.value)} value={salary} placeholder="XXXXXXX" label="Salary" size="small" variant="outlined" required/>{(salary >=1000) ? <CheckCircleIcon style={{color:'green',position:'relative',left:'65px',top:'5px'}} /> : <CancelIcon className="circle3" style={{color:'red',position:'relative',left:'65px'}} />}
		        </div>
		        </label>
		         <br/>

		        <div className="btn">
		        	<Button onClick={handleSubmit} variant="contained" color="primary">
					  Save
					</Button>
		   
		        	<Button onClick={handleCancel} variant="contained" color="secondary">
					  Cancel
					</Button>
		        </div>

	        </div>
		</CardContent>
		</Card>
		  <footer className="footer">
		  		<p>All rights are reserved @2021</p>
	 	  </footer>
		</div>
		
		)
}
export default AddEmployee;