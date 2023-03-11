import { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  OutlinedInput,
  FilledInput,
  Chip,
  MenuItem,
  Select,
  Box,
  Typography
} from "@mui/material";


import { styled } from '@mui/material/styles';
import { StyledButton } from "../../../components";

export default function Form() {
    const [services, setServices] = useState([])
    const [step, setStep] = useState(0);
    const [username, setUsername] = useState("");

    const steps = ["Register", "Service", 'Booking', 'Address', 'Payment'];


    const handleInputChange = (event) => {
      setUsername(event.target.value);
    };

    const handleNext = () => {
      setStep(step + 1);
    };

    const handleBack = () => {
      setStep(step - 1);
    };

return (
    <>
        <StepperWrapper>
          <Stepper activeStep={step}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepperWrapper>

        
          {step === 0 && (
              <StepWrapper>
                  <Title>Personal Details</Title>
                  <CustomInput
                          placeholder="+971527546685"
                          value={username}
                          onChange={handleInputChange}/>

                  <CustomInput
                          type="text"
                          placeholder="Khalid momand"
                          value={username}
                          onChange={handleInputChange}/>
                  <CustomInput
                          placeholder="momand@gmail.com"
                          value={username}
                          onChange={handleInputChange}/>


                  <Box sx={{display: 'flex', justifyContent: 'space-around', gap: 1}}>
                  <CustonButton  variant="contained"
                                          >Cancel</CustonButton>
                          <CustonButton  variant="contained"
                                 onClick={handleNext}>Next</CustonButton>
                          
                  </Box>
                    
              </StepWrapper>
          )}
        


        {step === 1 && (
          <StepWrapper>
             <Title>Booking Details</Title>
                  <CustomDatePicker
                          placeholder="Which day would you like us to come? "
                          onChange={handleInputChange}/>
                  

                  <CustomInput
                          type="text"
                          placeholder="Which time would you like use to come?"
                          value={username}
                          onChange={handleInputChange}/>
                  <CustomInput
                          placeholder="How often do you need the service?"
                          value={username}
                          onChange={handleInputChange}/>
            
              
 
              <Box display='flex' justifyContent="space-arround" alignItems="center" gap={1}>
                  <CustonButton fullWidth
                        variant="contained" 
                        onClick={handleBack}>Back</CustonButton>
                  <CustonButton  variant="contained"
                                    onClick={handleNext}>Next</CustonButton>
              </Box>

                  
           
            
          </StepWrapper>
        )}
        


        {step === 2 && (
          <StepWrapper>
                <CustomSelectInput
                      placeholder="Select Services"
                      multiple
                      value={services}
                      input={<OutlinedInput label="Chip"/>}
                      renderValue={(selected) => (
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}>

                  {[1, 2, 3 , 4].map((name) => (
                    <MenuItem
                      value={name}
                      key={name}>

                      {name}
                    </MenuItem>
                  ))}
                </CustomSelectInput>
 
              <Box display='flex' justifyContent="space-arround" alignItems="center" gap={1}>
                  <CustonButton fullWidth
                        variant="contained" 
                        onClick={handleBack}>Back</CustonButton>
                  <CustonButton  variant="contained"
                                    onClick={handleNext}>Next</CustonButton>
              </Box>

                  
           
            
          </StepWrapper>
        )}


        {step === 3 && (
          <StepWrapper>
             <Title>Order Details</Title>
                  
            
              
 
              <Box display='flex' justifyContent="space-arround" alignItems="center" gap={1}>
                  <CustonButton fullWidth
                        variant="contained" 
                        onClick={handleBack}>Back</CustonButton>
                  <CustonButton  variant="contained"
                                    onClick={handleNext}>Next</CustonButton>
              </Box>

                  
           
            
          </StepWrapper>
        )}


        {step === 4 && (
          <StepWrapper>
             <Title>Payment Details</Title>
                  
            
              
 
              <Box display='flex' justifyContent="space-arround" alignItems="center" gap={1}>
                  <CustonButton fullWidth
                        variant="contained" 
                        onClick={handleBack}>Back</CustonButton>
                  <CustonButton  variant="contained"
                                    onClick={handleNext}>Next</CustonButton>
              </Box>

                  
           
            
          </StepWrapper>
        )}

    </>
  );
}



const StepperWrapper = styled(Box)({
  widht: '100%',
  height: '10vh',
  padding: '1em'
})


const StepWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  width: '100%',
  gap: '0.6em'
})

const CustomInput = styled(TextField)({
  borderRadius: '2rem',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
  width: '100%',
  outline: 'none',
  fontWeight: 700,
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "none"
    }
  }
});



const CustomDatePicker = styled(FilledInput)({
  borderRadius: '2rem',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
  width: '100%',
  outline: 'none',
  fontWeight: 700,
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "none"
    }
  },

});



const CustomSelectInput = styled(Select)({
  borderRadius: '2rem',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
  width: '100%',
  fontWeight: 700,
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
  ".MuiOutlinedInput-notchedOutline": { border: 'none' },
});


const Title = styled(Typography)({
  color: '#870000',
  fontWeight: 900,
  fontSize: '1.5rem',
})


const CustonButton = styled(Button)({
  all: 'unset',
  width: '100%',
  borderRadius: '5rem',
  padding: '1em 0 1em 1em',
  transition: 'all 0.3s ease-in-out',
  textAlign: 'center',
  color: 'white',
  fontWeight: 900,
  fontSize: '1em',
  cursor: 'pointer',
  background: 'linear-gradient(to bottom, #870000, #190a05)',
  '&:hover': {
    background: 'linear-gradient(to top, #870000, #190a05)',
  },
  

})

