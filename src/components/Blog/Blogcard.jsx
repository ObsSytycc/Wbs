import React from 'react';
import {Box,Button,Typography} from '@mui/material';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import medic from '../../assets/image/medic.png';
export default function Blogcard() {
  return (
    <Box>
        <Box sx={style.imgCont} style={{ backgroundImage: `url(${medic})`}}>
          <Button sx={style.btn} endIcon={<BsFillArrowRightCircleFill style={{width:'30px',height:'30px'}}/>}>
            Blog
            </Button>
        </Box>
        <Typography sx={style.hd} >Health</Typography>
        <Typography sx={style.role}>
        Scientists Discover The Cure Of SCD With The Help Of A Sophisticated Software
        </Typography>
        <Typography sx={style.highlight}>
        Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box sx={style.foot} >
            <img src={medic} width={80} height={80} style={{borderRadius:'40px',marginRight:'10px'}}/>
            <Box >
                <Typography sx={style.nameTxt}>
                Oranu Peculiar
                </Typography>
                <Typography sx={style.dateTxt}>
                June 27, 2022
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}


const style={
    foot:{
       display:'flex',
       flexDirection:'row',
       marginTop:'20px',
      alignItems:'center',
      marginBottom:'20px'
    },
    nameTxt:{
        fontFamily:"Mont",
        fontSize:"18px",
        fontWeight: 700,
        lineHeight:"23px",
        color:'#06113C'
    },
    dateTxt:{
        fontFamily:"Mont",
        fontSize:"16px",
        fontWeight: 700,
        lineHeight: "20px",
        color:'#00000080'
    },
    highlight:{
        fontFamily:"Mont",
        fontSize:"15px",
        fontWeight: 400,
        lineHeight:'30px',
        color:'#00000080',
        textAlign:'left'
    },
    role:{
        fontFamily:"Mont",
        fontSize:"18px",
        fontWeight: 700,
        lineHeight:"20px",
        color:'#06113C',
        marginBottom:'10px'
    },
    imgCont:{
    width:'90%',
    height:'320px',
    borderRadius:'30px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    
 },
 btn:{
height:'50px',
fontFamily:'Mont',
fontSize:"20px",
fontWeight: 800,
lineHeight:"26px",
marginBottom:'32px',
backgroundColor:'#FF8C32',
borderRadius:'18px',
width:'120px',
color:'#fff',
"&:hover":{  
backgroundColor:'#FF8C32',
}
 },
 hd:{
    color:'#FF8C32',
    marginTop:'50px',
    marginBottom:'25px',
    fontFamily:"Mont",
    fontSize:"20px",
    fontWeight: 700,
    lineHeight:"26px",

 }
}