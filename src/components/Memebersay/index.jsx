import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
import { Box,Paper,Typography } from '@mui/material';
import MemberCard from './MemberCard';
import oranu from '../../assets/image/oranu.png';
import jumobi from '../../assets/image/jumobi.png';
export default function Membersay() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group"> 
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <button onClick={() => next()} />
            <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button>
          </div>
        );
      };

  return (
     <Box  sx={style.container}>
      <Typography sx={style.wom}>
      What Our Members Say About Us
      </Typography>
      <Box style={{width:'100%'}}>
      <Carousel 
      className={'react-multi-carousel-list'}
      showDots={true}
      autoPlay={true}
      responsive={responsive}
      >
    <MemberCard rate={4.5} img={oranu}/>
    <MemberCard rate={5} name="Bakare Jumobi" hdColor="#FF8C32" role="UI / UX Designer" img={jumobi}/>  
    <MemberCard rate={4} name="Okenwa Sarah" role="CTO, Sapphire" img={oranu}/>
</Carousel>
      </Box>
     </Box>
  )
}
const style={
  container:{
    minHeight:'500px',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  wom:{
fontFamily: "Mont",
fontSize:{
lg:"36px !important",
md:"30px !important",
sm:"30px !important",
xs:"24px !important"
},
fontWeight: 700,
textAlign:'center',
marginTop:'50px',
marginBottom:'20px'
  }
}