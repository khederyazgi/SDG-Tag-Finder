import UnstyledSelectForm from "./Dropdown"
import Grid from '@material-ui/core/Grid'
import Button from '@mui/material/Button';
import React, { useState, useEffect ,componentDidMount} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { PropaneSharp } from "@mui/icons-material";


const Filter = () => {


  
  const [targets, setTargets] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const [measurements, setMesurements] = useState([]);

 const goal_id=2;



  useEffect(() => {
     fetch('http://localhost:8080/api/goals/'+goal_id.toString()+'/targets/')

        .then((response) => response.json())
        .then((data) => {
           console.log(data);
          //  console.log(data[1].id);
           setTargets(data);
        })
        .catch((err) => {
           console.log(err.message);

        });
  }, [])



  const selectTargetOnChange = (id) =>  {
 
    fetch('http://localhost:8080/api/targets/2/indicators/')
   .then((response) => response.json())
   .then((data) => {
      console.log("selectTargetOnChange",data);
     //  console.log(data[1].id);
     setIndicators(data);
   })
 

  }

   const selectIndicatorOnChange = (id) =>  {

   fetch('http://localhost:8080//api/targets/'+id.toString()+ 'measurements/')
   .then((response) => response.json())
   .then((data) => {
      console.log("selectIndicatorOnChange",data);
     //  console.log(data[1].id);
     setMesurements(data);
   })
   
  }



     
//   const selectMesurementOnChanged = (id) =>  {
//     console.log("selectMesurementOnChanged", id)}

  return (

 <Grid container justifyContent="space-around" > 

        <Grid item  lg={2} >
          <UnstyledSelectForm placeholder={"Select Target"}  data={targets} onChange={selectTargetOnChange} />
        </Grid>
        <Grid item  lg={2} >
        <UnstyledSelectForm placeholder={"Select Indicator"} data={indicators} onChange={selectIndicatorOnChange} />
        </Grid>
        <Grid item lg={2} >
        <UnstyledSelectForm placeholder={"Select Measurement"} data={measurements} />
        </Grid>
        <Grid  container  xs={2} justifyContent="center" alignItems="center">
        <Button variant="contained" sx={{backgroundColor:" #FD6925", borderRadius: "21.2834px"}}>Find Tags</Button>
        </Grid>
</Grid>


  );
}

export default Filter;








//   const goal = useSelector((state) => state.filter.goal)
//   const dispatch = useDispatch()
//   console.log(goal)

