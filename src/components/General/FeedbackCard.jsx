import { 
  Card, 
  CardContent, 
  Typography,
  Box
  } from '@mui/material';
  import { styled } from '@mui/material/styles';

  import { MDBIcon } from 'mdb-react-ui-kit';
  


export default function FeedbackCard({vision}) {
    const {title, description, icon, type} = vision
  return (
    <>
      <FeedBackCard>
         <CardContent 
                  sx={{display: 'flex', 
                       justifyContent: "center", 
                       flexDirection: "column",
                       textAlign: "center",
                       alignItems: 'center',
                       gap: 2}}>
            <MDBIcon type icon={icon} size="5x" />
            <Typography variant='title'><strong>{title}</strong></Typography>
            <Typography variant='body'
                        >{description}</Typography>
         </CardContent>
      </FeedBackCard>
    </>
  );
}



const FeedBackCard = styled(Card)({
    color: '#EF9A9A',
    borderRadius: "1em",
    backgroundImage:
      'linear-gradient(to bottom, #870000, #190a05)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    padding: "0.5em",
    cursor: "pointer",
    transition: 'scale 0.3s ease-in-out',
    '&:hover': {
      scale: '1.03',
    },

})


