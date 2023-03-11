import { 
Typography, 
Box 
} from '@mui/material';

import { styled } from '@mui/material/styles';




const PageTitle = ({ heading = '', type = ''}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
        <Title variant="h3" gutterBottom>{heading}</Title>
    </Box>
  );
};


export default PageTitle;


const Title = styled(Typography)({
  textTransform: 'uppercase',
  marginBottom: '.5rem',
  fontWeight: 700,
  fontFamily: 'Rubik',
  fontSize: '2rem',
  color: '#EF9A9A', 
})