import React from 'react'
import {Box,Typography,Rating,Divider} from '@mui/material'
import obj from '../../assets/image/obj.jpg'
export default function MemberCard({name,role,img,hdColor,rate}) {
  return (
   <Box sx={style.container}>
    <Box sx={{...style.smhead, backgroundColor:hdColor?hdColor:"#06113CE5",}}></Box>
    <Box sx={style.subCont}>
      
     <Rating  
     size='large'
      name="half-rating-read" defaultValue={rate?rate:2.5} precision={0.5} readOnly
      sx={style.rating}
      />
     <Typography sx={style.desCTxt}>
      I’ve been a member of this community for over a year and I can say that I,ve learnt alot from this community
      </Typography>
      <Divider sx={style.divider}/>
      <img src={img?img:obj} style={style.img}/>
      <Typography sx={style.nameTxt}>
      {name?name:"Oranu Peculiar"}
      </Typography>
      <Typography  sx={style.roleTxt}>
      {role?role:"Product Design Lead"}
      </Typography>
    </Box>
   </Box>
  )

}
const style={
  container:{
  width:'80%',
  minHeight:'500px',
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  },
  subCont:{
    width:'100%',
    borderRadius:'20px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'-10px',
    backgroundColor:'#fff',
    minHeight:'450px',
    padding:'20px',
    boxShadow:"3px 3px 10px 3px rgb(0 0 0 / 0.2)",
    
  },
  desCTxt:{
    color:"#00000073",
    fontSize:'18px',
    fontFamily:'mont',
    textAlign:'center',
    marginBottom:'20px'
  },
  divider:{
 minWidth:'158px',
 borderColor:'#00000080',
 marginBottom:'27px'
  },
  smhead:{
   
    width:'97%',
    borderTopRightRadius:'10px',
    borderTopLeftRadius:'10px',
    height:'30px'
  },
  rating:{
    marginBottom:'20px'
  },
  img:{
    width:'200px',
    height:'200px',
    borderRadius:'100px',
    marginBottom:'17px'
  },
  nameTxt:{
fontFamily:"Mont",
fontSize: "18px",
fontWeight: 700,
lineHeight:"23px",
color:'#06113C',
marginBottom:'10px'
  },
  roleTxt:{
   color:'#FF8C32',
   fontFamily:'Mont',
   fontSize:'12px',
   lineHeight:'15px',
   fontWeight:700,
  }
}