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
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { getThemeProps } from '@material-ui/styles';
const Goal = (props ) => {
    

  


        const [isHover, setIsHover] = useState(false);

        const handleMouseEnter = () => {
           setIsHover(true);
        };
     
        const handleMouseLeave = () => {
           setIsHover(false);
        };


          const imgStyle = {
            
            width: "136px",
             height:"136px",
             transition: 'transform .2s',
             transform : isHover ? `scale(1.2)` : `scale(1)`,
             opacity: isHover ? '0.8' : '1'
         };
 
      return (

                <img  src={props.source}    style={imgStyle}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}/>

      );
    }


  export default Goal;
 

