import UnstyledSelectForm from "./Dropdown"
import Grid from '@material-ui/core/Grid'
import Button from '@mui/material/Button';
import React, { useState, useEffect ,componentDidMount} from 'react';
import { useSelector, useDispatch } from 'react-redux'
const Filter = () => {


  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
     fetch('http://localhost:8080/api/goals/')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
          //  console.log(data[1].id);
           setGoals(data);
        })
        .catch((err) => {
           console.log(err.message);

        });
  }, [])


//   const goal = useSelector((state) => state.filter.goal)
//   const dispatch = useDispatch()
//   console.log(goal)



  return (

 <Grid container justifyContent="space-around" > 

        <Grid item  lg={2} >
          <UnstyledSelectForm placeholder={"Select Target"} data={goals} />
        </Grid>
        <Grid item  lg={2} >
        <UnstyledSelectForm placeholder={"Select Indicator"} />
        </Grid>
        <Grid item lg={2} >
        <UnstyledSelectForm placeholder={"Select Measurement"}/>
        </Grid>
        <Grid  container  xs={2} justifyContent="center" alignItems="center">
        <Button variant="contained" sx={{backgroundColor:" #FD6925", borderRadius: "21.2834px"}}>Find Tags</Button>
        </Grid>
</Grid>


  );
}

export default Filter;


