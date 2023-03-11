import { Grid, Box, Container, Divider, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PageHeader, FeedbackCard , ShowCaseCard} from '../../components'
import { styled } from '@mui/material/styles';


import { ccvisions } from '../../utils/constants';



const Specilities = () => {
  

  return (
    <WrapperBox>
      <Container maxWidth="lg">
        <Grid container spacing={1} p={4}>
            <Grid item xs={12}>
              <ShowCaseCard  title="YOUR REQUIREMENTS AND EXPECTATIONS ARE OUR PRIORITY" 
                           description="All our services are carried out by professional and trained staff who will meet your highest expectations. We work around your schedule and provide more free time to enjoy what you do. Our cleaners are trained to provide services tailored to individual requirements as we understand the exacting standards of the customer."/>
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
            {ccvisions.map((vision, index) => (
              <Grid item xs={12} md={4}>
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

export default Specilities


const WrapperBox = styled(Box)({
  backgroundImage: 'linear-gradient(to top, #870000, #190a05)',
  marginTop: '1rem'
})