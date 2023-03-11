import React from 'react'

import { Box } from '@mui/system'








// import all the pages
import Hero from './Hero'
import Services from './Services'
import HowItWorks from './HowItWorks'
import Visions from './Visions'
import CustomerSays from './CustomersSays'
import Specilities from './Specilities'
import Testimonials from './Testimonials'
import Reviews from './Reviews'
import Locations from './Locations'





const HomePage = () => {
  
  return (
    <Box>
        <Hero />
        <Services />
        <Visions />
        <HowItWorks />
        <Specilities />
        <Testimonials />
        <Locations />
        <CustomerSays />
    </Box>
  )
}

export default HomePage