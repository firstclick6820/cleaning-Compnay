import React from 'react';
import { 
  
Typography, 
Box, 
Rating, 
Avatar, 
Card, 
CardHeader, 
Container,
CardContent,
Divider,
Grid 
} from '@mui/material';
import Slider from 'react-slick';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { reviews } from '../../utils/constants';
import { ReviewCard, PageHeader } from '../../components';


const Reviews = () => {

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
            <PageHeader heading="Customer Reviews" />
          </Grid>

          <Grid item xs={12}>
            <Divider><ExpandLessIcon/></Divider>
          </Grid>

          <Grid item xs={12}>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <ReviewCard review={review} index={index} key={index} />
                ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Reviews;




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