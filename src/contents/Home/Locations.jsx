import React from 'react'
import { 
Grid, 
Box, 
Container, 
Divider 
} from '@mui/material'
import { styled } from '@mui/material/styles';



import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PageHeader, LocationCard } from '../../components'


import { locations } from '../../utils/constants';



const Locations = () => {


  return (
    <WrapperContainer>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PageHeader heading="Serving in 61 areas across Dubai" />
          </Grid>

          <Grid item xs={12}>
            <Divider><ExpandLessIcon/></Divider>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
                {locations.map((location, index) => (
                  <Grid item xs={12} md={4}>
                    <LocationCard key={index} location={location}/>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </WrapperContainer>

  )
}

export default Locations



const WrapperContainer = styled(Box)({
  backgroundImage: 'linear-gradient(to bottom, #870000, #190a05)',
  paddingBottom: '1rem',
  paddingTop:'1rem'
})