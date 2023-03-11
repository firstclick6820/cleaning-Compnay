import React from 'react';
import {
  MDBIcon,
} from 'mdb-react-ui-kit';


import { 
  Container,
  Typography,
  Box
  } from '@mui/material';
  
  
  import { styled } from '@mui/material/styles';
  import CompanyCard from './CompanyCard';


import FooterLinkCard from './FooterLinkCard';


const services_links = [
  {title: 'House Cleaning', url: "/service/house-cleaning"},
  {title: 'Deep Cleaning', url: "/service/deep-cleaning"},
  {title: 'Maid Services', url: "/service/maid-services"},
  {title: 'Floor Cleaning', url: "/service/floor-cleaning"},
  {title: 'Sofa Cleaning', url: "/service/sofa-cleaning"},
  {title: 'Mattress Cleaning', url: "/service/mattress-cleaning"},

]

const services_links2 = [
  {title: 'House Cleaning', url: "/service/house-cleaning"},
  {title: 'Deep Cleaning', url: "/service/deep-cleaning"},
  {title: 'Maid Services', url: "/service/maid-services"},
  {title: 'Floor Cleaning', url: "/service/floor-cleaning"},
  {title: 'Sofa Cleaning', url: "/service/sofa-cleaning"},
  {title: 'Mattress Cleaning', url: "/service/mattress-cleaning"},

]
const services_links3 = [
  {title: 'House Cleaning', url: "/service/house-cleaning"},
  {title: 'Deep Cleaning', url: "/service/deep-cleaning"},
  {title: 'Maid Services', url: "/service/maid-services"},
  {title: 'Floor Cleaning', url: "/service/floor-cleaning"},
  {title: 'Sofa Cleaning', url: "/service/sofa-cleaning"},
  {title: 'Mattress Cleaning', url: "/service/mattress-cleaning"},

]
const general_links = [
  {title: 'Home', url: "/"},
  {title: 'Booking', url: "/booking"},
  {title: 'Account', url: "/account"},
  {title: 'About us', url: "/about"},
  {title: 'Contact', url: "/contact"},
  {title: 'Jobs', url: "/jobs"},
  
]


export default function App() {
  return (
    <WrapperContainer>
       <SMWrapperContainer>
            <SMLink fab icon='facebook-f'/>
            <SMLink fab icon='twitter' />
            <SMLink fab icon='google' />
            <SMLink fab icon='instagram' />
            <SMLink fab icon='linkedin-in' />
            <SMLink fab icon='github' />
       </SMWrapperContainer>

       <LinksWrapperContainer>
          <FooterLinkCard title="CleaningCompany" links={general_links} />
          <FooterLinkCard title="Services" links={services_links} />
          <FooterLinkCard title="Services" links={services_links2} />
          <CompanyCard />
       </LinksWrapperContainer>

       <CopyRightWrapper>
            <CopyRightContainer>
                <Typography variant='body'>© 2023 Copyright</Typography>
                <Typography variant="title"><strong>CleaningCompany.ae</strong></Typography>
            </CopyRightContainer>
       </CopyRightWrapper>
    </WrapperContainer>
  );
}

// Footer Wrapper Container
const WrapperContainer = styled(Box)({
  backgroundImage: 'linear-gradient(to top, #870000, #190a05)',
  paddingTop:'1rem',
  display: 'flex',
  flexDirection: 'column',

})



// Social Medial Wrapper Container
const SMWrapperContainer = styled(Container)({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1em',
      paddingTop: '1em'
})

// Social Medial Icon
const SMLink = styled(MDBIcon)({
    color: 'white',
    cursor: 'pointer',
    minWidth: '45px',
    padding: '1em',
    boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`,
    backgroundImage: 'linear-gradient(to bottom, #870000, #190a05)',
    transition: 'all 0.3s ease-in-out',
    borderRadius: '50%',
    '&:hover': {
      scale: '1.3'
    }
})


// Links Wrapper Container
const LinksWrapperContainer = styled(Container)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  paddingTop: '2rem',
  paddingBottom: '1rem',
  justifyContent: 'center',
  textAlign: 'center',


  '@media (max-width: 1200px)': { 
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  
  '@media (max-width: 767px)': { 
    gridTemplateColumns: '1fr',
  },
});


const LinksBox = styled(Box)({



})



const CopyRightWrapper = styled(Box)({
    width: '100%',
    height: '10vh',
    backgroundImage: 'linear-gradient(to bottom, #870000, #190a05)',
    padding:'1em 1em 0 1em'
})


const CopyRightContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    gap: '1em',
    color: '#EF9A9A'
})

{/* <MDBFooter className='text-center' color="white">
<MDBContainer className='p-4' color="white">



  <section className=''>
    <MDBRow>
      <FooterLinkCard title="CC.ae" links={general_links} />
      <FooterLinkCard title="Services" links={services_links} />
      <FooterLinkCard title="Services" links={services_links2} />
      <FooterLinkCard title="Services" links={services_links3} />
    </MDBRow>
  </section>
</MDBContainer>

<div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  © 2023 Copyright:
  <a className='text-white' href='https://cleaningcompany.ae/'>
    CleaningCompany.ae
  </a>
</div>
</MDBFooter> */}