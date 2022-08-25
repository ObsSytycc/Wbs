import React from 'react'
import { Box, TextField, Typography,Button,InputBase } from '@mui/material'
export default function Newsletter() {
  return (
    <Box sx={style.container}>
     <Box sx={style.subCont}>
     <Box sx={style.cont}>
    <Typography sx={style.hdTxt}>
       Newsletter
      </Typography>
      <Typography sx={style.descTxt}>
      Subscribe to our newsletter
      </Typography>
      <InputBase sx={style.input} placeholder="Enter your email here" 
      endAdornment={
        <Box sx={style.btnCont}>
        <Button sx={style.btn}>
          Subscribe
         </Button>
        </Box>
      }
      />
      </Box>
     </Box>
    </Box>
  )
}

const style={
    container:{
    minHeight:'400px',
    backgroundColor:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    },
    cont:{
     width:'80%',
     display:'flex',
     flexDirection:'column',
     
    },
    subCont:{
     minHeight:'200px',
     backgroundColor:'#EEF0F2',
     width:'100%',
     boxShadow:'2px 2px 8px rgba(0, 0, 0, 0.25)',
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center'
    },
    hdTxt:{
        fontFamily:"Montserrat",
        fontSize:"24px",
        fontWeight: 600,
        lineHeight:"50px",  
    },
    descTxt:{
        fontFamily:"Montserrat",
        fontSize:"18px",
        fontWeight: 400,
        lineHeight:"50px",
    },
    input:{
        boxShadow:'2px 2px 8px rgba(0, 0, 0, 0.25)',
        backgroundColor:'#fff',
        borderRadius:'15px',
        paddingLeft:"10px"
    },
    btn:{
        backgroundColor:'#06113C',
         height:'53px',
         width:'140px',
         borderTopRightRadius:'15px',
         borderBottomRightRadius:'15px',
         borderTopLeftRadius:'0px',
         borderBottomLeftRadius:'0px',
         color:'#fff',
         "&:hover":{
            backgroundColor:'#06113C',
         }
    },
    btnCont:{
        marginRight:'-25px',
        boxShadow:'2px 2px 8px rgba(0, 0, 0, 0.25)',
        borderTopRightRadius:'15px',
        borderBottomRightRadius:'15px',
        borderTopLeftRadius:'0px',
        borderBottomLeftRadius:'0px',

    }
}