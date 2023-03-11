import React, { useState } from 'react';
import {
  Box, 
  Button, 
  Container, 
  Typography 
} from '@mui/material';
import { styled } from '@mui/material/styles';


import { StyledButton } from '../../components';

import Slider from 'react-slick';

import BookingModal from '../Booking/BookingModal';




const images = [
  { src: '/assets/Images/Image (1).jpg', alt: 'Image 1' },
  { src: '/assets/Images/Image (4).jpg', alt: 'Image 4' },
  { src: '/assets/Images/Image (3).jpg', alt: 'Image 3' },
  { src: '/assets/Images/Image (5).jpg', alt: 'Image 5' },
  { src: '/assets/Images/Image (6).jpg', alt: 'Image 6' },
  { src: '/assets/Images/Image (7).jpg', alt: 'Image 7' },
];



const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
  
    <Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box  key={index}
                className="bg-image"
                display='flex'
                alignItems="center"
                justifyContent="center"
                sx={{
                height: '75vh',
                width:"100%",
                backgroundImage: `url("${image.src}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
          
            <InnerWrapperContainer  
                maxWidth="sm"
                className='mask'>
 
                  <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    className='text-white mb-0'>
                    No Time To Clean?
                  </Typography>
                  <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    className='text-white mb-0'
                  >
                    Book A Cleaning
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    variant="h6"
                    align="center"
                    paragraph
                    className='text-white mb-0'
                  >
                    At The Same Day
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                      <BookingModal/>
                  </Box>
            </InnerWrapperContainer>


          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;



const InnerWrapperContainer = styled(Container)({
  textAlign: "center",
  alignItems: 'center',
  justifyContent: "center",
  top: "25%",
  borderRadius: '2rem',
  height: '50%',
  display: "flex",
  cursor: 'pointer',
  flexDirection: "column",  
  boxShadow: 'rgba(0, 0, 0, 0.7) 0px 25px 50px -12px',
  backgroundImage: 'linear-gradient(to bottom, #870000, #190a05)',
  opacity: 0.9,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    scale: '1.02'
  }
})