import React, { useState,useEffect } from 'react';
// import DatePicker from "react-multi-date-picker";
// import 'react-calendar/dist/Calendar.css';
import 'react-day-picker/lib/style.css';
import DayPicker, { DateUtils } from 'react-day-picker';

import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import '../App.css';
import Swal from 'sweetalert2'
import EmployeeService1 from '../EmployeeService1';
import {useHistory} from 'react-router-dom';

function Leave(props) {
  // var value1=new Date();
  const [value, setValue] = useState([]);
  
  const [count,setCount] = useState(0);  

  const[text,setText]=useState("");


  const Swal = require('sweetalert2')
    let history=useHistory();

    console.log("the id are: ",props.id1);

   const handleDayClick=(day, { selected })=>
   {
      const selectedDays = value.concat();
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
      setValue(selectedDays)
      setCount(selectedDays.length)
   }
   console.log("the count: ",count);
   var v=[];
   value.map((dat)=>{
      var d=new Date(dat);
      var d1=d.toLocaleDateString();
      v.push(d1);
   })
   
   var datefind=v[0]+" to "+v[v.length-1];
   console.log(datefind);

  const handleClick=()=>
  {
    let leave={date:datefind,numberOfDays:count,reason:text}
    console.log(leave);
    if(count===0)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some data missing!',
      })
    }
    if(text<6)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some data missing!',
      })
    }
    else
    {
      var id=props.id1;

      EmployeeService1.getLeaveById(id,leave).then((res)=>{
        Swal.fire({
        icon: 'success',
        title: 'saved to DB',
        text: 'move to employees list',
        
      }).then(function() {                                
            history.push('/MyAccount')

        });
      })
      setCount(0)
      setText("")
      setValue([]) 
    }
  }
    

  return (
    
    <div style={{minHeight: '100vh',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',fontSize: 'calc(10px + 2vmin)',textAlign: 'center',marginTop: '-800px'}}>
      
        <h4>Leave Application Form</h4>
    <div className="match"   style={{border:'1px solid black'}}>
        <DayPicker
          selectedDays={value}
          onDayClick={handleDayClick}

        />
         
    </div>
   
    <label>Number Of Days:  {count}</label>
    
    <TextField
          id="outlined-textarea"
          label="Reason"
          placeholder=""
          multiline
          variant="outlined"
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
        />
  
      <Button   style={{backgroundColor: '#561571', color: '#FFFFFF', float: 'right'}} onClick={handleClick} >Apply</Button>
    </div>
  );
}

export default Leave;