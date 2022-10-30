import * as React from 'react';
import logo from './assests/images/Logo.svg';
import Login from './assests/images/login.svg';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

class Header extends React.Component {


  
    render() {
      return (
        <Grid container   justifyContent="space-between" sx={{ height:"78px" }} > 
        
                <Grid container   lg={2} alignItems="center"   justifyContent="center">
                <img src={logo} width="177.6858673095703px" height="56.765869140625px" />
                </Grid>

      
                <Grid   container   lg={2}  justifyContent="center" alignItems="center" >

                  

                              <Grid item>
                                  <img src={Login} width="20.763046264648438px" height="19.378841400146484px" />
                              </Grid>



                              
                              <Grid item >
                                
                                  <Button   endIcon={<KeyboardArrowDownIcon />}>
                                  <Link
                                              underline="always" 
                                              color="#525252"
                                              fontWeight= "600"

                                              >
                                              Sign In
                                              </Link>

                                  </Button>
                              </Grid>
                </Grid>
        </Grid>







      );
    }
  }

  export default Header;

