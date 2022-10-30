import * as React from 'react';
import logo11 from './assests/images/Goals/11.svg';
import ExitIcon from './assests/images/ExitIcon.svg';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// const theme = createTheme({
//   components: {
//     MuiGrid: {
//       styleOverrides: {
//         root: {
//           backgroundColor: '#FD6925',
//           height:"135.86776733398438px"
//         },
//       },
//     },
//   },
// });

const GoalTitle = {
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "42.2428px",
  lineHeight: " 51px",
  color:" #FFFFFF",
};
const GoalDescription = {
  fontFamily: 'Inter',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "18.8492px",
  lineHeight: "23px",
  color:"rgba(255, 255, 255, 0.65)",
};


class Sectionheader extends React.Component {


    render() {
      return (

      
        
        // <ThemeProvider theme={theme}>
            // <div style={{ backgroundColor: '#FD6925', height:"135.86776733398438px"}}>
            

            <Grid sx={{ backgroundColor: '#FD6925', height:"135.86776733398438px" }} container >



                          <Grid item container   justifyContent="center" alignItems="center" lg={1}>
                          <img src={ExitIcon}  /> </Grid> 
                          <Grid item container justifyContent="flex-start" alignItems="center" lg={1}>
                          <img src={logo11} width="85.56px" height="63.37px" /> </Grid>

                          <Grid item container justifyContent="flex-start" alignItems="center" lg={7} >

                          <Typography>
                              <Typography sx={GoalTitle} gutterBottom>
                              Sustainable Cities & Communities</Typography>
                              <Typography sx={GoalDescription} gutterBottom>
                              Make cities and human settlements inclusive, safe, resilient and sustainable</Typography>
                              
                          </Typography>

      
                          </Grid> 
            </Grid>
          
        // </ThemeProvider>
        
        
        


      );
    }
  }




  


  export default Sectionheader;


//   height: 135.86776733398438px;
// width: 1440px;
// left: 0px;
// top: 0px;
// border-radius: 0px;
