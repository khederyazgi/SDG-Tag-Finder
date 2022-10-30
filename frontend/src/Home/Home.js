import Filter from "../Filter"
import  Sectionheader from "../Sectionheader"
import Nav from "../Nav"
import Space from "../Space"
import StickyHeadTable from "../Table"
import Header from "../Header"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Seachbar from "./Seachbar"
import SectionheaderHome from "./SectionheaderHome"
import Body from "./Body"
function Home() {
  
  
  return (


    
     <Grid container   >


                  <Grid item lg={12}  sx={{ backgroundColor:"#FFFFF" , boxShadow: "1px 3px 1px #9E9E9E "}}>
                     <Header /> 

                </Grid>
                <Grid item lg={12} sx={{ height:"44px" }} />




                <Grid item lg={12} >
                     <Seachbar/> 
                     
                </Grid>
                <Grid item lg={12} sx={{ height:"44px" }} />


                <Grid item lg={12} >
                     <SectionheaderHome/> 

                </Grid>
                <Grid item lg={12} sx={{ height:"44px" }} />
                <Grid item lg={12} >
                     <Body/> 

                </Grid>
 

      </Grid>

 
  );


}

export default Home;
