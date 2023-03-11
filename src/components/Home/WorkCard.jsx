import * as React from 'react';

import { 
Button, 
Card,
CardMedia,
Typography,
Box
} from '@mui/material';

import { styled } from '@mui/material/styles';






function WorkCard({service}) {
    const {id, title, description, imageUrl } = service

  return (
    <WorkCardStyled>
     
        <CardMedia height="300" component="img" image={imageUrl} alt={title} />

        
        <DescriptionBox1 />
        <DescriptionBox />
        <Description>
            <Typography variant="body2">{description}</Typography>
        </Description>

        <Action>
            {title}
        </Action>
    </WorkCardStyled>
  );
}

export default WorkCard;



const WorkCardStyled = styled(Card)({
  position: 'relative',
  maxWidth: '400px',
  minWidth: '345px',
  borderRadius: '2em',
  overflow:'hidden',
  boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;',
  cursor: 'pointer',
  transition: 'scale 0.3s ease-in-out',
  '&:hover': {
    scale: '1.03',
  },
})




const DescriptionBox = styled(Box)({
  backgroundImage: 'linear-gradient(to left, #870000, #190a05)',
  borderRadius: '2em',
  position: 'absolute',
  top: '55%',
  left: '-5px',
  height: '65%',
  width: '108%',
  transform: 'skew(19deg, -9deg)',
})

const DescriptionBox1 = styled(Box)({
  backgroundImage: 'linear-gradient(to left, black, white)',
  borderRadius: '2em',
  position: 'absolute',
  top: '53%',
  left: '-10px',
  height: '45%',
  width: '108%',
  transform: 'skew(19deg, -9deg)',
})


const Description = styled(Box)({
  position: 'absolute',
    color: 'white',
    fontWeight: 900,
    left: '140px',
    bottom: '26%',
})


const Action = styled(Button)({
  position: 'absolute',
  color: 'white',
  fontSize:'1em',
  left: '2em',
  bottom: '10%',
  borderRadius: "1em",
  padding: '10px 20px',
  border: '1px solid #fff',
  transition: 'scale 0.3s ease-in-out',
  '&:hover': {
    scale: '1.03',
  },
})
