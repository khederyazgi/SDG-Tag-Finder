import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
class Nav extends React.Component {


  
    render() {
      return (



        <Grid container    justifyContent="flex-start" alignItems="center" sx={{ backgroundColor: '#FFCCB4', height:"39px" }}  > 
                                        <Grid container justifyContent="center" alignItems="center"  xs={1} >
                                        <Button sx={{color: "white"}}>Overview</Button>
                                        </Grid>
                                        <Grid container justifyContent="center" alignItems="center"  xs={1} >
                                        <Button sx={{color: "white"}}>Find a Tag</Button>
                                        </Grid>
                                        <Grid container justifyContent="center" alignItems="center"  xs={1} >
                                        <Button sx={{color: "white"}}>Add a Tag</Button>
                                        </Grid>
                                        <Grid container justifyContent="center" alignItems="center"  xs={1} >
                                        <Button sx={{color: "white"}}>Review Tags</Button>
                                        </Grid>
                             
        </Grid>

      );
    }
  }

  export default Nav;