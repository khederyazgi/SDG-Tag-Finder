import * as React from 'react';
import Grid from '@material-ui/core/Grid'
class Space extends React.Component {


  
    render() {
      return (

        <Grid container  > 
            <Grid item xs={12}>
            <div  style={this.props.style}> </div >
            </Grid>
        </Grid>

      );
    }
  }


  export default Space;