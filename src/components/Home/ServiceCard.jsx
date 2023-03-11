import * as React from 'react';

import { 
Button, 
Card,
CardContent,
CardMedia,
Typography,
Divider,
Box
} from '@mui/material';


import { styled } from '@mui/material/styles';

import ServiceModal from '../../contents/Home/Modals/ServiceModal';


function ServiceCard({service}) {
    const {id, title, description, imageUrl } = service


  return (
    <ServiceCardBox>

        <ServiceCardImageBox>
            <ServiceCardImage height="255" component="img" image={imageUrl} alt={title} />
        </ServiceCardImageBox>

        <ServiceCardContent>
          <ServiceCardTitle>{title}</ServiceCardTitle>
          <Divider  sx={{marginBottom: '0.7em'}}/>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </ServiceCardContent>


      <ActionBox>
        {<ServiceModal />}
      </ActionBox>
    </ServiceCardBox>
  );
}

export default ServiceCard;



const ServiceCardBox = styled(Card)({
  
  '--card-gradient': 'rgba(0, 0, 0, 0.8)',
  '--card-gradient-hover': '#24a9d5 max(8.5rem, 20vh)',
  '--card-blend-mode': 'overlay',
  '--card-gradient1': '#5e9ad9, #e271ad',
  background: '#fff',
  borderRadius: '1rem',
  position: 'relative',
  marginRight: "1em",
  maxWidth: '400px',
  height: '100%',
  padding: '2rem',
  color: '#aaa',
  overflow: 'hidden',
  paddingBottom: '1rem',
  boxShadow: '0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)',
  backgroundImage: 'linear-gradient(var(--card-gradient1), white max(9.5rem, 27vh))',
  transition: 'background-image 0.3s ease-in-out, scale 0.3s ease-in-out',
  '&:hover, &:focus-within': {
    backgroundImage: `linear-gradient(var(--card-gradient-hover), white max(8.5rem, 23vh))`,
    scale:' 1.02'
  },

})


const ServiceCardImageBox = styled(Box)({
  margin:' -2rem -2rem 1rem -2rem'
})

const ServiceCardImage = styled(CardMedia)({
  '--card-blend-mode': 'overlay',
  borderRadius: '0.5rem 0.5rem 0 0',
  width: '100%',
  objectFit: 'cover',
  maxHeight: 'max(10rem, 30vh)',
  aspectRatio: '4/3',
  mixBlendMode: 'var(--card-blend-mode)',
})

const ServiceCardContent = styled(CardContent)({
  marginTop: '-1rem',
})

const ServiceCardTitle = styled(Typography)({
  
  marginTop: 0,
  fontWeight: 800,
  letterSpacing: '0.01em',
})


const ActionBox = styled(Box)({
  display: 'flex', 
  justifyContent: "flex-end"
})



const Action = styled(Button)({
  right: '1em',
  fontSize:'0.8em',
  bottom: '10%',
  color: 'red',
  borderRadius: "1em",
  padding: '5px 10px',
  border: '1px solid red',
  transition: 'scale 0.3s ease-in-out',
  '&:hover': {
    scale: '1.01',
    background: 'red',
    color: 'white',
  },
})



