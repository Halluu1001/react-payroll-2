import './App.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import React,{useState} from 'react';
import Employee from './Employee';

import {useHistory} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Routing() {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] =useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const[rout,setRout]=useState(false);
  
    let history = useHistory();
const[name,setName]=useState("");


  const handleClick=()=>
  {
    history.push('./MyAccount');
    setName("My Account..");
   
  }
  const handleLeave=()=>
  {
    history.push('./Leave');
    setName("Leave Form")
   
  }
  const handleSalaryReport=()=>{history.push('/salary-report');setName("Salary Report")}
  const handleLogout=()=>{window.location.reload(false)}

  

  return (
    <div>
  <div>
   <div className="App">
       <header className="App-header">
           <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List> 
                    <ListItem button>
                    
                      <ListItemText primary="My Account" className="item1"  onClick={handleClick}>
                        
                      </ListItemText><br />
                    </ListItem>
                      
                    <ListItem button>
                      <ListItemText primary="Leave" className="item1" onClick={handleLeave}>
                        
                      </ListItemText>
                    </ListItem>


                    <ListItem button>
                      <ListItemText primary="Salary Report" className="item3" onClick={handleSalaryReport}>
                        
                      </ListItemText>
                    </ListItem>
                     <ListItem button>
                      <ListItemText primary="Logout" className="item4" onClick={handleLogout}>
                        
                      </ListItemText>
                    </ListItem>

             
        </List>
       
      
      </Drawer>
      
    </div>
      </header>

    </div>
    </div>
      <footer>
        <p style={{position: 'fixed',left: 0,bottom: 0,width: '100%',backgroundColor: 'blue',color: 'white',textAlign: 'center',height: '40px'}}>All rights are reserved @2021</p>
    </footer>
    </div>
  );
}

export default Routing;
