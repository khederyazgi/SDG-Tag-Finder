import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Image from './image/sectionheaderimage.svg';
import Typography from '@mui/material/Typography';
class SectionheaderHome extends React.Component {


  
    render() {
      const GoalTitle = {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "25.6923p",
        lineHeight: "39px",
        color:" #515151",
      };



      const GoalDescription = {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        color:"rgba(14, 14, 14, 0.75)"
      };







      return (
        <Grid container   justifyContent="space-between" > 
                <Grid container   lg={1} alignItems="center"   justifyContent="flex-start"/>
                <Grid container   lg={2} alignItems="flex-start"   justifyContent="flex-start">
                  <Typography>
                      <Typography sx={GoalTitle} gutterBottom>
                      Find your Tag faster.s</Typography>
                      <Typography sx={GoalDescription} gutterBottom>
                      A site to explore & add current tag usage for SDG research  in OSM.</Typography>
                      
                  </Typography>
                </Grid>
      
                <Grid   container   lg={9}  juustifyContent="flex-start" alignItems="center" >
                <img  src={Image}/>
                </Grid>
        </Grid>







      );
    }
  }

  export default SectionheaderHome;
 

