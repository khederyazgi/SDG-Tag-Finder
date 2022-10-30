import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Image1 from "./image/Goals/1.svg";
import Image2 from "./image/Goals/2.svg";
import Image3 from "./image/Goals/3.svg";
import Image4 from "./image/Goals/4.svg";
import Image5 from "./image/Goals/5.svg";
import Image6 from "./image/Goals/6.svg";
import Image7 from "./image/Goals/7.svg";
import Image8 from "./image/Goals/8.svg";
import Image9 from "./image/Goals/9.svg";
import Image10 from "./image/Goals/10.svg";
import Image11 from "./image/Goals/11.svg";
import Image12 from "./image/Goals/12.svg";
import Image13 from "./image/Goals/13.svg";
import Image14 from "./image/Goals/14.svg";
import Image15 from "./image/Goals/15.svg";
import Image16 from "./image/Goals/16.svg";
import Image17 from "./image/Goals/17.svg";
import Goal from "./Goal";
import Typography from '@mui/material/Typography';
import { useState } from 'react';
const Body = () => {
    

  


        const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
           setIsHover(true);
        };
     
        const handleMouseLeave = () => {
           setIsHover(false);
        };

  
        const Description = {
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "19.6383px",
            lineHeight: "29px",
            color:" #444444",
          };
          const imgStyle = {
            
            width: "136px",
             height:"136px",
             transition: 'transform .2s',
             transform : isHover ? `scale(1.2)` : `scale(1)`,
             opacity: isHover ? '0.8' : '1'
         };


         const images = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13,Image14,Image15,Image16,Image17];
         


 
      return (
        <Grid container   justifyContent="space-between" > 
                <Grid container   lg={1} alignItems="center"   justifyContent="flex-start"/>
                <Grid container   lg={11} alignItems="flex-start"   justifyContent="flex-start">
                      <Typography   sx={Description} gutterBottom>
                      Select a sustainable goal</Typography>

                </Grid>
                <Grid container   lg={1} alignItems="center"   justifyContent="flex-start"/>
                
                
                <Grid container   lg={10} alignItems="flex-start"  justifyContent="space-between" columnSpacing={1} rowSpacing={5} >
                
                {images?.map((image) => {
                  return (
                    <Grid item>
                  <Goal key={images.toString()} source={image} /> 
                   </Grid>                   
                   );})}
                



                {/* "./image/Goals/"+num.toString+".svg" */}
                {/* <Grid item>
                <img  src={Image1 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image2 }    style={imgStyle}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                     
                     />
                </Grid>
                <Grid item>
                <img  src={Image3 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image4 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image5 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image6 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image7 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image8} width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image9 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image10 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image11 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image12 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image13 } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image14  } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image15  } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image16  } width="136" height="136"/>
                </Grid>
                <Grid item>
                <img  src={Image17  } width="136" height="136"/>
                </Grid> */}
                
                </Grid>
                <Grid container   lg={1} alignItems="center"   justifyContent="flex-start"/>
               </Grid>





      );
    }


  export default Body;
 

