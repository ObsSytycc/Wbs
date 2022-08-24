import React from 'react'
import {Box,Grid, Typography} from '@mui/material';
import computer from '../../assets/image/computer.png';
export default function Aboutus() {

  const Card=({name,description})=>{
    return(
    <Box sx={style.cardCont}>
      <Typography sx={style.cardHead}>
      {name?name:'About us.'}
      </Typography>
      <Typography sx={style.cardDesc}>
        {description?description:'We are a fast-growing ecosystem of technology and business enthusiasts that meets the need of the rapidly changing digital world.'}
      </Typography>
    </Box>
    )
  }
  return (
    <Grid container  sx={style.container}>
      <Grid item lg={6} md={6} sm={12} xs={12} sx={style.imgCont}>
      <Box sx={style.img} style={{ backgroundImage: `url(${computer})`}}>
      </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} sx={style.imgCont}>
        <Card/>
        <Card/>
        </Grid>
    </Grid>
  )
}


const style={
   container:{
    minHeight:'500px',
    width:'100%',
    backgroundColor:'#EEF0F2'
   },

  imgCont:{
   display:'flex',
   flexDirection:"column",
   justifyContent:'space-around',
   alignItems:'center',
   marginTop:'20px'
  },

   img:{
    height:'400px',
     width:'80%',
    boxShadow:'4px 4px 15px rgba(0, 0, 0, 0.25)',
    borderTopRightRadius:"200px",
    backgroundSize:'cover',
    display:'flex',
    alignSelf:'center'
   },
   cardCont:{
    minHeight:'150px',
    width:'80%',
    backgroundColor:'#fff',
    borderRadius:'15px',
    margin:
    {
    lg:'0px !important',
    md:'0px !important',
    sm:'15px 0px !important',
    xs:'15px 0px !important'
  },
  padding:'20px'
   },
   cardHead:{
    fontFamily:"Montserrat",
    fontSize:"36px",
    fontWeight: 600,
    lineHeight:"44px",
   },
   cardDesc:{
    fontFamily:"Montserrat",
    fontSize:"20px",
    fontWeight: 400,
    lineHeight:"20px",
   }
}