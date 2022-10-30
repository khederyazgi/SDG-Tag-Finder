import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

class Searchbar extends React.Component {


  
    render() {
      return (
        <Grid container   justifyContent="space-between" > 
                <Grid container   lg={1} alignItems="center"   justifyContent="flex-start"/>
                <Grid container   lg={7} alignItems="flex-start"   justifyContent="flex-start">
                <TextField id="filled-basic" label="Filled" variant="filled"  style ={{width: '100%'}}  />
                </Grid>

                <Grid   container   lg={1}  juustifyContent="flex-start" alignItems="center" />
                <Grid   container   lg={3}  juustifyContent="flex-start" alignItems="center" >
                <Button variant="contained" sx={{backgroundColor:" #4C9F38"}}>Find Tags</Button> 
                </Grid>
        </Grid>







      );
    }
  }

  export default Searchbar;
