import { Grid, Box, Container, Divider, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { PageHeader, FeedbackCard, ShowCaseCard } from '../../components'
import { styled } from '@mui/material/styles';


import { visions } from '../../utils/constants';



const Vision = () => {
  

  return (
    <WrapperBox>
      <Container maxWidth="lg">
        <Grid container spacing={1} p={4}>
          <Grid item xs={12}>
            <ShowCaseCard  title="BOOK CLEANING SERVICES IN DUBAI ONLINE IN 60 SECONDS" 
                           description="
                           In the busiest city of UAE, we provide residential and commercial cleaning solutions with a seamless 60-second booking process. If you need thorough deep cleaning service or any other type of our service, you can book online easily with both online payment and cash-on-delivery methods available. Our professional team of house cleaners in Dubai will take care of the rest, guaranteeing the very best service. From housekeeping to laundry, ironing, disinfecting and sanitizing, and all your cleaning needs, we offer flexible and affordable solutions to give you back your precious free time."/>
          </Grid>
        </Grid>


        <Grid container spacing={1} p={4}>
          <Grid item xs={12}>
            <PageHeader heading="Some of our specialties "/>
          </Grid>

          <Grid item xs={12}>
            <Divider><ExpandLessIcon/></Divider>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
            {visions.map((vision, index) => (
              <Grid item xs={12} md={3}>
                <FeedbackCard key={index}  vision={vision}/>
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </WrapperBox>

  )
}

export default Vision



const WrapperBox = styled(Box)({
  backgroundImage: 'linear-gradient(to top, #870000, #190a05)',
  marginTop: '1rem'
})