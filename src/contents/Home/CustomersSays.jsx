

import { Grid, Box, Container, Divider, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PageHeader, MediaPlayer } from '../../components'


const urls = [
  'https://www.youtube.com/watch?v=L9heRtsTMto&t=3s',
  'https://www.youtube.com/watch?v=Wn4Z1th4JSE'
]

const CustomersSays = () => {


  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <PageHeader heading="what our customers says about us?" />
          </Grid>

          <Grid item xs={12}>
            <Divider><ExpandLessIcon/></Divider>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
           
            {urls.map((item, index) => (
              <Grid item xs={12} md={6}>
                <MediaPlayer key={index} url={item}/>
              </Grid>
            ))}
            
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>

  )
}

export default CustomersSays