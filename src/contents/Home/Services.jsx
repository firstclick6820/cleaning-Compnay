import { Grid, Box, Container, Divider, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PageHeader, ServiceCard } from '../../components'
import { services } from '../../utils/constants';


import Sliders from './../../utils/Sliders'



const Services = () => {
  const options = {
    prevNextButtons: true,
    pageDots: false,
    autoPlay: 2000,
    wrapAround: true,
    cellAlign: 'center',
    
  };
  
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mt={3}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PageHeader heading="Explore our services" />
          </Grid>

          <Grid item xs={12}>
            <Divider><ExpandLessIcon/></Divider>
          </Grid>

          <Grid item xs={12}>
            <Sliders options={options}>
                {services.map((item, index) => (
                  <div key={index} style={{ display: isSmallScreen ? 'block' : 'flex' }}>
                    <ServiceCard service={item}/>
                  </div>
                ))}
            </Sliders>
          </Grid>
        </Grid>
      </Container>
    </Box>

  )
}

export default Services