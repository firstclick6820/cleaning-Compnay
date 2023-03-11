import { Grid, Box, Container, Divider, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PageHeader, TestimonialCard } from '../../components'

import Slider from 'react-slick';

import { reviews } from '../../utils/constants';


const Testimonials = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: responsive
  };

  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PageHeader heading="Customers Feedbacks and Testimonials About Us" />
          </Grid>

          <Grid item xs={12}>
            <Divider><ExpandLessIcon/></Divider>
          </Grid>

          <Grid item xs={12}>
            <Slider {...settings}>
                {reviews && (
                  reviews.map((review, index) => (
                    <TestimonialCard review={review}/>
                ))
                )}
              </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>

  )
}

export default Testimonials




const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]


