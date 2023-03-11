import * as React from 'react';
import
{
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
  CardMedia,
  Box
}
from '@mui/material';

import { styled } from '@mui/material/styles';
const backgroundImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg'
const profileImage = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg'



export default function TestimonialCard({review}) {  
  const {avatar, name, date, rating, comment} = review

  return (
    <StyledCard>
        <ProfileImage  component="img" image={avatar} alt={name} />

        <FigCaption>
          <Title>{name}</Title>
          <Date>{date}</Date>

          <IconsWrapper>
              <Description>{comment}</Description>
          </IconsWrapper>
        </FigCaption>
    </StyledCard>
  
  );
}


const StyledCard = styled(Card)({
  fontFamily: 'Open Sans, Arial, sans-serif',
  position: 'relative',
  overflow: 'hidden',
  margin: '10px',
  minWidth: '230px',
  maxWidth: '315px',
  width: '100%',
  color: '#ffffff',
  textAlign: 'center',
  lineHeight: '1.4em',
  height: '50vh',
  borderRadius: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
  backgroundImage: 'linear-gradient(to left, #870000, #190a05)',
  cursor: 'pointer',
  transition: 'all 0.25s ease',
  boxSizing: 'border-box',
  '&:hover': {
    scale: '1.03',
  },
})



const ProfileImage = styled(CardMedia)({
  borderRadius: '50%',
  position: 'absolute',
  bottom: '50%',
  left: '50%',
  maxWidth: '100px',
  opacity: 1,
  boxShadow: '3px 3px 20px rgba(0, 0, 0, 0.5)',
  border:' 2px solid rgba(255, 255, 255, 0.5)',
  transform: 'translate(-50%, 0%)',
})


const FigCaption = styled(Box)({
    width:' 100%',
    padding: '15px 25px',
    position: 'absolute',
    left: 0,
    top: '50%',
})

const Title = styled(Typography)({
  margin:' 0 0 5px',
  fontWeight: 400,
})

const Date = styled(Typography)({
  display: 'block',
  fontSize: '0.8em',
  color: '#f39c12',
  opacity: 0.75,
})

const IconsWrapper = styled(Box)({

})


const Description = styled(Typography)({
    marginTop:'0.5em',
    color:"#EF9A9A"
})




