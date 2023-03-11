import { Grid, Box, Container, Divider, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PageHeader, WorkCard } from '../../components'

import { styled } from '@mui/material/styles';

import { works } from '../../utils/constants';



const HowItWorks = () => {
  

  return (
    <WrapperBox>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PageHeader heading="how cleaning company works?" />
          </Grid>

          <Grid item xs={12}>
            <Divider><ExpandLessIcon/></Divider>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              {works.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <WorkCard service={item}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </WrapperBox>

  )
}

export default HowItWorks



const WrapperBox = styled(Box)({
  marginTop: '1rem',
  marginBottom: '2rem'
})