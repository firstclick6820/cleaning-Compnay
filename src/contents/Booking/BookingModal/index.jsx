import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
Container,
Button,
Dialog,
DialogActions,
DialogContent,
DialogContentText,
DialogTitle,
Box,
useMediaQuery,

} from '@mui/material';

import BookingForm from './Form'

import { StyledButton } from './../../../components';
import { styled } from '@mui/material/styles';



export default function BookingModal() {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  
  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (

    <>
      <StyledButton handleClick={handleOpenModal}>
                book your cleaning today
      </StyledButton>
    
 
    
      <Dialog fullScreen={fullScreen} open={open} onClose={handleCloseModal}>
          <ContentWrapper>
            <DialogContent>
              <BookingForm />
            </DialogContent>
          </ContentWrapper>
      </Dialog>
     

    </>
  );
}



const ContentWrapper = styled(Box)({
  padding: '1em',
  background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
})