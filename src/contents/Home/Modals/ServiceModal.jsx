import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
Dialog,
DialogContent,
Box,
useMediaQuery,
Button,

} from '@mui/material';
import { styled } from '@mui/material/styles';


export default function ServiceModal() {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));


  
  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }


  return (

    <>
      <ActionButton onClick={handleOpenModal}>
            Read More...
      </ActionButton>
    


 
      <Dialog fullScreen={fullScreen} open={open} onClose={handleCloseModal}>
          <ContentWrapper>
            <DialogContent>
                <h2>Service Detials</h2>
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






const ActionButton = styled(Button)({
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
  