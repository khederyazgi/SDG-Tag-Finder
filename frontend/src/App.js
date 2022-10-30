import Filter from "./Filter"
import  Sectionheader from "./Sectionheader"
import Nav from "./Nav"
import Space from "./Space"
import StickyHeadTable from "./Table"
import Header from "./Header"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Image from './assests/images/bg/11bg.svg';

import Home from "./Home/Home"
import { Provider } from 'react-redux'
import store from "./store"
function App() {
  
  
  return (


    // <Provider store={store}>
    //  <Grid container  sx={{ backgroundColor:"#FFF6F2" }} >


    //               <Grid item lg={12} >
    //                  <Header/> 

    //             </Grid>


    //             <Grid item lg={12}>
    //                 <Sectionheader></Sectionheader>
    //             </Grid>
    //             <Grid item lg={12}>
    //                 <Nav style={{backgroundColor:"#FFCCB4",height :"45px"}} /> 
    //             </Grid>   
    //             <Grid item lg={12} sx={{ height:"44px" }} />

    //             <Grid item lg={12}>
    //                 <Filter/>

                    
    //             </Grid>   
    //              <Grid item lg={12} sx={{ height:"50px" }} />
    //             {/* <Grid item lg={12}  sx={{ backgroundImage: `url(${Image})`, backgroundPosition: "bottom  right", backgroundSize: "581.06px 430.3658447265625px",backgroundRepeat: "no-repeat"}}>
    //                  <StickyHeadTable/>
                     
    //             </Grid>   */}
    //   </Grid>
    //   </Provider>
    <div>
    <Home/>
    </div>


 
  );


}

export default App;







