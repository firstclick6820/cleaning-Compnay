import { 
Card, 
Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';



function CustomCard({location}) {
    const {place, timing, address} = location
  return (
    <LocationCard>
          <LocationName variant="h6" component="h3" gutterBottom><strong>{place}</strong></LocationName>
          <Option>{address}</Option>
          <Option>{timing}</Option>
    </LocationCard>
  );
}

export default CustomCard;


const LocationCard = styled(Card)({
  color: 'white',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.3)',
  minWidth: '200px',
  padding: '1.5rem',
  borderRadius: '1rem',
  boxShadow: '0 5px 10px 0px rgba(0, 0, 0, 0.15), 0 10px 20px 0px rgba(0, 0, 0, 0.05),-3px -3px 10px 0px rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(5px)',
  transform: 'rotateY(-20deg) rotateX(20deg) scale(0.85)',
  transition:' all 0.3s ease-in-out',
  cursor: "pointer",
  '&:hover': {
    transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
    boxShadow: '0 5px 10px 2px rgba(0, 0, 0, 0.15),0 10px 20px 5px rgba(0, 0, 0, 0.05),-3px -3px 10px 3px rgb(255, 255, 255, 0.15)',
    zIndex: 5,
  },
  });


  const LocationName = styled(Typography) ({
      color: 'white',
      fontSize: '2rem',
      marginBottom: '0.5rem',
      fontWeight: 900,
  });

  const Option = styled(Typography)({
    textAlign: 'center',
    fontSize: '1.2rem',
    padding: '0.8rem',
    margin:' 0.5rem 0',
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(2px)',
    borderRadius: '4px',
    color: '#eee',
  })


  

